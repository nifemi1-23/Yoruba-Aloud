import React from "react";
import './App.css';
import {Link} from "react-router-dom";


function SignUp() {
    return (
        <main>
            <form>
                <label form="Email">Email</label>
                <input type="email" placeholder="Email" />
                <button><Link to="/">Log In</Link></button>
                <button><Link to="#">Sign Up</Link></button>

            </form>
                <img src="/assets/images/yorubalogo.png" alt="img"  />
        </main>
    );
}
export default SignUp;