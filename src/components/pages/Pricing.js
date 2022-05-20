import {
  Container,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
} from '@material-ui/core'

import CheckIcon from '@material-ui/icons/Check'
import { Link } from 'react-router-dom'

import useStyles from '../../styles'
import Footer from '../layouts/Footer'

import Navbar from '../layouts/Navbar'

const Pricing = () => {
  const classes = useStyles()

  return (
    <>
      <Navbar />

      <section id='pricing'>
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
                DETA YOUR WAY
              </Typography>

              <Typography
                className={classes.wHalf}
                variant='subtitle1'
                gutterBottom
                align='center'>
                Trusted by millions, Deta powers teams all around the world.
                Explore which option is right for you.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id='cardPricing'>
        <Container>
          <Grid container spacing={2} className={classes.paddingY}>
            <Grid item xs={12} md={4}>
              {/* FREE TIER */}
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color='text.secondary'
                    gutterBottom={true}
                    align='center'>
                    <strong>FREE</strong>
                  </Typography>
                  <Typography variant='h5' component='div' align='center'>
                    ₱ <span className={classes.fontLg}>0</span> / MO
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    gutterBottom={true}
                    variant='subtitle2'
                    color='text.secondary'
                    align='center'>
                    Free for your whole team
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color='text.secondary'
                    align='center'>
                    For individuals or teams looking to organize anything.
                  </Typography>

                  <CardActions
                    className={`${classes.dflex} ${classes.justifyCenter} ${classes.directionColumn} ${classes.alignCenter}`}>
                    <Link to='/login' className={classes.textDecoration}>
                      <Button variant='outlined' size='small'>
                        Try For Free
                      </Button>
                    </Link>
                  </CardActions>

                  <div className='pricingFeatures'>
                    <Typography color='text.secondary' align='center'>
                      <strong>Included in Free: </strong>
                    </Typography>
                    <ul
                      className={`${classes.paddingAround} ${classes.textCenter} ${classes.listStyleNone}`}>
                      <li>
                        <CheckIcon fontSize='small' color='primary' />
                        Unlimited cards
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Free 3 boards for your account
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Up to 3 boards lists
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Unlimited storage (10MB/file)
                      </li>
                      <li>Up to 3 team members per board</li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Custom backgrounds & stickers
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Unlimited activity log
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Assignee and due dates
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        iOS and Android mobile apps
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        2-factor authentication
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              {/* PRO TIER */}
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color='text.secondary'
                    gutterBottom={true}
                    align='center'>
                    <strong>PRO</strong>
                  </Typography>
                  <Typography variant='h5' component='div' align='center'>
                    ₱ <span className={classes.fontLg}>250</span> / MO
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    gutterBottom={true}
                    color='text.secondary'
                    variant='subtitle2'
                    align='center'>
                    Per user per month billed annually (₱300 billed monthly)
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color='text.secondary'
                    align='center'>
                    For teams that need to manage more work and scale
                    collaboration.
                  </Typography>

                  <CardActions
                    className={`${classes.dflex} ${classes.justifyCenter} ${classes.directionColumn} ${classes.alignCenter}`}>
                    <Link to='/login' className={classes.textDecoration}>
                      <Button variant='outlined' size='small'>
                        Sign Up Now
                      </Button>
                    </Link>
                  </CardActions>

                  <div className='pricingFeatures'>
                    <Typography color='text.secondary' align='center'>
                      <strong>Everything in Free, plus:</strong>
                    </Typography>
                    <ul
                      className={`${classes.paddingAround} ${classes.textCenter} ${classes.listStyleNone}`}>
                      <li>
                        <CheckIcon fontSize='small' color='primary' />
                        5+ team members
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Upgraded your account up to 10 boards
                      </li>
                      <li>
                        <CheckIcon fontSize='small' color='primary' /> Up to 5
                        lists per board
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Custom Fields
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Unlimited storage (250MB/file)
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        1,000 Workspace command runs per month
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Single board guests
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Saved searches{' '}
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              {/* BUSINESS TIER */}
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color='text.secondary'
                    gutterBottom={true}
                    align='center'>
                    <strong>BUSINESS</strong>
                  </Typography>
                  <Typography variant='h5' component='div' align='center'>
                    ₱ <span className={classes.fontLg}>500</span> / MO
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    gutterBottom={true}
                    variant='subtitle2'
                    color='text.secondary'
                    align='center'>
                    Per user per month billed annually (₱650 billed monthly)
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color='text.secondary'
                    align='center'>
                    Best for teams up to 100 that need to track multiple
                    projects and visualize work in a variety of ways.{' '}
                  </Typography>

                  <CardActions
                    className={`${classes.dflex} ${classes.justifyCenter} ${classes.directionColumn} ${classes.alignCenter}`}>
                    <Link to='/login' className={classes.textDecoration}>
                      <Button variant='outlined' size='small'>
                        Sign Up Now
                      </Button>
                    </Link>
                  </CardActions>

                  <div className='pricingFeatures'>
                    <Typography color='text.secondary' align='center'>
                      <strong>Everything in Standard, plus:</strong>
                    </Typography>
                    <ul
                      className={`${classes.paddingAround} ${classes.textCenter} ${classes.listStyleNone}`}>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Unlimited team members per board
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Unlimited boards for your account
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Calendar view
                      </li>
                      <li>
                        <CheckIcon fontSize='small' color='primary' />
                        Unlimited lists for you
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Custom backgrounds & stickers
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Map view
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Unlimited Workspace command runs
                      </li>
                      <li>
                        {' '}
                        <CheckIcon fontSize='small' color='primary' />
                        Admin and security features
                      </li>
                      <li>
                        <CheckIcon fontSize='small' color='primary' />
                        Dashboard view
                      </li>
                    </ul>
                  </div>
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

export default Pricing
