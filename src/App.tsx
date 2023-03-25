import { Login, Profile } from './conponents';
import './App.scss';
import { useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const getUserHanler = ({ user }: any) => {
    setUserInfo(user);
  };

  return (
    <div className="app">
      <div className="container">
        <Login getUser={getUserHanler}/>
        <Profile user={userInfo} />
      </div>
    </div>
  );
}

export default App;
