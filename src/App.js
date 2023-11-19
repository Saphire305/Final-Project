import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import AuthAPI from './components/AuthAPI';
import Home from './components/Home';
import LogIn from './components/LogIn';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false)

  const [token, setToken] = useState('');
  const [artist, setArtist] = useState({});

  const clientId = 'be93601bda694489ade416cdc26692a7';
  const clientSecret = 'c2a814da7ab447a39e7e6cf9c5532f4a';
  
  const data = new URLSearchParams();
  data.append('grant_type', 'client_credentials');
  data.append('client_id', clientId);
  data.append('client_secret', clientSecret);

  useEffect(() => { 

      const getToken = async () => {

      const tokenObj = await axios.post('https://accounts.spotify.com/api/token', data, {
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          },
      })
      setToken(`${tokenObj.data.token_type} ${tokenObj.data.access_token}`);
      }


      getToken()

      const getArtist = async () => {
      const artistObj = await axios.get("https://api.spotify.com/v1/artists/0CEFCo8288kQU7mJi25s6E?si=_-8ZYDt5Rn-wXhOd62Lqrw", {
          headers: {"Authorization": token}})
      setArtist(artistObj.data);
      }
      
      getArtist();
  }, [])

  useEffect(() => {
    if (loggedIn){
      return navigate("/")
    }else {
      return navigate("/login")
    }
  }, [loggedIn])

  if (!artist || !artist.images || !artist.images[2]) {
      return <div className='App-header'><h1>Loading...</h1></div>; // or any loading indicator or fallback
  }

  return (
    <div className="App-header">
      <Routes>
        <Route path='/login' element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
  );
  
}

export default App;
