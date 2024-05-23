import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import './forgot.css';

const Forgot = () => {
    return (
        <div className="container-forgot">
            
            <div className='text-forgot'>
                Forgot Password
            </div>
            <br/>
            <div className='text-sub'>Enter your email and we'll send you a link to reset password.</div>
            <br/>
            <span>
                <EmailOutlinedIcon/>
                &nbsp;
                <input type='email' placeholder='Email'></input>
            </span>
            
            
            <br/>
            <div className='send'><button>Submit</button></div>
            



        </div>
    )
}

export default Forgot