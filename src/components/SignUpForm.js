import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignUp() {
    return(
        <div>
            <h2>sign up.</h2>
            <Form>
                <label>
                    <h3>email</h3>
                    <input type="text" name="email"/>
                </label>
                <label>
                    <h3>password</h3>
                    <input type="text" name="password" />
                </label>
                <Button>submit</Button>
            </Form>
        </div>
    )
}