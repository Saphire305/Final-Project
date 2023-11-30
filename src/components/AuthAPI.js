import React, { useEffect } from 'react'
import axios from 'axios';
import Client from './Client';
// { token, artist, setToken, setArtist }
function AuthAPI({props}) {
    // console.log(props)

    let token = props.token
    let artist = props.artist
    let setToken = props.setToken
    let setArtist = props.setArtist
    let user = props.user
    let setUser = props.setUser

    // console.log(<Client />)

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
        
        // getArtist();


        const getUser = async () => {
            const userObj = await axios.get("https://api.spotify.com/v1/me" , {
                headers: {"Authorization": token}})
                setUser(userObj.data)
                console.log(userObj)
                console.log(userObj.data)
        }
        getUser()
    }, [])
        
        if (!artist || !artist.images || !artist.images[2]) {
            return <div className='App-header'><h1>Loading...</h1></div>; // or any loading indicator or fallback
        }

        if (!user.name) {
            return <div className='App-header'><h1>Loading...</h1></div>; // or any loading indicator or fallback
        }

  return (
    <div>
        <div>
            {/* <h2>{artist.name}</h2>
            <img src={artist.images[1].url} /> */}
            {console.log(user)}
        </div>
    </div>
  )
}

export default AuthAPI