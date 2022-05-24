import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core'

import abouthero from '../../assets/videos/abouthero.mp4'
import aboutImg from '../../assets/img/about.png'

import useStyles from '../../styles'

import robert from '../../assets/img/robert.jpg'
import airman from '../../assets/img/airman.jpg'
import nathan from '../../assets/img/nathan.jpg'
import leynard from '../../assets/img/leynard.jpg'
import nitro from '../../assets/img/nitro.png'

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
            via the web. That's DETA from {process.env.REACT_APP_NAME} for you!
          </Typography>
        </Container>
      </section>

      <section id='ourTeam'>
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
                OUR TEAM
              </Typography>

              <Typography
                className={classes.wHalf}
                variant='subtitle1'
                gutterBottom
                align='center'>
                We are a team of passionate and creative people who love to
                create and build products.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id='cardPricing'>
        <Container>
          <Grid container spacing={2} className={classes.paddingY}>
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='300'
                  image={robert}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Robert Miras
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    CEO & Founder of {process.env.REACT_APP_NAME}. A passionate
                    and creative person who loves to create and build products.
                    He is a very good team player with a great team.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='300'
                  image={airman}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Airman Pereja
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    A person whose logical and patient nature is known to get
                    things done so that the work is organized for the coworkers
                    to easily know the plan to progress.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='300'
                  image={nathan}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Nathan Calabia
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Resource Manager of {process.env.REACT_APP_NAME}. A cool &
                    calm person that manages resources capabilities and workload
                    for the responsible and right people
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='300'
                  image={leynard}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Leynard Bernales
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    A team leader who provides his team with guidance, teaching,
                    direction, and leadership in order to achieve a certain goal
                    or set of goals.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component='img'
                  alt='green iguana'
                  height='300'
                  image={nitro}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    JC Nitro
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Project Manager of {process.env.REACT_APP_NAME}. A committed
                    and respectful person who organized and plan everything
                    clearly to make it easier for his colleagues to do thier
                    work/task
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
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
