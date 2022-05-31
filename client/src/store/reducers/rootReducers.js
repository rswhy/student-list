import { combineReducers } from 'redux';
import studentReducers from "./studentReducers"

const rootReducers = combineReducers({
  students: studentReducers
})

export default rootReducers