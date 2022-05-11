import { Container, Typography, Grid } from '@material-ui/core'
import abouthero from '../../assets/videos/abouthero.mp4'
import aboutImg from '../../assets/img/about.png'

import useStyles from '../../styles'

import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer.jsx'

const About = () => {
  const classes = useStyles()

  return (
    <>
      <Navbar />
      <section id='aboutHero'>
        <Container>
          <Grid container spacing={2} className={`${classes.paddingY}`}>
            <Grid item xs={12} md={6}>
              <Typography variant='h3' gutterBottom={true} align='center'>
                Our Company
              </Typography>
              <Typography variant='subtitle1' gutterBottom align='center'>
                At scale, we build, manage, and deliver compelling experiences
                where how can there be a place where everything
                happens—eliminating planning problems, aligning our
                organizations, and escalating our teams. Finding a way to manage
                and track your plans
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <video
                className={classes.vidSize}
                src={abouthero}
                autoPlay
                muted
                loop
              />
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id='whyUs' className={classes.paddingY}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <img className={classes.wFull} src={aboutImg} alt='about-img' />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='h3' gutterBottom={true} align='left'>
                Why Us?
              </Typography>
              <Typography
                className={classes.marginBottom}
                variant='subtitle1'
                align='left'>
                <strong>DETA</strong>, a collaboration tool from{' '}
                <strong>{process.env.REACT_APP_NAME}</strong>, arranges your
                work into boards. DETA tells you what's being worked on, who's
                working on what, and where something is in the process all in
                one glance.
              </Typography>
              <Typography variant='subtitle1' align='left'>
                Consider a whiteboard covered in lists of sticky notes, each one
                representing a task for you and your team. Consider that each of
                those sticky notes has photographs,attachments from other data
                sources such as Bitbucket or Salesforce, documents, and a space
                for you to remark and engage with your peers.
              </Typography>
            </Grid>
          </Grid>
          <Typography
            className={classes.marginTop}
            variant='subtitle1'
            gutterBottom
            align='center'>
            Imagine being able to take that whiteboard with you wherever you go
            on your smartphone, and being able to access it from any computer
            via the web. That's DETA from DIGITAL SPACE for you!
          </Typography>
        </Container>
      </section>

      <section id='vision'>
        <Container>
          <Grid container spacing={2} className={classes.paddingY}>
            <Grid
              item
              xs={12}
              md={12}
              className={`${classes.dflex} ${classes.justifyCenter} ${classes.directionColumn} ${classes.alignCenter}`}>
              <Typography
                className={classes.uppercase}
                variant='h3'
                gutterBottom={true}
                align='center'>
                Vision
              </Typography>
              <Typography
                className={classes.w75}
                variant='subtitle1'
                gutterBottom
                align='center'>
                Our vision is making the team work organized and efficiently for
                the best outcome. Building relationship to each team member for
                the strong bonds that it will make and to help the team in their
                business throughout the world to bring out their max potential.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id='mission'>
        <Container>
          <Grid container spacing={2} className={classes.paddingY}>
            <Grid
              item
              xs={12}
              md={12}
              className={`${classes.dflex} ${classes.justifyCenter} ${classes.directionColumn} ${classes.alignCenter}`}>
              <Typography
                className={classes.uppercase}
                variant='h3'
                gutterBottom={true}
                align='center'>
                Mission
              </Typography>
              <Typography
                className={classes.w75}
                variant='subtitle1'
                gutterBottom
                align='center'>
                To strive hard with the utmost pleasantness for the quality of
                the products. Being productive and relevant in most certainties.
                Collaborate easily with the team for better communication
                between them and keep on tracks with the projects the team will
                make.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default About
