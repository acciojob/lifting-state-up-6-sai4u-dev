import React from 'react';

function TodoList({ todos, handleComplete }) {
    return (
        <div>
            <h2>Child Component</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                {todos.map(todo => (
                    <li key={todo.id} style={{ margin: '10px 0' }}>
                        <span style={{
                            textDecoration: todo.isCompleted ? 'line-through' : 'none',
                            color: todo.isCompleted ? 'gray' : 'black'
                        }}>
                            {todo.text}
                        </span>

                        {!todo.isCompleted && (
                            <button
                                data-cy={`complete-btn-${todo.id}`}
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