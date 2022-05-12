import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'

import CircularProgress from '@material-ui/core/CircularProgress'

import { addPayment } from '../../actions/checkout'

import {
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Divider,
} from '@material-ui/core'
import Navbar from '../other/Navbar'

import Footer from '../layouts/Footer'

import useStyles from '../../styles'

const Billing = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth)
  const { checkoutIsLoading, onProcess, amount, plan, paymentMethod } =
    useSelector((state) => state.checkout)

  const classes = useStyles()

  const history = useHistory()

  const dispatch = useDispatch()

  const [sdkReady, setSdkReady] = useState(false)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get(
        process.env.REACT_APP_API_URL + '/api/config/paypal'
      )
      const paypalScript = document.createElement('script')
      paypalScript.type = 'text/javasript'
      paypalScript.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&locale=en_PH&currency=PHP`
      paypalScript.async = true
      document.body.appendChild(paypalScript)

      setTimeout(() => {
        setSdkReady(true)
      }, 1000)
    }

    if (!window.paypal) {
      addPaypalScript()
    } else {
      setSdkReady(true)
    }
  }, [window.paypal])

  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} | Checkout`

    if (!isAuthenticated) {
      history.push('/login')
    }

    if (!onProcess) {
      history.push('/billing')
    }
  }, [])

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

  const successPaymentHandler = async (payment) => {
    let paymentPlan = plan?.charAt(0).toUpperCase() + plan?.slice(1) // Make Uppercase First Letter
    let payMethod =
      paymentMethod?.charAt(0).toUpperCase() + paymentMethod?.slice(1) // Make Uppercase First Letter

    const data = {
      paymentMethod: payMethod.toString(),
      amount: amount,
      plan: paymentPlan.toString(),
      transactionId: payment.id,
      currency: payment.purchase_units[0].amount.currency_code,
    }

    dispatch(addPayment(data))

    await axios.post(
      `${process.env.REACT_APP_API_URL}/api/contacts/invoice`,
      {
        plan: plan,
        amount: amount,
        transactionId: payment.id,
        date: payment.create_time,
      },
      config
    )

    toast.success('Payment Successful')

    history.push('/dashboard')
  }

  return (
    <>
      <div className='dashboard-and-navbar'>
        <Navbar />
        <section className='billing'>
          <Container>
            <h4 className={`title ${classes.textCenter}`}>
              You’re almost there! Purchase your order
            </h4>

            {!sdkReady && checkoutIsLoading ? (
              <div className={`${classes.dflex} ${classes.centerFlex} mb-3`}>
                <CircularProgress className='dashboard-loading' />
              </div>
            ) : (
              <div className='center-div'>
                <form onSubmit={onSubmitHandler}>
                  <Grid
                    container
                    direction='column'
                    alignItems='center'
                    justify='center'>
                    <Grid item md={6} sm={12}>
                      <Card className={classes.marginY}>
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant='h5'
                            component='div'
                            align='center'>
                            Order Summary
                          </Typography>

                          <Divider />

                          <Grid container spacing={2}>
                            <Grid item sm={6}>
                              <span>
                                {`${
                                  plan?.charAt(0).toUpperCase() + plan?.slice(1)
                                }`}{' '}
                                Plan
                              </span>
                            </Grid>
                            <Grid item sm={6}>
                              ₱{amount}
                            </Grid>
                          </Grid>

                          <Grid container spacing={2}>
                            <Grid item sm={6}>
                              Monthly (Pay Every Month)
                            </Grid>
                            <Grid item sm={6}></Grid>
                          </Grid>

                          <Divider />

                          <Grid container spacing={2}>
                            <Grid item sm={6}>
                              VAT 0%
                            </Grid>
                            <Grid item sm={6}>
                              ₱0.00
                            </Grid>
                          </Grid>

                          <Divider />

                          <Grid container spacing={2}>
                            <Grid item sm={6}>
                              <Typography
                                gutterBottom
                                variant='h5'
                                component='div'
                                align='left'
                                className={classes.marginTop}>
                                Total
                              </Typography>
                            </Grid>
                            <Grid item sm={6}>
                              <Typography
                                gutterBottom
                                variant='h5'
                                component='div'
                                align='left'
                                className={classes.marginTop}>
                                ₱{amount}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Divider />

                          {/* Paypal here */}

                          {!sdkReady && checkoutIsLoading ? (
                            <div
                              className={`${classes.dflex} ${classes.centerFlex} mb-3`}>
                              <CircularProgress className='dashboard-loading' />
                            </div>
                          ) : (
                            <PayPalButton
                              amount={amount}
                              onSuccess={successPaymentHandler}
                            />
                          )}

                          <div
                            className={`${classes.dflex} ${classes.centerFlex} mb-3`}>
                            <img
                              src='https://mewtronshop.herokuapp.com/img/payment.png'
                              alt=''
                            />
                          </div>

                          <Typography variant='body2' color='secondary'>
                            By checking out you agree with our Terms of Service.
                            We will process your personal data for the
                            fulfillment of your order and other purposes as per
                            our Privacy Policy
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </form>
              </div>
            )}
          </Container>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Billing
