
import { useEffect, useState } from 'react';
import './App.css';
// import GoogleLogin from './GoogleLogin';
import axios from 'axios';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';


function App() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [user])
  console.log("user data", profile);


  return (


    <div className="App">

      {/* <GoogleLogin /> */}


      <GoogleLogin
        onSuccess={login}
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
      />;
    </div >

  );
}

export default App;
