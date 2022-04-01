import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
         e.preventDefault();
         console.log({email,password})
    }
       
    return(
        <div>
            <h2>sign up.</h2>
            <Form onSubmit={handleSubmit}>
                <label>
                    <h3>email</h3>
                    <input type="text" name="email" required
                        onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <h3>password</h3>
                    <input type="text" name="password" required
                        onChange={e => setPassword(e.target.value)}/>
                </label>
                <Button type="submit">submit</Button>
            </Form>
        </div>
    )
}