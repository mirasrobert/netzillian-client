import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navbar from '../layouts/Navbar'

import { Grid, Container, Typography, Button } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import hero from '../../assets/img/hero.svg'

import useStyles from '../../styles'
import Footer from '../layouts/Footer'

const Landing = () => {
  const classes = useStyles()

  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} | DETA`
  }, [])

  return (
    <>
      <Navbar />
      <section id='hero'>
        <Container className='mx-auto'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography variant='h3' gutterBottom={true}>
                DETA is a project management tool that assists teams in moving
                work forward
              </Typography>

              <Typography variant='subtitle1' gutterBottom={true}>
                Collaborate, manage projects, and push yourself to new levels of
                productivity. Your team's working style is distinct, from
                high-rises to workspaces; DETA can help you achieve it all.
              </Typography>

              <Link to={'/register'} className={classes.textDecoration}>
                <Button
                  className={`${classes.primaryBgBlue} ${classes.White}`}
                  color='primary'
                  variant='contained'>
                  Get Started <ArrowForwardIcon />
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} md={4}>
              <img className={classes.wFull} src={hero} alt='hero' />
            </Grid>
          </Grid>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default Landing
