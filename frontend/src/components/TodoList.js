import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../actions/todoActions';
import TodoItem from './TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const todos = useSelector((state) => state) || []

  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center text-muted">No task available. Please add some task!</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
