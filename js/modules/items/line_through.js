import { ls } from '../global.js';

const lineThrough = (e, id, $a, $p) => {
  if (e.target == $a) {
    if ($p.style.textDecoration === 'line-through') {
      $p.style.textDecoration = 'none';
      let values = JSON.parse(ls.getItem('tasks')).tasks;
      values = values.map((el) => {
        if (el.id === id) el.finish = false;
        return el;
      });
      ls.setItem('tasks', JSON.stringify({ tasks: values }));
    } else {
      $p.style.textDecoration = 'line-through';
      let values = JSON.parse(ls.getItem('tasks')).tasks;
      values = values.map((el) => {
        if (el.id === id) el.finish = true;
        return el;
      });
      ls.setItem('tasks', JSON.stringify({ tasks: values }));
    }
  }
};

export default lineThrough;
