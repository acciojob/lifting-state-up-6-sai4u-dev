import React, { useState } from 'react';

function TodoList({ todos, handleComplete }) {
  const [localTodos, setLocalTodos] = useState(todos);

  const handleClick = (id) => {
    // Immediately update local state so button disappears
    setLocalTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );

    // Also call parent handler if needed
    handleComplete(id);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {localTodos.map(todo => (
          <li key={todo.id}>
            <span
              data-cy={`todo-text-${todo.id}`}
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none',
                color: todo.isCompleted ? 'gray' : 'black'
              }}
            >
              {todo.text}
            </span>

            {!todo.isCompleted && (
              <button
                data-cy={`complete-btn-${todo.id}`}
                onClick={() => handleClick(todo.id)}
              >
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
