import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link, useHistory } from 'react-router-dom'
import { getBoards } from '../../actions/board'
import CreateBoard from '../other/CreateBoard'
import Navbar from '../other/Navbar'
import CircularProgress from '@material-ui/core/CircularProgress'

const Dashboard = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth)
  const boards = useSelector((state) => state.board.boards)
  const loading = useSelector((state) => state.board.dashboardLoading)
  const dispatch = useDispatch()

  const history = useHistory()

  useEffect(() => {
    dispatch(getBoards())
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
        <h1>Welcome {user && user.name}</h1>
        <h2>Your Boards</h2>
        {loading && <CircularProgress className='dashboard-loading' />}
        <div className='boards'>
          {boards.map((board) => (
            <Link
              key={board._id}
              to={`/board/${board._id}`}
              className='board-card'>
              {board.title}
            </Link>
          ))}
          <CreateBoard />
        </div>
      </section>
    </div>
  )
}

export default Dashboard
