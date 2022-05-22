import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navbar from '../layouts/Navbar'

import { Grid, Container, Typography, Button } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import scrum_board from '../../assets/img/scrum_board.svg'
import schedule_meeting from '../../assets/img/schedule_meeting.svg'
import netzillia_screenshot_1 from '../../assets/img/netzillia_screenshot_1.PNG'
import netzillia_screenshot_2 from '../../assets/img/netzillia_screenshot_2.PNG'
import netzillia_screenshot_3 from '../../assets/img/netzillia_screenshot_3.PNG'

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

      <section id='hero-2'>
        <Container className='mx-auto'>
          <Grid container spacing={2} className='our-product'>
            <Grid item xs={12} md={12}>
              <img
                className={classes.wFull}
                src={scrum_board}
                alt='scrum_board'
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={12}>
              <Typography variant='h3' gutterBottom={true} align='center'>
                Without the chaos of project management
              </Typography>

              <div className='center-items-vertical'>
                <div>
                  <Typography
                    variant='subtitle1'
                    gutterBottom={true}
                    align='center'>
                    DETA makes it simple to manage projects from start to
                    finish. Keep track of every aspect of your next project.
                    intended for Any size team, anywhere
                  </Typography>
                </div>

                <div>
                  <Link to={'/register'} className={classes.textDecoration}>
                    <Button
                      className={`${classes.primaryBgBlue} ${classes.White}`}
                      color='primary'
                      variant='contained'>
                      Get Started <ArrowForwardIcon />
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id='hero-2'>
        <Container className='mx-auto'>
          <Grid container>
            <Grid item xs={12} md={12}>
              <Typography variant='h4' gutterBottom={true} align='center'>
                Manage any project (big or small) with DETA
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={3} className='our-product'>
            <Grid item xs={12} md={12}>
              <img
                className={classes.wFull}
                src={netzillia_screenshot_2}
                alt='netzillia_screenshot_2'
              />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id='hero'>
        <Container className='mx-auto'>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant='h3' gutterBottom={true}>
                Quickly generate unique ideas
              </Typography>

              <Typography variant='subtitle1' gutterBottom={true}>
                DETA's is the virtual (white)board that you and your team will
                be using. to generate new ideas or brainstorm solutions It is
                simple to obtain Begin by making a board and adding cards as
                ideas come to you. Give ideas context by including descriptions
                and attachments.
              </Typography>

              <Link to={'/login'} className={classes.textDecoration}>
                <Button
                  className={`${classes.primaryBgBlue} ${classes.White}`}
                  color='primary'
                  variant='contained'>
                  Try for free <ArrowForwardIcon />
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                className={classes.wFull}
                src={netzillia_screenshot_1}
                alt='netzillia_screenshot_1'
              />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id='hero'>
        <Container className='mx-auto'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                className={classes.wFull}
                src={netzillia_screenshot_3}
                alt='netzillia_screenshot_3'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='h3' gutterBottom={true} align='center'>
                Assign tasks and keep track of deadlines.
              </Typography>

              <Typography
                variant='subtitle1'
                gutterBottom={true}
                align='center'>
                DETA's advanced checklists empower you to add more. By assigning
                team members and due dates to checklist items, you can add
                context to your tasks while also increasing visibility and
                holding your team accountable. Add color labels on cards so you
                can visualize your progress.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id='hero' className='mb-5'>
        <Container className='mx-auto'>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant='h3' gutterBottom={true}>
                Everything you need is contained on cards.
              </Typography>

              <Typography variant='subtitle1' gutterBottom={true}>
                DETA cards are your gateway to more organized work, allowing you
                to manage, track, and share every aspect of your project. with
                colleagues Open any card to reveal a thriving ecosystem of
                checklists, deadlines, attachments, discussions, and more.
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
            <Grid item xs={12} md={6}>
              <img
                className={classes.wFull}
                src={schedule_meeting}
                alt='schedule_meeting'
              />
            </Grid>
          </Grid>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default Landing
