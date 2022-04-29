import { useState } from 'react'

import axios from 'axios'
import { toast } from 'react-toastify'

import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
} from '@material-ui/core'

import LocationOnIcon from '@material-ui/icons/LocationOn'
import MailIcon from '@material-ui/icons/Mail'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'

import useStyles from '../../styles.js'

import Navbar from '../layouts/Navbar'

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import Footer from '../layouts/Footer.jsx'

const Contact = () => {
  const classes = useStyles()

  const LATITUDE = 14.24378
  const LONGITUDE = 121.508911

  const [formData, setFormData] = useState({
    name: '',
    sender: '',
    subject: '',
    message: '',
  })

  const onChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()

    axios
      .post('/api/contacts', formData)
      .then((res) => {
        toast.success(res.data.message)

        setFormData({
          name: '',
          sender: '',
          subject: '',
          message: '',
        })
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

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
                GET IN TOUCH WITH US
              </Typography>

              <div className='line'></div>

              <Typography
                className={classes.wHalf}
                variant='subtitle1'
                gutterBottom
                align='center'>
                Contact us for more information about our services. We are
                always happy to help.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section id='cardPricing'>
        <Container>
          <Grid container spacing={2} className={classes.paddingY}>
            <Grid item xs={12} md={5}>
              <Card sx={{ minWidth: 275 }} className={classes.borderPrimaryY}>
                <CardContent>
                  <div
                    className={`${classes.dflex} ${classes.paddingSmallAround}`}>
                    <div>
                      <LocationOnIcon color='secondary' fontSize='large' />
                    </div>
                    <div className={classes.paddingX}>
                      <Typography variant='h5' component='div'>
                        Location
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                        33 A. Mabini Street, Cavinti, Laguna 4013
                      </Typography>
                    </div>
                  </div>
                  <div
                    className={`${classes.dflex} ${classes.paddingSmallAround}`}>
                    <div>
                      <MailIcon color='primary' fontSize='large' />
                    </div>
                    <div className={classes.paddingX}>
                      <Typography variant='h5' component='div'>
                        Email
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                        mrmirasrobert@gmail.com
                      </Typography>
                    </div>
                  </div>
                  <div
                    className={`${classes.dflex} ${classes.paddingSmallAround}`}>
                    <div>
                      <PhoneAndroidIcon color='error' fontSize='large' />
                    </div>
                    <div className={classes.paddingX}>
                      <Typography variant='h5' component='div'>
                        Call
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                        +63 9218295421
                      </Typography>
                    </div>
                  </div>

                  {/* MAP */}
                  <div className={classes.paddingSmallAround}>
                    <MapContainer
                      center={[LATITUDE, LONGITUDE]}
                      zoom={13}
                      scrollWheelZoom={true}>
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                      />
                      <Marker position={[LATITUDE, LONGITUDE]}>
                        <Popup>33 A. Mabini Street, Cavinti, Laguna 4013</Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={7}>
              <form onSubmit={onSubmit}>
                <Card sx={{ minWidth: 275 }} className={classes.borderPrimaryY}>
                  <CardContent>
                    <Grid container spacing={3} className={classes.paddingMed}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          className={classes.wFull}
                          label='Your Name'
                          variant='outlined'
                          name='name'
                          onChange={onChange}
                          value={formData.name}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          className={classes.wFull}
                          label='Your Email'
                          variant='outlined'
                          name='sender'
                          onChange={onChange}
                          value={formData.sender}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} className={classes.paddingMed}>
                      <Grid item xs={12} md={12}>
                        <TextField
                          className={classes.wFull}
                          label='Subject'
                          variant='outlined'
                          name='subject'
                          onChange={onChange}
                          value={formData.subject}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} className={classes.paddingMed}>
                      <Grid item xs={12} md={12}>
                        <TextField
                          className={classes.wFull}
                          label='Message'
                          multiline
                          rows={8}
                          variant='outlined'
                          name='message'
                          onChange={onChange}
                          value={formData.message}
                        />
                      </Grid>
                    </Grid>

                    <Button
                      type='submit'
                      className={`${classes.primaryBgBlue} ${classes.White}`}
                      color='primary'
                      size='large'
                      variant='contained'>
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </form>
            </Grid>
          </Grid>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default Contact
