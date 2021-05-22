import { createStore, combineReducers, applyMiddleware } from 'redux';
import adventures from '../reducers/adventures';
import markers from '../reducers/markers'
import goals from'../reducers/goals'
import id_assigner from '../middleware/id_assigner'
import storage from '../middleware/storage'

export default createStore(
  combineReducers({
    adventures,
    markers,
    goals,
  }),
  applyMiddleware(
    id_assigner,
    storage,
  ),
);
