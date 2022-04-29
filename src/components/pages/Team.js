import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core'

import robert from '../../assets/img/robert.jpg'
import airman from '../../assets/img/airman.jpg'
import nathan from '../../assets/img/nathan.jpg'
import leynard from '../../assets/img/leynard.jpg'
import nitro from '../../assets/img/nitro.png'

import useStyles from '../../styles'

import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

const Team = () => {
  const classes = useStyles()

  return (
    <>
      <Navbar />

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
                    CEO & Founder of Digital Space. A passionate and creative
                    person who loves to create and build products. He is a very
                    good team player with a great team.
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
                    Resource Manager of Digital Space. A cool & calm person that
                    manages resources capabilities and workload for the
                    responsible and right people
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
                    Project Manager of Digital Space. A committed and respectful
                    person who organized and plan everything clearly to make it
                    easier for his colleagues to do thier work/task
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default Team
