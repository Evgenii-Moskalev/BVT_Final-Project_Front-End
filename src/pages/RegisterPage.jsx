import { useState } from 'react'
import { Link } from 'react-router-dom'

import { register } from '../ApiServices/authService';

const RegisterPage = () => {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    // console.log(usernameValue, passwordValue);

    const handleRegisterClick = async () => {
        const data = await register(usernameValue, passwordValue);
        console.log(data);
    }

    return (
        <div className="registerWindow">
            <input onChange={(e) => setUsernameValue(e.target.value)} placeholder='Username' />
            <input onChange={(e) => setPasswordValue(e.target.value)} placeholder='Password' />
            <button onClick={() => handleRegisterClick()}>Register</button>
            <Link to='/login'>Click here if you already have an account</Link>
        </div>
    )
}

export default RegisterPage;