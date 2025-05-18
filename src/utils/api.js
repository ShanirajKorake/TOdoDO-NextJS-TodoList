import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});

export const getTodos = () => API.get('/todos');
export const addTodo = (text) => {
    console.log("addTodo", text);
    return API.post('/todos', { title: text });
}

// Complete
export const toggleCompleteTodo = (id) => {
  return API.patch('/todos', { id });
};

// Delete
export const deleteTodo = (id) => {
  return API.delete('/todos', { data: { id } }); // `data` is required for DELETE in axios
};