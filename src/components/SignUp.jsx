import React, {useState} from 'react';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from "react-router-dom";
import Swal from 'sweetalert2';
import bgImg from "/assets/images/spec.png"

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
            const response = await axios.post('https://cyrilyoruba.juadebgabriel.com/yorubalearning/api/register_admin', formData);
            console.log('Registration successful:', response.data);
            if (response.status === 200) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration successful. You can now log in.',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                });
                // clear form and Redirect to login
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
                // Redirect to login page
                window.location.href = '/'; 
            
            }
        } catch (error) {
            console.error('Registration failed:', error.response?.data || error.message);
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message || 'Registration failed. Please try again.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        }
    }

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
                    <form className="signIn" onSubmit={handleSubmit}>
                        <label htmlFor="Name" className="font-mulish font-size-14 font-weight-600">Name</label>
                        <input type="text" name="name" id="name" onChange={handleChange} className="input mb-3" placeholder="Enter Name"/>

                        <label htmlFor="Email" className="font-mulish font-size-14 font-weight-600">Email
                            Address</label>
                        <input type="email" name="email" id="email" onChange={handleChange} className="input mb-3"
                               placeholder="Enter Email Address"/>

                        <label htmlFor="Password" className="font-mulish font-size-14 font-weight-600">Password</label>
                        <input type="password" name="password" id="password" onChange={handleChange} className="input mb-3"
                               placeholder="Enter Password"/>

                        <label htmlFor="Password" className="font-mulish font-size-14 font-weight-600">Confirm
                            Password</label>
                        <input type="password" name="password" id="confirmPassword" onChange={handleChange} className="input mb-3"
                               placeholder="Confirm Password"/>
                        <button className="Btn linkBtn">
                            Create Account
                        </button>
                        <p className='text-dark mt-4 text-center'>Have an Account? <Link className='linkText' to="/">Login</Link></p>
                    </form>
                </div>
            </div>

        </main>
    );
};

export default SignUp;