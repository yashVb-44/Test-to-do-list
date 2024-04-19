import api from '../api';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await api.get('/todos');
    console.log(response)
    dispatch({
      type: FETCH_TODOS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const response = await api.post('/todos', todo);
    dispatch({
      type: ADD_TODO,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const response = await api.patch(`/todos/${id}`);
    dispatch({
      type: TOGGLE_TODO,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error toggling todo:', error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await api.delete(`/todos/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};
