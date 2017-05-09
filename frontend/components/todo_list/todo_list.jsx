import React from 'react';
import ToDoListItem from './todo_list_item';
import NewTodo from './todo_form';

const TodoList = ({ todos, receiveTodo }) => {
  var lis = todos.map((todo, idx) => {
    return (<ToDoListItem key={idx} todo={todo}/>);
  });


  return (
    <div>
      <ul>
        {lis}
      </ul>
      <NewTodo receiveTodo={receiveTodo}/>
    </div>
  );
};

export default TodoList;
