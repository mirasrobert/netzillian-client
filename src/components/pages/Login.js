// https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in

import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../actions/auth'
import axios from 'axios'

import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Copyright from '../other/Copyright'
import useStyles from '../../utils/formStyles'
import GoogleLoginButton from '../auth/GoogleLoginButton'

import { gapi } from 'gapi-script'

const Login = () => {
  const classes = useStyles()

  const history = useHistory()

  const [googleClientdId, setGoogleClientdId] = useState(null)

  useEffect(() => {
    const getGoogleClientId = async () => {
      const { data: clientId } = await axios.get(
        process.env.REACT_APP_API_URL + '/api/config/google'
      )

      setGoogleClientdId(clientId)
    }

    getGoogleClientId()
    const start = () => {
      gapi.client.init({
        client_id: googleClientdId,
        scope: 'profile',
      })
    }

    if (googleClientdId !== null) gapi.load('client:auth2', start)
  }, [googleClientdId])

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const { email, password } = formData

  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} | Sign In`
  }, [])

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  if (isAuthenticated) {
    history.push('/dashboard')
  }

  return (
    <Container component='main' maxWidth='xs' className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h4'>
          DETA
        </Typography>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            value={email}
            onChange={(e) => onChange(e)}
          />

          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            value={password}
            onChange={(e) => onChange(e)}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}>
            Sign In
          </Button>

          <div className='hr'></div>

          <div className='center-items-vertical  mt-5 mb-5'>
            {googleClientdId && (
              <GoogleLoginButton googleClientdId={googleClientdId} />
            )}
          </div>

          <Grid container justify='space-between'>
            <Grid item>
              <Link href='/register' variant='body2'>
                Don't have an account? Sign Up
              </Link>
            </Grid>
            <Grid item>
              <Link href='/forgot-password' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default Login
