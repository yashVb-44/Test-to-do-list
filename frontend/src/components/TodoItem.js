import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { toggleTodo, deleteTodo } from '../actions/todoActions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo._id));
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this task?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteTodo(todo._id));
        Swal.fire('Deleted!', 'The task has been deleted.', 'success');
      }
    });
  };

  return (
    <li className={`list-group-item ${todo.completed ? 'list-group-item-success' : ''}`}>
      <div className="row align-items-center">
        <div className="col">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={todo.completed}
              onChange={handleToggle}
            />
            <label
              className={`form-check-label ${todo.completed ? 'text-decoration-line-through' : ''}`}
            >
              {todo.text}
            </label>
          </div>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger btn-sm" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <hr />
      <div className="text-muted small text-end">
        {todo.time}
      </div>
    </li>
  );
};

export default TodoItem;
