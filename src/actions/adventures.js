import Constants from './constants'

export const adventuresconstants = new Constants({
  CREATE_ADVENTURE: 'CREATE_ADVENTURE',
  DELETE_ADVENTURE: 'DELETE_ADVENTURE',
  MODIFY_ADVENTURE: 'MODIFY_ADVENTURE',
  GET_ADVENTURES: 'GET_ADVENTURES',
  GET_ADVENTURES_DONE: 'GET_ADVENTURE_DONE',
})

export const createAdventure = (title) => ({
  type: adventuresconstants.get("CREATE_ADVENTURE"),
  payload: {
    title,
  }
});

export const deleteAdventure = (title) => ({
  type: adventuresconstants.get("DELETE_ADVENTURE"),
  payload: {
    title,
  }
});

export const modifyAdventure = (title) => ({
  type: adventuresconstants.get("MODIFY_ADVENTURE"),
  payload: {
    title,
  }
});

export const getAdventures = () => ({
  type: adventuresconstants.get('GET_ADVENTURES'),
})
