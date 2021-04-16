import { w } from './modules/global/global.js'; // modular document, window y navigator
import loadTasks from './modules/ls_tasks/load_tasks.js';
import { addList, addListKeyEnter } from './modules/todo_adding.js';
import toggleInput from './modules/toggle_input.js';

w.addEventListener('DOMContentLoaded', () => {
  toggleInput('.input__task');
  addList('#btn-adding', '.todoList', '.input__task');
  loadTasks('.todoList');
});

addListKeyEnter('#btn-adding', '.todoList', '.input__task');
