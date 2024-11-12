import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import './managegroup.scss'
import axios from 'axios';

function addMembers() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [members, setMembers] = useState('')
    // const [address, setAddress] = useState('')

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const adminId: string | null = localStorage.getItem('userId');

        if (!adminId) {
            console.error('admin ID mot found on localStorage')
            return;
        }
        Axios.post('http://localhost:3001/getUsers', {
            name,
            email,
            phone,
            // address,
            admin: adminId
        })
            .then(response => {
                console.log("member inserted successfully", response.data);
                setName('');
                setEmail('');
                setPhone('');
                // setAddress('');
            })
            .catch(error => {
                console.error("Error inserting member", error);
            });
    }

    useEffect(() => {
        const fetchData = async () => {
            await Axios.get('http://localhost:3001/getUsers')
                .then(res => {
                    setMembers(res.data);
                    console.log(members);
                })
        }
        fetchData();
    }, [])
    // function getUsers(){
    //     Axios.get('http://localhost:3001/getusers',)
    // }
    return (
        <>
            <h4>Add Member</h4>
            <form action="post" className='form-group' id='form'>
                <input type="text"
                    className='form-control'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />

                <input type="email"
                    className='form-control'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <input type="text"
                    className='form-control'
                    placeholder='Phone'
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value) }}
                />
                {/* <input type="text"
                    className='form-control'
                    placeholder='Address'
                    value={address}
                    onChange={(e) => { setAddress(e.target.value) }}
                /> */}
                <button className='btn btn-success' type='submit' onClick={handleSubmit}>Add Member</button>
                {/* {address ? (
                    <p className="text-success">You Are Registered Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Registered</p>
                )} */}
            </form>


        </>
    )
}

export default addMembers