import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { toast } from 'react-toastify'

import { addCheckout } from '../../actions/checkout'

import {
  Typography,
  Container,
  Card,
  CardContent,
  Button,
} from '@material-ui/core'
import Navbar from '../other/Navbar'

import Footer from '../layouts/Footer'

import { useState } from 'react'

import useStyles from '../../styles'

import '../../BillingCard.css'

const Billing = () => {
  const classes = useStyles()

  const dispatch = useDispatch()

  const { user, isAuthenticated } = useSelector((state) => state.auth)

  const history = useHistory()

  const [formData, setformData] = useState({
    plan: '',
    paymentMethod: '',
  })

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
  }

  // Submit Handler
  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (formData.plan !== '' && formData.paymentMethod !== '') {
      const freeAmount = 0
      const proAmount = 250
      const businessAmount = 500

      const data = {
        plan: formData.plan,
        paymentMethod: formData.paymentMethod,
        amount:
          formData.plan === 'free'
            ? freeAmount
            : formData.plan === 'pro'
            ? proAmount
            : businessAmount,
      }

      dispatch(addCheckout(data))

      history.push(`/checkout`) // redirect to checkout
    } else {
      toast.error('Please fill all the fields')
    }
  }

  useEffect(() => {
    document.title = `${process.env.REACT_APP_NAME} | Billing`

    if (!isAuthenticated || !user) {
      history.push('/login')
    }
  }, [])

  return (
    <>
      <div className='dashboard-and-navbar'>
        <Navbar />
        <section className='billing'>
          <Container>
            <h4 className='title'>You’re almost there! Complete your order</h4>

            <form className='displayInlineBlock' onSubmit={onSubmitHandler}>
              <div className={`steps`}>
                <Typography variant='h5' gutterBottom={true} align='left'>
                  1. Choose a plan
                </Typography>

                <div className='grid'>
                  <label className='card'>
                    <input
                      name='plan'
                      className='radio'
                      type='radio'
                      value='free'
                      onChange={onChange}
                      checked={formData.plan === 'free'}
                      disabled={true}
                    />

                    <span className='plan-details'>
                      <span className='plan-type'>Free</span>
                      <span className='plan-cost'>
                        ₱0<span className='slash'>/</span>
                        <abbr className='plan-cycle' title='month'>
                          mo
                        </abbr>
                      </span>
                      <span>3 team members</span>
                      <span>Free 3 boards</span>
                      <span>Up to 3 lists per board</span>
                    </span>
                  </label>
                  <label className='card'>
                    <input
                      name='plan'
                      className='radio'
                      type='radio'
                      value={'pro'}
                      onChange={onChange}
                      checked={formData.plan === 'pro'}
                      disabled={user && user.plan === 'pro'}
                    />
                    <span className='hidden-visually'>
                      Pro - $250 per month, 5 team members, 10 boards, 5 lists
                    </span>
                    <span className='plan-details' aria-hidden='true'>
                      <span className='plan-type'>Pro</span>
                      <span className='plan-cost'>
                        ₱250<span className='slash'>/</span>
                        <span className='plan-cycle'>mo</span>
                      </span>
                      <span>5+ team members</span>
                      <span>Upgraded to 10 boards</span>
                      <span>Up to 5 lists per board</span>
                    </span>
                  </label>
                  <label className='card'>
                    <input
                      name='plan'
                      className='radio'
                      type='radio'
                      value={'business'}
                      onChange={onChange}
                      checked={formData.plan === 'business'}
                      disabled={user && user.plan === 'business'}
                    />
                    <span className='hidden-visually'>
                      Business - $500 per month, Unlimited Members, Unlimited
                      Boards, Unlimited List
                    </span>
                    <span className='plan-details' aria-hidden='true'>
                      <span className='plan-type'>Business</span>
                      <span className='plan-cost'>
                        ₱500<span className='slash'>/</span>
                        <span className='plan-cycle'>mo</span>
                      </span>
                      <span>Unlimited team members per board</span>
                      <span>Unlimited boards</span>
                      <span>Unlimited lists</span>
                    </span>
                  </label>
                </div>
              </div>

              <div className={`steps paymentMethods`}>
                <Typography variant='h5' gutterBottom={true} align='left'>
                  2. Select Payment
                </Typography>

                <div className='grid'>
                  <label className='card'>
                    <input
                      name='paymentMethod'
                      className='radio'
                      type='radio'
                      onChange={onChange}
                      value='paypal'
                      checked={formData.paymentMethod === 'paypal'}
                    />

                    <span className='plan-details'>
                      <Typography
                        variant='body1'
                        gutterBottom={true}
                        className={classes.fontBold}
                        align='left'>
                        Paypal
                      </Typography>
                      <img
                        className={classes.wFull}
                        src='https://craftindustryalliance.org/wp-content/uploads/2019/04/PayPal_logo_logotype_emblem.png'
                        alt='paypal'
                      />
                    </span>
                  </label>

                  <label className='card'>
                    <input
                      name='paymentMethod'
                      className='radio'
                      type='radio'
                      onChange={onChange}
                      value='gcash'
                      checked={formData.paymentMethod === 'gcash'}
                    />

                    <span className='plan-details'>
                      <Typography
                        variant='body1'
                        gutterBottom={true}
                        className={classes.fontBold}
                        align='left'>
                        GCash
                      </Typography>
                      <img
                        className={classes.wFull}
                        src='https://www.bworldonline.com/wp-content/uploads/2021/09/GCash_Horizontal-Full-Blue-Transparent.png'
                        alt='gcash'
                      />
                    </span>
                  </label>
                </div>

                <div className='submit-billing'>
                  <Card>
                    <CardContent>
                      <Typography
                        gutterBottom={true}
                        variant='h5'
                        component='div'></Typography>
                      <Button
                        type='submit'
                        className={`${classes.primaryBgBlue} ${classes.White} ${classes.marginBottom}`}
                        color='primary'
                        variant='contained'>
                        Proceed To Checkout
                      </Button>
                      <Typography variant='body2' color='secondary'>
                        By checking out you agree with our Terms of Service. We
                        will process your personal data for the fulfillment of
                        your order and other purposes as per our Privacy Policy
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </Container>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Billing
