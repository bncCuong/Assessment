import { useRef } from 'react';
import { Button } from './button';
import { SubmitHandler, useForm, ValidationRule } from 'react-hook-form';

import './styles.scss';

type ProfileInputs = {
  email: string;
  name: string;
  dayOfBirth: string;
  phone: number;
};

export const Profile = ({ user, }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileInputs>();

  const onSubmit: SubmitHandler<ProfileInputs> = ({ name, email, dayOfBirth, phone }) => {
    alert(`Name: ${name}. \n Day of Birth: ${dayOfBirth}.  \n Email: ${email}.  \n Phone: ${phone}.`);
  };

  return (
    <div className="profile">
      <h4>Profile</h4>
      {user && (
        <p className="user-email">
          Wellcome <span>{user?.email}</span>
        </p>
      )}
      {user && <p className="text">Please complete your information</p>}
      <form className="form-profile" onSubmit={handleSubmit(onSubmit)}>
        <div className="group">
          <label htmlFor="Full name" className={`${user ? 'login-label' : 'profile-label'}`}>
            Full name:
          </label>
          <input
            placeholder="Your name"
            disabled={!user ? true : false}
            type="text"
            className="input"
            {...register('name', { required: true, minLength: 4 })}
          />
          {errors.name && <p className="error">4 or more characters</p>}
        </div>
        <div className="group">
          <label htmlFor="dayOfBirth" className={`${user ? 'login-label' : 'profile-label'}`}>
            Day Of Birth:
          </label>
          <input
            placeholder="yyyy/mm/dd"
            disabled={!user ? true : false}
            type="text"
            className="input"
            {...register('dayOfBirth', {
              required: true,
            })}
          />
          {errors.dayOfBirth && <p className="error">Enter your date of birth</p>}
        </div>
        <div className="group">
          <label htmlFor="email" className={`${user ? 'login-label' : 'profile-label'}`}>
            Email:
          </label>
          <input
            placeholder="email"
            disabled={!user ? true : false}
            type="text"
            className="input"
            {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
          />
          {errors.email && <span className="error">This field is required to be email </span>}
        </div>
        <div className="group">
          <label htmlFor="Phone" className={`${user ? 'login-label' : 'profile-label'}`}>
            Phone:
          </label>
          <input
            placeholder="phone number"
            disabled={!user ? true : false}
            type="number"
            className="input"
            {...register('phone', { required: true, minLength: 9 })}
          />
          {errors.phone && <p className="error">9 or more number</p>}
        </div>

        <div className="btn-action">
          <Button disabled={!user ? true : false} type="submit">
            Update
          </Button>
          <Button type="button" onClick={() => reset()}>
            {' '}
            Cancel{' '}
          </Button>
        </div>
      </form>
    </div>
  );
};
