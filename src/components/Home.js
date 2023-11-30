import React from 'react'
import AuthAPI from './AuthAPI'
import NavBar from './NavBar'

function Home(props) {
  return (
    <div className='page'>
      <NavBar props={props}/>
      
      <AuthAPI props={props} />
    </div>
  )
}

export default Home