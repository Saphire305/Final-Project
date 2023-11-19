import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function LogIn({loggedIn, setLoggedIn}) {
  return (
    <div className='login-page'>
        <div className='login-form'>
            <h2>Login:</h2>
            <>
            <Form className='loginInput'>
                <FormGroup floating>
                <Input
                    id="loginEmail"
                    name="email"
                    placeholder="Email"
                    type="email"
                />
                <Label for="exampleEmail">
                    Email
                </Label>
                </FormGroup>
                {' '}   
                <FormGroup floating>
                <Input
                    id="loginPassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                />
                <Label for="examplePassword">
                    Password
                </Label>
                </FormGroup>
                {' '}
                <Button onClick={() => setLoggedIn(true)}>
                Login
                </Button>
            </Form>
            </>
        </div>
    </div>
  )
}

export default LogIn