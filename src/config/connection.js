import axios from 'axios'

const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users').then(resp => resp.data)

export default getUsers