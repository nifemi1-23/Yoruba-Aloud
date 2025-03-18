import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from "react-router-dom";


function LogIn() {
        const myStyle = {
            backgroundImage: "url('/assets/images/spec.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
        };
    return (
        <main class="Main">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                    <div className="img_bg">
                        <img class="welcome_img" src="/assets/images/welcome.png" alt="img" />
                    </div>
                </div>
                <div style={myStyle} class="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 img_bg2">
                    <h2 class="text-center mt-5 head">Login</h2>
                    <form class="signIn">
                        <label htmlFor="Email" className="font-mulish font-size-14 font-weight-600">Email
                            Address</label>
                        <input type="email" name="email" id="email" className="input mb-3" placeholder="Enter Email Address"/>

                        <label htmlFor="Password" className="font-mulish font-size-14 font-weight-600">Password</label>
                        <input type="password" name="password" id="password" className="input mb-3" placeholder="Enter Password"/>
                        <button class="Btn linkBtn"><Link class="linkText" to="/">Log In</Link></button>
                        {/*<button><Link to="/SignUp">Sign Up</Link></button>*/}
                    </form>
                </div>
            </div>

        </main>
    );
}

export default LogIn;