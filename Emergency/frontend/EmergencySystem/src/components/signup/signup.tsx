import React, { useState } from 'react'
import Axios from 'axios'
import './signup.scss'

function signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(false)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        Axios.post('http://localhost:3001/insert', {
            name: name,
            email: email,
            password: password,
        })
            .then(response => {
                console.log("User inserted successfully", response.data);
                setName('');
                setEmail('');
                setPassword('');
                setRegister(true)
            })
            .catch(error => {
                console.error("Error inserting user", error);
            });
    }
    return (
        <>
            <form action="post" className='signupForm' id='form'>
                <input type="text"
                    className='name'
                    placeholder='Enter your user name'
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />

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
                <button type='submit' onClick={handleSubmit}>Register</button>
                {register ? (
                    <p className="text-success">You Are Registered Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Registered</p>
                )}
            </form>
        </>
    )
}

export default signup