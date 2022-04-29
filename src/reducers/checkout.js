import {
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_ERROR,
  CHECKOUT_PAYMENT_SUCCESS,
  CHECKOUT_PAYMENT_ERROR,
} from '../actions/types'

const initialState = {
  checkoutIsLoading: false,
  checkoutHasError: false,
  plan: null,
  paymentMethod: null,
  amount: null,
  onProcess: false,
  recentPayment: null,
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case CHECKOUT_REQUEST:
      return {
        ...state,
        checkoutIsLoading: true,
        checkoutHasError: false,
        onProcess: false,
      }
    case CHECKOUT_SUCCESS:
      return {
        ...state,
        checkoutIsLoading: false,
        checkoutHasError: false,
        plan: payload.plan,
        paymentMethod: payload.paymentMethod,
        amount: payload.amount,
        onProcess: true,
      }
    case CHECKOUT_ERROR:
      return {
        ...state,
        checkoutIsLoading: false,
        checkoutHasError: true,
        payload: payload.msg,
      }

    case CHECKOUT_PAYMENT_SUCCESS:
      return {
        ...state,
        checkoutIsLoading: false,
        checkoutHasError: false,
        recentPayment: payload,
      }

    case CHECKOUT_PAYMENT_ERROR:
      return {
        ...state,
        checkoutIsLoading: false,
        checkoutHasError: true,
        recentPayment: null,
      }

    default:
      return initialState
  }
}
