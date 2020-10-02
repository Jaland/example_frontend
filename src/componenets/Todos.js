
import React from 'react'

const Todos = ({ todos }) => {
  return (
    <div>
      <center><h1>Todo List</h1></center>
      {todos.map((todo) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{todo.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Description: {todo.description}</h6>
            <p class="card-text">Due Date: {todo.date}</p>
            <p class="card-text">{todo.completed ? 'Completed' : 'Not Completed'}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Todos