import React, { useState } from 'react';

function TodoList({ todos, handleComplete }) {
  const [completedIds, setCompletedIds] = useState([]);

  const handleClick = (id) => {
    // Update local state immediately
    setCompletedIds(prev => [...prev, id]);
    // Also update parent state
    handleComplete(id);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map(todo => {
          const isCompleted = todo.isCompleted || completedIds.includes(todo.id);

          return (
            <li key={todo.id}>
              <span
                data-cy={`todo-text-${todo.id}`}
                style={{
                  textDecoration: isCompleted ? 'line-through' : 'none',
                  color: isCompleted ? 'gray' : 'black',
                }}
              >
                {todo.text}
              </span>

              {!isCompleted && (
                <button
                  data-cy={`complete-btn-${todo.id}`}
                  onClick={() => handleClick(todo.id)}
                >
                  Complete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
