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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { // เปลี่ยน 'your_api_endpoint' เป็น URL ของ API ของคุณ
                email: email,
                password: password
            });

            console.log(response.data); // แสดงข้อมูลที่ได้จากการยืนยันตัวตนผู้ใช้
            alert('Login Success');

            // ทำการ redirect หรือส่งผ่าน props ไปยังหน้าต่อไป
        } catch (error) {
            console.error(error);
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
                        <Button><VisibilityOffOutlinedIcon /></Button></span>

                    <br />
                    <br />
                    <Link to='/uplode'>
                        <button type='submit' onClick={handleSubmit}>
                            Login
                        </button>
                    </Link>

                    <div className='error'>{errorMessage && <p>{errorMessage}</p>}</div>
                    
                </form>
                
                <div className='text1'>Don't have an account?
                    <Link to='/createaccount' className='text4'> Create Account</Link>
                </div>

            </div>
        </>

    )
}

export default Login