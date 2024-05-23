import { useState } from 'react';
import './forgot.css';
const Resetpassword = () => {
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmpassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handlepassword = (e) => {
        setPassword(e.target.value);
    };
    const handleconfirmpassword = (e) => {
        setConfirmpassword(e.target.value);
    };

    const handlesubmit = (e) => {
        e.preventDefult();
        if (password !== Confirmpassword) {
            setErrorMessage('Password and Confirm Password do not match');
            return;
        }
    };
    return (
        <div className="container-forgot">

            <div className='text-reset'>
                Reset Password
            </div>
            <br />

            <form onSubmit={handlesubmit}>
                <input type='password' placeholder='New Password' value={password} onChange={handlepassword}></input>
                <br />
                <br />
                <input type='password' placeholder='Confirm Password' value={Confirmpassword} onChange={handleconfirmpassword}></input>
                <br />
                <div className='error'>{errorMessage && <p>{errorMessage}</p>}</div>
                <br />
                <div className='send'>
                    <button type='submit' >Submit</button>
                </div>
            </form>








        </div>
    )
}
export default Resetpassword