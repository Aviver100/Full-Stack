import React, { useState } from 'react'
import Axios from 'axios'
import './login.scss'

function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);


    function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        Axios.post('http://localhost:3001/login', {
            email: email,
            password: password,
        })
            .then(response => {
                console.log("User login successfully", response.data);
                setEmail('');
                setPassword('');
                setLogin(true);
                localStorage.setItem('userName', response.data.name);
            })
            .catch(error => {
                console.error("Error login user", error);
            });
    }
    return (
        <>
            <form className='loginForm' onSubmit={handleLogin}>
                <input type="email"
                    className='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <input type="password"
                    className='name'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button type='submit'>Login</button>
            </form>
            {login ? (
                <p className="text-success">You Are Logged in Successfully</p>
            ) : (
                <p className="text-danger">You Are Not Logged in</p>
            )}
        </>
    )
}

export default login