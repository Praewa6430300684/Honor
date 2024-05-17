import { useState } from 'react';
import { Link } from 'react-router-dom';
import './createaccount.css';

const Createaccount = () => {
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
        <div className='container-register'>
            <h2>
                Create Account
            </h2>
            
            <form onSubmit={handleSubmit}>
                <div className='text2'>
                    Name
                </div>
                <input type="name" placeholder="Enter your name"></input>
                <br />
                <br />
                <div className='text2'>
                    Email Address
                </div>


                <input type="email" id='email' value={email} onChange={handleEmailChange} placeholder="Enter email Address" required />

                <br />
                <br />
                <div className='text2'>
                    Password
                    
                </div>

                <input type="password" id='password' value={password} onChange={handlePasswordChange} placeholder="Enter your password" required />
                <br />
                <br />
                <div className='text2'>
                    Confirm password
                    
                        
                </div>
                <input placeholder="Enter your confirm password"></input>
                <br /><br />
                <Link to='/uplode'>
                <button type='submit' >
                    Create Account
                </button>
                </Link>
                {errorMessage && <p>{errorMessage}</p>}</form>
            <br />
            <div className='text5'>Already have an account? 
            <Link to='/' className='text4'> Login</Link> </div>
        </div>
            

        </>

    )
}

export default Createaccount