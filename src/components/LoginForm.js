import React from 'react';

export default function LoginForm() {
  return(
    <form>
      <label>
        <h3>email</h3>
        <input type="text" name="email" />
      </label>
      <label>
        <h3>password</h3>
        <input type="text" name="password" />
        <button className="btn" type="submit">submit</button>
      </label>
    </form>
  )
}