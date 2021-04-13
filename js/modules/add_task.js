import { ls } from './global.js';

const addTask = (text) => {
  if (ls.getItem('item') === null) {
    ls.setItem('item', [text]);
  } else {
    const $values = ls.getItem('item');
    ls.setItem('item', [$values, text]);
  }
};

export default addTask;
