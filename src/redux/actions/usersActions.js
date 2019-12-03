import getUsers from '../../config/connection'

export const getAll = () => async (dispatch) => {
  const users = await getUsers()
  dispatch({
    type: 'getUsers',
    payload: users
  })
}