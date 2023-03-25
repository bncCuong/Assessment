import { useEffect, useState } from 'react';
import { Button } from './button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { auth } from '../firebase';
import './styles.scss';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User, onAuthStateChanged } from 'firebase/auth';

type Inputs = {
  email: string;
  password: string;
};

export const Login = ({ getUser }: any) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [uid, setUid] = useState<string>('');

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setUid(userCredential.user.uid);
      })
      .catch(() => alert('Email not found, need sign up first'));
  };

  const signUp = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => alert(error.message))
      .finally(() => {
        setLogin(false);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ email, password }) => {
    if (!login) {
      signIn(email, password);
    } else {
      signUp(email, password);
    }

    console.log('UID: ' + uid);
    console.log('TOKEN:' + user?.accessToken);
    getUser({ user });
  };

  return (
    <div className="login">
      <h4 className="title">Login</h4>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="group">
          <label htmlFor="email" className="login-label">
            Email:
          </label>
          <input
            type="text"
            className="input"
            placeholder="example@kyanon.digital"
            {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
          />
          {errors.email && <span className="error">This field is required to be email </span>}
        </div>

        <div className="group">
          <label htmlFor="password" className="login-label">
            Password
          </label>
          <input
            type={`${showPassword ? 'text' : 'password'}`}
            className="input"
            placeholder="*********"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <span className="error">6 or more characters</span>}
        </div>

        <div className="button">
          <div className="checkbox">
            <input name="checkbox" type="checkbox" onClick={() => setShowPassword(!showPassword)} />
            <label htmlFor="checkbox">Show Password</label>
          </div>
          <div>
            <Button type="submit">Sign In</Button>
            <Button
              type="button"
              onClick={() => {
                // alert('Welcome, you can sign in now');

                setLogin(true);
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
