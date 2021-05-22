import UUID from 'uuid-js';
import { adventuresconstants } from '../actions/adventures';
const initialState = []

export default function(state = initialState, action) {
  switch (action.type) {
    case adventuresconstants.get('GET_ADVENTURES'):
      return state;
    default:
      return state;
  }
}
