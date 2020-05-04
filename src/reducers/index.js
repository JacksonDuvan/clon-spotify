import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import tracksReducer from './tracksReducer'

export default combineReducers({
    dataReducer,
    tracksReducer
})