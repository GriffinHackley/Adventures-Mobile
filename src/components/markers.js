import Constants from './constants';

export const constants = new Constants({
  CREATE_MARKER: 'CREATE_MARKER',
  GET_MARKERS: 'GET_MARKERS',
  GET_MARKERS_DONE: 'GET_MARKERS_DONE',
})

export const createMarker = (coordinate, image) => {
  return {
    type: 'CREATE_MARKER',
    payload:{
      coordinate,
      image,
    }
  }
}

export const getMarkers = () => ({
  type: constants.get('GET_MARKERS'),
})
