import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import board from './board'
import checkout from './checkout'

export default combineReducers({ alert, auth, board, checkout })
