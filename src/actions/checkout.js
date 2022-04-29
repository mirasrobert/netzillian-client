import axios from 'axios'

import {
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_ERROR,
  CHECKOUT_PAYMENT_SUCCESS,
  CHECKOUT_PAYMENT_ERROR,
  UPDATE_USER_PLAN,
} from '../actions/types'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

// Add Checkout
export const addCheckout = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CHECKOUT_REQUEST })

    dispatch({
      type: CHECKOUT_SUCCESS,
      payload: formData,
    })
  } catch (err) {
    dispatch({
      type: CHECKOUT_ERROR,
      payload: { msg: 'Something went wrong.' },
    })
  }
}

// Purchase Payment
export const addPayment = (body) => async (dispatch) => {
  try {
    const res = await axios.post(
      process.env.REACT_APP_API_URL + '/api/payments',
      body,
      config
    )

    // Update User's Current Plan
    const newPlan = await axios.put(
      process.env.REACT_APP_API_URL + '/api/payments/plan',
      {
        plan: body.plan,
      },
      config
    )

    dispatch({
      type: CHECKOUT_PAYMENT_SUCCESS,
      payload: res.data,
    })

    dispatch({
      type: UPDATE_USER_PLAN,
      payload: newPlan.data,
    })
  } catch (err) {
    dispatch({
      type: CHECKOUT_PAYMENT_ERROR,
      payload: { msg: 'Something went wrong.' },
    })
  }
}
