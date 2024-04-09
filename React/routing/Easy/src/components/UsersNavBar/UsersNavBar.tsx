import { Link } from 'react-router-dom'
import './UsersNavBar.scss'

function UsersNavBar() {
  return (
    <>
    <div className='NavBar'>
    <Link className='UserLink' to="/user/1" > User 1</Link>
    <Link className='UserLink' to="/user/2" > User 2</Link>
    <Link className='UserLink' to="/user/3" > User 3</Link>
    <Link className='UserLink' to="/user/4" > User 4</Link>
    <Link className='UserLink' to="/user/5" > User 5</Link>
    </div>
    </>
  )
}

export default UsersNavBar