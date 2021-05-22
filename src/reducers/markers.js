import { markersconstants } from '../actions/markers';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type){
    case markersconstants.get('CREATE_MARKER'):
      const newMarker = {...action.payload}
      return [...state, newMarker];
    case markersconstants.get('GET_MARKERS_DONE') :
      return action.payload;
  }
  return [...state];
}
