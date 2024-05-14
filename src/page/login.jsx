import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'example@example.com' && password === 'password') {
            // Successful login logic, e.g., redirecting to another page
            console.log('Login successful');
            alert('Login Success')
        } else {
            setErrorMessage('Invalid email or password');
        }
    };
    return (
        <>
            


                <h1>
                    Login
                </h1>
                <br />
                <div className='textt'>
                    Email Address
                </div>

                <form onSubmit={handleSubmit}>
                    <input type="email" id='email' value={email} onChange={handleEmailChange} placeholder="Email Address" required />

                    <br />
                    <br />
                    <div className='text2'>
                        Password
                    </div>

                    <input type="password" id='password' value={password} onChange={handlePasswordChange} placeholder="Password" required />

                    <div className='text3'>
                        forgot password?

                    </div>
                    <br />
                    <Link to='/uplode'>
                        <button type='submit' >
                            Login
                        </button>
                    </Link>

                    {errorMessage && <p>{errorMessage}</p>}</form>
                <br /><div className='text1'>Don't have an account?
                    <Link to='/createaccount'> Create Account</Link>
                </div>




            
        </>

    )
}

export default Login