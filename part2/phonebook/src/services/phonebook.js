import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
const response = axios.get(baseUrl)
return response.then((response) => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const del = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then((response) => response.data)
}

// export default { the left of colon is supposed to be the key names
//   getAll: getAll, 
//   create: create, 
//   update: update 
// }
export default { getAll, create, update, del }