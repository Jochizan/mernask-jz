import deleteTask from './modules/delete_task.js';
import { w, n } from './modules/global.js'; // modular document, window y navigator
import loadTasks from './modules/load_tasks.js';
import addList from './modules/todo_adding.js';
import toggleInput from './modules/toggleInput.js';

w.addEventListener('DOMContentLoaded', () => {
  toggleInput('.input__task');
  addList('#btn-adding', '.todoList', '#task');
  loadTasks('.todoList');
});
