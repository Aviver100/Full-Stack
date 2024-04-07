import { Link } from 'react-router-dom'
import './UsersNavBar.scss'

function UsersNavBar() {
  return (
    <>
    <div className='NavBar'>
    <Link className='UserLink' to="/user/1" reloadDocument> Uesr 1</Link>
    <Link className='UserLink' to="/user/2" reloadDocument> Uesr 2</Link>
    <Link className='UserLink' to="/user/3" reloadDocument> Uesr 3</Link>
    <Link className='UserLink' to="/user/4" reloadDocument> Uesr 4</Link>
    <Link className='UserLink' to="/user/5" reloadDocument> Uesr 5</Link>
    </div>

    </>
  )
}

export default UsersNavBar