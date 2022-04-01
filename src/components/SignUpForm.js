import React from "react";

export default function SignUp() {
    return(
        <div>
            <form>
                <label>
                    <h3>email</h3>
                    <input type="text" name="email"/>
                </label>
                <label>
                    <h3>password</h3>
                    <input type="text" name="password" />
                </label>
                <button className="btn">submit</button>
            </form>
        </div>
    )
}