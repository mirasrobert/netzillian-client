import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navbar from '../layouts/Navbar'

import { Grid, Container, Typography, Button } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import hero from '../../assets/img/hero.svg'
import project_team from '../../assets/img/project_team.svg'
import scrum_board from '../../assets/img/scrum_board.svg'
import online_collaboration from '../../assets/img/online_collaboration.svg'

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

      <section id='hero-2'>
        <Container className='mx-auto '>
          <Grid container>
            <Grid item xs={12} md={12}>
              <Typography variant='h4' gutterBottom={true} align='center'>
                It’s more than work. It's a means of collaborating.
              </Typography>

              <Typography
                variant='subtitle1'
                gutterBottom={true}
                align='center'>
                Begin by creating a DETA board, lists, and cards. As your team
                expands, customize and add more functions. Customize and add new
                features as your team grows.—all in one place.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} className='mt-5'>
            <Grid item xs={12} md={12}>
              <img
                className='hero-2-img'
                src={project_team}
                alt='project_team'
              />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id='hero' className='mb-5'>
        <Container className='mx-auto'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant='h3' gutterBottom={true}>
                Features to aid your team's success
              </Typography>

              <Typography variant='subtitle1' gutterBottom={true}>
                Using a powerful tool to power a productive team a lot of
                snacks). Meetings and projects, as well as events and goals
                Netzillias's DETA user-friendly features enable any team to to
                quickly set up and customize workflows for virtually any
                application anything.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                className={classes.wFull}
                src={scrum_board}
                alt='scrum_board'
              />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id='hero' className='mb-5'>
        <Container className='mx-auto'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                className={classes.wFull}
                src={online_collaboration}
                alt='online_collaboration'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='h3' gutterBottom={true}>
                The board is only the starting point.
              </Typography>

              <Typography variant='subtitle1' gutterBottom={true}>
                Lists and cards serve as the foundation for organizing work on a
                bulletin board. Then add task assignments, timelines,
                checklists, dates, and other details.
              </Typography>
              <Link to={'/pricing'} className={classes.textDecoration}>
                <Button
                  className={`${classes.primaryBgBlue} ${classes.White}`}
                  color='primary'
                  variant='contained'>
                  Check our pricing <ArrowForwardIcon />
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default Landing
