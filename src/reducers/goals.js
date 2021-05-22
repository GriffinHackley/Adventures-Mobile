import _ from 'lodash';
const initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_GOAL':
      const newGoal = {...action.payload}
      return [...state, newGoal]
    case 'GET_GOALS_DONE':
      return action.payload
    case 'DELETE_GOAL_SAVE':
      return state.filter(goal => goal !== action.goal);
    case 'SAVE_ADVENTURE':
      const newState = _.cloneDeep(state);
      _.each(newState, (goal) => {
        if (goal.createdAt <action.adventurePayload.adventureStartedAt) {
          if (goal.type === 'miles')
            goal.progress += parseFloat(action.adventurePayload.distanceTravelled.toFixed(2));
          else
            goal.progress += action.adventurePayload.pictures.length;
        }
      })
      return newState
  }
  return state;
}
