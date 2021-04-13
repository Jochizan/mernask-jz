import { d, ls } from './global.js';

const deleteTask = (id) => {
  const tasks = JSON.parse(ls.getItem('tasks')).tasks.filter(
    (el) => el.id !== id
  );

  ls.setItem('tasks', JSON.stringify({ tasks: tasks }));
};

export default deleteTask;
