import React from 'react';

function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ margin: '10px 0' }}>
            {/* Display the todo text */}
            <span
              data-cy={`todo-text-${todo.id}`}  // ensures Cypress can target this todo
              style={{
                textDecoration: todo.isCompleted ? 'line-through' : 'none',
                color: todo.isCompleted ? 'gray' : 'black'
              }}
            >
              {todo.text}
            </span>

            {/* Show "Complete" button only if todo is not completed */}
            {!todo.isCompleted && (
              <button
                data-cy={`complete-btn-${todo.id}`}  // ensures Cypress can click this button
                onClick={() => handleComplete(todo.id)}
                style={{ marginLeft: '10px' }}
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
