import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="my-4">Todo List</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
