import base from '../config/connection'

const getUsers = () => base.get('/users').then(resp => resp.data)
console.log(getUsers())