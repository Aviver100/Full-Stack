import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './UserPage.scss'

interface user {
    id: number,
    firstName: string,
    lastName: string,
    age: number
}

function UserPage() {
    const [user, setUser] = useState<user>();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(res => setUser(res))
    }, [])

    return (
        <>
            <div className='UserDetails'>
                <p>ID: {user?.id}</p>
                <p>First Name: {user?.firstName}</p>
                <p>Last Name: {user?.lastName}</p>
                <p>Age: {user?.age}</p>
            </div>
        </>
    )

}

export default UserPage