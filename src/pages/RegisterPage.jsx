import { useState } from 'react'
import { Link } from 'react-router-dom'



const RegisterPage = () => {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    // console.log(usernameValue, passwordValue);

    return (
        <div className="registerWindow">
            <input onChange={(e) => setUsernameValue(e.target.value)} placeholder='Username' />
            <input onChange={(e) => setPasswordValue(e.target.value)} placeholder='Password' />
            <button>Register</button>
            <Link to='/login'>Click here if you already have an account</Link>
        </div>
    )
}

export default RegisterPage;