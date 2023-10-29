import axios from 'axios'

export const API = axios.create({
    baseURL: "http://localhost:8080"
})

//get-all-user
export const getUser = () => API.get('/user/getUsers')

//create-user
export const createUser = (user) => API.post('/user/createUser', user)

//get-by-id
export const getUserById = (id) => API.get(`/user/getUserById/${id}`)

//update-by-id
export const updateUserById = (id, user) => API.put(`/user/updateUserById/${id}`, user)

//delete-user-by-id
export const deleteUser = (id) => API.delete(`/user/deleteUser/${id}`)