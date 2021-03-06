// https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/sign-in

import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import axios from 'axios'
import { toast } from 'react-toastify'

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

const Login = ({ match }) => {
  const [isEmailLoading, setIsEmailLoading] = useState(false)

  const classes = useStyles()

  const history = useHistory()

  const [formData, setFormData] = useState({
    password: '',
    password_confirmation: '',
  })
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const { password, password_confirmation } = formData

  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} | Forgot password`
  }, [])

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  if (isAuthenticated) {
    history.push('/dashboard')
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    setIsEmailLoading(true)

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      // Check if passwords match
      if (password !== password_confirmation) {
        toast.error('Passwords do not match')
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/reset-password/reset`,
          {
            email: match.params.email,
            token: match.params.token,
            password: password,
          },
          config
        )

        toast.success(res.data.message)

        // Clear Input
        setFormData({
          password: '',
          password_confirmation: '',
        })

        // Redirect to login
        history.push('/login')
      }

      setIsEmailLoading(false)
    } catch (error) {
      toast.error(error.response.data.message)
      setIsEmailLoading(false)
      // Clear Input
      setFormData({
        password: '',
        password_confirmation: '',
      })
    }
  }

  return (
    <Container component='main' maxWidth='xs' className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h4'>
          DETA
        </Typography>
        <Typography component='h1' variant='h5'>
          Change Password
        </Typography>
        <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
          <TextField
            type='password'
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='New password'
            name='password'
            autoComplete='password'
            autoFocus
            value={password}
            onChange={(e) => onChange(e)}
          />

          <TextField
            type='password'
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Confirm password'
            name='password_confirmation'
            autoComplete='password_confirmation'
            autoFocus
            value={password_confirmation}
            onChange={(e) => onChange(e)}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            disabled={isEmailLoading}
            className={classes.submit}>
            Submit
          </Button>
          <Grid container justify='space-between'>
            <Grid item>
              <Link href='/register' variant='body2'>
                Don't have an account? Sign Up
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
