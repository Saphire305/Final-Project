import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import AuthAPI from './components/AuthAPI';
import Home from './components/Home';
import LogIn from './components/LogIn';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Playlists from './components/Playlists';
import NavBar from './components/NavBar';

function App() {

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false)

  const [token, setToken] = useState('');
  const [artist, setArtist] = useState({});
  const [user, setUser] = useState({})

  useEffect(() => {
    if (loggedIn){
      return navigate("/")
    }else {
      return navigate("/login")
    }
  }, [loggedIn])

  return (
    <div className="App-header">  
      <Routes>
        <Route path='/login' element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path='/' element={<Home token={token} artist={artist} setToken={setToken} setArtist={setArtist} user={user} setUser={setUser}/>} />
        <Route path='/playlists' element={<Playlists />} />
      </Routes>
      
    </div>
  );
  
}

export default App;
