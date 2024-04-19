import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const AddTodoForm = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      dispatch(addTodo({
        text: todo,
        completed: false,
      }));
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        {/* <div className="input-group-append"> */}
        <button type="submit" className="btn btn-primary">
          Add
        </button>
        {/* </div> */}
      </div>
    </form>
  );
};

export default AddTodoForm;
