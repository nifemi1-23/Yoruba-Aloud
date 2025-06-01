import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from "react-router-dom";
import Swal from 'sweetalert2';
import bgImg from "/assets/images/spec.png";


const LogIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://cyrilyoruba.juadebgabriel.com/yorubalearning/api/admin_login', formData);
            console.log('Login successful:', response.data);
            if (response.status === 200) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Login successful. Welcome back!',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                    confirmButtonColor: 'green'
                });

                // clear form
                setFormData({
                    email: '',
                    password: '',
                });
                // Redirect to dashboard or home page
                // window.location.href = '/'; 
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message || 'Login failed. Please check your credentials.',
                icon: 'error',
                confirmButtonText: 'Okay',
                cancelButtonColor:'red'
            });
        }

    };

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
                        <img className="welcome_img" src="/assets/images/welcome.png" alt="img" />
                    </div>
                </div>
                <div style={myStyle} className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 img_bg2">
                    <h2 className="text-center mt-5 head">Login</h2>
                    <form className="signIn" onSubmit={handleLogin}>
                        <label htmlFor="Email" className="font-mulish font-size-14 font-weight-600">Email
                            Address</label>
                        <input type="email" name="email" id="email" onChange={handleChange} className="input mb-3" placeholder="Enter Email Address"/>

                        <label htmlFor="Password" className="font-mulish font-size-14 font-weight-600">Password</label>
                        <input type="password" name="password" id="password" onChange={handleChange} className="input mb-3" placeholder="Enter Password"/>
                        <button className="Btn linkBtn"><span className="linkText" >Log In</span></button>
                        <button className="Btn mt-2 linkBtn2"><Link className="linkText2" to="/SignUp">Sign Up</Link></button>
                    </form>
                </div>
            </div>

        </main>
    );
};

export default LogIn;