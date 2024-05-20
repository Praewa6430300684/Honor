import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Button } from '@mui/material';
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

            <div className='container-login'>
                
                <h1>
                    Login
                </h1>
                <br />
            
                <form onSubmit={handleSubmit}>
                    <div className='text2'>
                    Email Address
                </div>
                    <input type="email" id='email' value={email} onChange={handleEmailChange} placeholder="Email Address" required />

                    <br />
                    <br />
                    <div className='text2'>
                        Password
                        &nbsp;&nbsp;
                        
                    </div>
                    <span><input type="password" id='password' value={password} onChange={handlePasswordChange} placeholder="Password" required />
                    <Button><VisibilityOffOutlinedIcon/></Button></span>
                    
                    <br />
                    <br />
                    <Link to='/uplode'>
                        <button type='submit' >
                            Login
                        </button>
                    </Link>

                    {errorMessage && <p>{errorMessage}</p>}
                </form>
                <br />
                <div className='text1'>Don't have an account?
                    <Link to='/createaccount' className='text4'> Create Account</Link>
                </div>
                
            </div>
        </>

    )
}

export default Login