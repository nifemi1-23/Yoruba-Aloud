import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import bgImg from "/assets/images/spec.png"


function SignUp() {
    const myStyle = {
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover"
    };
    return (
        <main className="Main">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                    <div className="img_bg">
                        <img className="welcome_img" src="/assets/images/sigimg.png" alt="img"/>
                    </div>
                </div>
                <div style={myStyle} className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 img_bg2">
                    <h2 className="text-center mt-5 head">Register</h2>
                    <form className="signIn">
                        <label htmlFor="Name" className="font-mulish font-size-14 font-weight-600">Name</label>
                        <input type="text" name="name" id="name" className="input mb-3" placeholder="Enter Name"/>

                        <label htmlFor="Email" className="font-mulish font-size-14 font-weight-600">Email
                            Address</label>
                        <input type="email" name="email" id="email" className="input mb-3"
                               placeholder="Enter Email Address"/>

                        <label htmlFor="Password" className="font-mulish font-size-14 font-weight-600">Password</label>
                        <input type="password" name="password" id="password" className="input mb-3"
                               placeholder="Enter Password"/>

                        <label htmlFor="Password" className="font-mulish font-size-14 font-weight-600">Confirm
                            Password</label>
                        <input type="password" name="password" id="confirmPassword" className="input mb-3"
                               placeholder="Confirm Password"/>
                        <button className="Btn linkBtn">
                            <Link class="linkText" to="#">Create Account</Link>
                        </button>
                    </form>
                </div>
            </div>

        </main>
    );
}

export default SignUp;