import Constants from './constants'

export const goalsconstants = new Constants({
  CREATE_GOAL: 'CREATE_GOAL',
  GET_GOALS: 'GET_GOALS',
  GET_GOALS_DONE: 'GET_GOALS_DONE',
  DELETE_GOAL_SAVE: 'DELETE_GOAL_SAVE',
})

export const createGoal = (type,value,id,progress,createdAt) => ({
  type: goalsconstants.get("CREATE_GOAL"),
  payload: {
    type,
    value,
    id,
    progress,
    createdAt
  }
});

export const deleteGoal = (id) => ({
  type: goalsconstants.get("DELETE_GOAL"),
  payload: {
    id,
  }
});

export const getGoals = () => ({
  type: goalsconstants.get('GET_GOALS'),
})
