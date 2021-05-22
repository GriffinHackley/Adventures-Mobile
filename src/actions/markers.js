import Constants from './constants';

export const markersconstants = new Constants({
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
  type: markersconstants.get('GET_MARKERS'),
})
