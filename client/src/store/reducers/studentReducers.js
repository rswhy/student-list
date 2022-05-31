

import {FETCH_STUDENTS_DATA} from '../actions/actionType'

const initialState = {
  students: [],
}

function studentReducers(state = initialState, action) {
  switch(action.type) {
    case FETCH_STUDENTS_DATA:
      return {
        ...state,
        students: action.payload
      }
    default:
      return state
  }
}

export default studentReducers