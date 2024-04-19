import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="text-center my-4">
          Welcome to 
          <span style={{ color: 'blue', fontWeight: 'bold' }}> Propelius </span>
          Todo List App!
        </h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
