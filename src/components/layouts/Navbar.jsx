import { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
} from '@material-ui/core'

import logo from '../../assets/img/logo.png'

import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import useStyles from '../../styles'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const classes = useStyles()

  const { isAuthenticated } = useSelector((state) => state.auth)

  const [toggleCollapse, setToggleCollapse] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const toggleCollapseHandler = () => {
    setToggleCollapse(!toggleCollapse)
  }

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setWindowWidth(window.innerWidth)
    })

    if (parseInt(windowWidth) < 767) {
      setToggleCollapse(true)
    } else {
      setToggleCollapse(false)
    }

    return () => {
      window.removeEventListener('resize', (e) => {
        setWindowWidth(window.innerWidth)
      })
    }
  }, [windowWidth])

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='relative' className={classes.bgWhite}>
          <Toolbar
            className={`${classes.dflex} ${classes.justifyBetween} ${classes.alignCenter}`}>
            <div className={`${classes.dflex} ${classes.alignCenter}`}>
              <img src={logo} className='logo' alt='logo' />
              <Typography
                className={classes.primaryColorBlue}
                variant='h6'
                component='div'
                sx={{ flexGrow: 1 }}>
                {process.env.REACT_APP_NAME}
              </Typography>
            </div>
            <ul className={`navLinks`}>
              <NavLink className={classes.textDecoration} to='/home'>
                <Button>Home</Button>
              </NavLink>
              <NavLink className={classes.textDecoration} to='/about'>
                <Button>About Us</Button>
              </NavLink>
              <NavLink className={classes.textDecoration} to='/our-product'>
                <Button>Our Product</Button>
              </NavLink>
              <NavLink className={classes.textDecoration} to='/pricing'>
                <Button>Pricing</Button>
              </NavLink>
              <NavLink className={classes.textDecoration} to='/contact'>
                <Button>Contact Us</Button>
              </NavLink>
              <NavLink className={classes.textDecoration} to='/team'>
                <Button>Our Team</Button>
              </NavLink>
              <NavLink className={classes.textDecoration} to='/terms'>
                <Button>Terms</Button>
              </NavLink>
              {!isAuthenticated ? (
                <NavLink className={classes.textDecoration} to='/login'>
                  <Button
                    className={`${classes.primaryBgBlue} ${classes.White}`}
                    color='primary'
                    variant='contained'>
                    Sign In
                  </Button>
                </NavLink>
              ) : (
                <NavLink className={classes.textDecoration} to='/dashboard'>
                  <Button>Dashboard</Button>
                </NavLink>
              )}
            </ul>
            <div className='menuBtn'>
              <Button
                className={`${classes.primaryBgBlue} ${classes.White}`}
                color='primary'
                variant='contained'
                onClick={toggleCollapseHandler}>
                {toggleCollapse ? <MenuIcon /> : <CloseIcon />}
              </Button>
            </div>

            {/* MOBILE MENU */}
            <div
              id='mobileMenu'
              className={`${toggleCollapse ? 'hide' : 'showFlex'}`}>
              <NavLink className={classes.textDecoration} to='/home'>
                <Button>Home</Button>
              </NavLink>
              <NavLink className={classes.textDecoration} to='/about'>
                <Button>About Us</Button>
              </NavLink>
              <NavLink className={classes.textDecoration} to='/our-product'>
                <Button>Our Product</Button>
              </NavLink>
              <NavLink className={classes.textDecoration} to='/pricing'>
                <Button>Pricing</Button>
              </NavLink>
              <NavLink className={classes.textDecoration} to='/contact'>
                <Button>Contact Us</Button>
              </NavLink>
              <NavLink className={classes.textDecoration} to='/team'>
                <Button>Our Team</Button>
              </NavLink>
              <NavLink className={classes.textDecoration} to='/terms'>
                <Button>Terms</Button>
              </NavLink>
              {!isAuthenticated ? (
                <NavLink className={classes.textDecoration} to='/login'>
                  <Button
                    className={`${classes.primaryBgBlue} ${classes.White}`}
                    color='primary'
                    variant='contained'>
                    Sign In
                  </Button>
                </NavLink>
              ) : (
                <NavLink className={classes.textDecoration} to='/dashboard'>
                  <Button>Dashboard</Button>
                </NavLink>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
