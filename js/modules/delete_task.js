import { d, ls } from './global.js';

const deleteTask = (text) => {
  const tasks = Array.from(ls.getItem('item'))
    .join('')
    .split(',')
    .filter((el) => el !== text);

  ls.setItem('item', tasks);
};

export default deleteTask;
