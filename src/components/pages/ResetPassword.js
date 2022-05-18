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

const Login = () => {
  const classes = useStyles()

  const history = useHistory()

  const [formData, setFormData] = useState({
    email: '',
  })
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  const { email } = formData

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

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/reset-password`,
        {
          email,
        }
      )

      toast.success(res.data.message)

      // Clear Input
      setFormData({
        email: '',
      })
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
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
          Reset your password
        </Typography>
        <Typography component='p' variant='body2' align='center'>
          An e-mail will be send to you with instructions on how to reset your
          password.
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

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
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
