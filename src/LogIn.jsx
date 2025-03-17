import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from "react-router-dom";


function LogIn() {
    return (
        <main class="LogMain">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="/assets/images/LogImg.png" alt="img" />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <form>
                        <label form="Email">Email</label>
                        <input type="email" placeholder="Email" />
                        <button><Link to="/login">Log In</Link></button>
                        <button><Link to="/SignUp">Sign Up</Link></button>
                    </form>
                </div>
            </div>

        </main>
    );
}
export default LogIn;