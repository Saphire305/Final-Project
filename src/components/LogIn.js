import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function LogIn() {
  return (
    <div className='login-page'>
        <div className='login-form'>
            <h2>Login:</h2>
            <>
            <Form>
                <FormGroup floating>
                <Input
                    id="exampleEmail"
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
                    id="examplePassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                />
                <Label for="examplePassword">
                    Password
                </Label>
                </FormGroup>
                {' '}
                <Button>
                Login
                </Button>
            </Form>
            </>
        </div>
    </div>
  )
}

export default LogIn