import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

function NavBar() {
    const navigate = useNavigate();

    const playlists = [{name: "playlist1", songs: ["song1"]}, {name: "playlist2", songs: ["song1", "song2"]}]
  return (
    <div className='navbar'>
        <Button onClick={() => navigate("/")} className='navButton'>Home</Button>
        {/* <Button onClick={() => navigate("/login")} className='navButton'>My Playlists</Button> */}

        <UncontrolledDropdown className='navButton' group>
            <Button onClick={() => navigate('/playlists')}>
                My Playlists
            </Button>
            <DropdownToggle
                caret
            />
            <DropdownMenu>
                <DropdownItem header>
                Playlists
                </DropdownItem>
                {playlists.map(playlist => {
                    return(
                        <DropdownItem>
                            {playlist.name}
                        </DropdownItem>
                    )
                })}
            </DropdownMenu>
            <Button onClick={() => setLoggedIn(false)}>Log Out</Button>
        </UncontrolledDropdown>
    </div>
  )
}

export default NavBar