import React from 'react'
import { Link, useParams } from 'react-router-dom'

function UserPage() {

    const { id } = useParams();
    fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(console.log);


    return (
        <>
            <div>UserPage {id}</div>
        </>
    )

}

export default UserPage