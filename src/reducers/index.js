import { combineReducers } from 'redux'
import articleReducer from './article'
import websiteReducer from './website'

export default combineReducers({
  articleReducer,
  websiteReducer
})
