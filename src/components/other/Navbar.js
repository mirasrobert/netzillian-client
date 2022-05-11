import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/auth'

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  if (!isAuthenticated) {
    return ''
  }

  return (
    <nav className='navbar'>
      <div>
        <Link className='text-center' to='/'>
          {process.env.REACT_APP_NAME} | DETA
        </Link>
      </div>
      <div>
        <Link style={{ marginRight: '10px' }} to='/dashboard'>
          Dashboard
        </Link>
        <Link style={{ marginRight: '10px' }} to='/billing'>
          Plans
        </Link>
        <Link style={{ marginRight: '10px' }} to='/transactions'>
          Transactions
        </Link>
        <Link to='/' onClick={() => dispatch(logout())}>
          Logout
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
