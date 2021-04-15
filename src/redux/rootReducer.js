import { combineReducers } from '@reduxjs/toolkit'
import Weather from './slice'

const rootReducer = combineReducers({ Weather })

export default rootReducer
