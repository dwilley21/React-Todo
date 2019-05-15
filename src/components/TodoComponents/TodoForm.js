import React from 'react';
const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Win the damn day"
      />
      <button onClick={props.handleAddTodo}>New Goal</button>
      <button onClick={props.handleClearTodos}>Goal accomplished</button>
    </form>
  );
};

export default TodoForm;