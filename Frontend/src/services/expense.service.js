import api from './api.js'

const createExpense = (data) => {
    return api.post('/expense', data)
}

const getExpense = () => {
    return api.get('/get-expense')
}

const putExpense = (id, data) => {
    return api.put('/expense/'+id,data)
}

const patchExpense = (id, data) => {
    return api.patch('/expense/'+id,data)
}

const deleteExpense = (id) => {
    return api.delete('/expense/'+id)
}

export default {createExpense, getExpense, putExpense, patchExpense, deleteExpense}
