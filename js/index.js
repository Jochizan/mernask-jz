import { w, d, ls } from './modules/global.js'; // modular document, window y navigator
import loadTasks from './modules/load_tasks.js';
import addList from './modules/todo_adding.js';
import toggleInput from './modules/toggleInput.js';

const $btn = d.getElementById('testLs');
let num = { num: 1 };

w.addEventListener('DOMContentLoaded', () => {
  toggleInput('.input__task');
  addList('#btn-adding', '.todoList', '#task');
  loadTasks('.todoList');
});

d.addEventListener('click', (e) => {
  if (e.target === $btn) {
    if (ls.getItem('json') === null) {
      ls.setItem('json', JSON.stringify({}));
    } else {
      const json = JSON.parse(ls.getItem('json'));
      num.num++;
      console.log(json);
      ls.setItem('json', JSON.stringify({ ...json, ...num }));
    }
  }
});
