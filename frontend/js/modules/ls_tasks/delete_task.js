import { ls } from '../global/global.js';

const deleteTask = (id) => {
  const tasks = JSON.parse(ls.getItem('tasks')).filter((el) => el.id !== id);

  ls.setItem('tasks', JSON.stringify(tasks));
};

export default deleteTask;
