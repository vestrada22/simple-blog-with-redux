const INITIAL_STATE = {data: []}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'getUsers':
      return {...state, users: action.payload}
    
    default: return state
  }
}