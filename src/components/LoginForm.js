import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function LoginForm() {
  return(
    <div>
       <Form>
        <label>
        <h3>email</h3>
        <input type="text" name="email" />
        </label>
        <label>
        <h3>password</h3>
        <input type="text" name="password" />
         <Button>submit</Button>
        </label>
      </Form>
    </div>   
  )
}