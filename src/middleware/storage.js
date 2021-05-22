import AsyncStorage from '@react-native-community/async-storage';
import { markersconstants } from '../actions/markers';
import { goalsconstants } from '../actions/goals'
import { adventuresconstants } from '../actions/adventures'

export default (store) => (next) => (action) => {
  const result = next(action);
  if(action.type === markersconstants.get("GET_MARKERS")){
      AsyncStorage.getItem('@markers').then((markersJson) => {
        let markers = [];
        if(markersJson){
          markers = JSON.parse(markersJson);
        }
        store.dispatch({
          type:markersconstants.get('GET_MARKERS_DONE'),
          payload: markers,
        });
      })
  } else if (action.type !== markersconstants.get('GET_MARKERS_DONE')) {
    AsyncStorage.setItem('@markers', JSON.stringify(store.getState().markers));
  }

  if(action.type === goalsconstants.get("GET_GOALS")){
      AsyncStorage.getItem('@goals').then((goalsJson) => {
        let goals = [];
        if(goalsJson){
          goals = JSON.parse(goalsJson);
        }
        store.dispatch({
          type:goalsconstants.get('GET_GOALS_DONE'),
          payload: goals,
        });
      })
  } else if (action.type !== goalsconstants.get('GET_GOALS_DONE')) {
    AsyncStorage.setItem('@goals', JSON.stringify(store.getState().goals));
  }
  return result;
}
