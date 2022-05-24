import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link, useHistory } from 'react-router-dom'
import getInitials from '../../utils/getInitials'
import Navbar from '../other/Navbar'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Typography } from '@material-ui/core'

const Profile = () => {
  const [loading, setLoading] = useState(true)
  const { user, isAuthenticated } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const history = useHistory()

  useEffect(() => {
    if (!isAuthenticated || !user) {
      history.push('/login')
    } else {
      setLoading(false)
    }
  }, [dispatch])

  useEffect(() => {
    document.title = `Your Boards | ${process.env.REACT_APP_NAME}`
  }, [])

  if (!isAuthenticated) {
    history.push('/login')
  }

  return (
    <div className='dashboard-and-navbar'>
      <Navbar />
      <section className='dashboard'>
        <h1>Your Profile</h1>

        {loading || !user ? (
          <CircularProgress className='dashboard-loading' />
        ) : (
          <>
            {user && user.avatar ? (
              <img className='profile-avatar' src={user.avatar} />
            ) : (
              <div className='profile-avatar'>{user.name}</div>
            )}

            <Typography variant='h6' gutterBottom align='center'>
              {user && user.name}
            </Typography>
          </>
        )}
      </section>
    </div>
  )
}

export default Profile
