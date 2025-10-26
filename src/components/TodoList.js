import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map(todo => (
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
                onClick={() => handleComplete(todo.id)}
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
