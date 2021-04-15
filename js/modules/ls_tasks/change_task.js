import { ls } from '../global/global.js';

const changeTask = (data, id) => {
  const tasks = JSON.parse(ls.getItem('tasks'));

  const values = tasks.map((el) => {
    if (el.id === id) {
      let text = data.text || el.text, finish;

      if (data.finish !== el.finish) finish = data.finish;
      else finish = el.finish;

      el.text = text;
      el.finish = finish;
    }
    return el;
  });

  ls.setItem('tasks', JSON.stringify(values));
};

export default changeTask;
