import { Link } from 'react-router-dom'
import './UsersNavBar.scss'

function UsersNavBar() {
  return (
    <>
    <div className='NavBar'>
    <Link className='UserLink' to="/user/1"> Uesr 1</Link>
    <Link className='UserLink' to="/user/2"> Uesr 2</Link>
    <Link className='UserLink' to="/user/3"> Uesr 3</Link>
    <Link className='UserLink' to="/user/4"> Uesr 4</Link>
    <Link className='UserLink' to="/user/5"> Uesr 5</Link>
    </div>

    </>
  )
}

export default UsersNavBar