import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './UserPage.scss'

interface user {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    phone: number,
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
         <table className='UserDetailsTable'>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>{user?.id}</td>
            <td>{user?.firstName}</td>
            <td>{user?.lastName}</td>
            <td>{user?.email}</td>
            <td>{user?.phone}</td>
            <td>{user?.age}</td>
        </tr>
    </table>
            {/* <div className='UserDetails'>
                <p>ID: {user?.id}</p>
                <p>First Name: {user?.firstName}</p>
                <p>Last Name: {user?.lastName}</p>
                <p>Age: {user?.age}</p>
            </div> */}
        </>
    )

}

export default UserPage