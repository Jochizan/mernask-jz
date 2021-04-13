import deleteTask from './delete_task.js';
import { d } from './global.js';

const generateItem = (text) => {
  const $article = d.createElement('article');
  const $div1 = d.createElement('div');
  const $div2 = d.createElement('div');
  const $p1 = d.createElement('p');
  const $a1 = d.createElement('a');
  const $a2 = d.createElement('a');

  // segunda
  $a1.classList.add('task__end');
  $a1.innerText = '✔';
  $a2.classList.add('task__erase');
  $a2.innerText = '❌';

  $div2.appendChild($a1);
  $div2.appendChild($a2);

  // primera
  $p1.classList.add('task__description');
  $p1.innerText = text;

  $div1.appendChild($p1);

  // item
  $article.classList.add('todoList__item');
  $article.appendChild($div1);
  $article.appendChild($div2);

  $a1.addEventListener('click', (e) => {
    if (e.target == $a1) {
      $p1.style.textDecoration === 'line-through'
        ? ($p1.style.textDecoration = 'none')
        : ($p1.style.textDecoration = 'line-through');
    }
  });

  $a2.addEventListener('click', (e) => {
    if (e.target == $a2) {
      $a2.parentElement.parentElement.parentElement.removeChild($article);
      deleteTask(text);
    }
  });

  return $article;
};

export default generateItem;
