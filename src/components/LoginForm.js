import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
         e.preventDefault();
         console.log({email,password})
  }
  
  return(
    <div>
      <h3>log in</h3>
       <Form onSubmit={handleSubmit}>
          <label>
            <input type="text" name="email" placeholder="email" required 
              onChange={e => setEmail(e.target.value)}/>
          </label>
          <label>
            <input type="text" name="password" placeholder="password" required 
              onChange={e => setPassword(e.target.value)}/>
          </label>
          <Button>submit</Button>
      </Form>
    </div>   
  )
}