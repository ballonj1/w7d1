import React from 'react';
import ReactDOM from 'react-dom';
import { allTodos } from './reducers/selectors';
import { receiveTodo, receiveTodos } from './actions/todo_actions';
import { App } from './components/app';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let content = document.getElementById("content");

  ReactDOM.render(<Root store={configureStore}/>, content);
});

window.store = configureStore;
