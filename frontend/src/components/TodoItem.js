import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/todoActions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo._id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  return (
    <li className={`list-group-item ${todo.completed ? 'list-group-item-success' : ''}`}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={todo.completed}
            onChange={handleToggle}
          />
          <label className={`form-check-label ${todo.completed ? 'text-decoration-line-through' : ''}`}>
            {todo.text}
          </label>
        </div>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
