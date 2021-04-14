import { d } from '../global/global.js';
import deleteItem from './delete_item.js';
import lineThrough from '../line_through.js';
import changeItem from './change_item.js';

const generateItem = (text, id, finish) => {
  const $article = d.createElement('article');
  const $div1 = d.createElement('div');
  const $div2 = d.createElement('div');
  const $p1 = d.createElement('p');
  const $a1 = d.createElement('a');
  const $a2 = d.createElement('a');

  // segunda
  $a1.classList.add('task__end');
  finish ? ($a1.innerText = '⚙') : ($a1.innerText = '✔');

  $a2.classList.add('task__erase');
  $a2.innerText = '❌';

  // agregar a su div
  $div2.appendChild($a1);
  $div2.appendChild($a2);

  // primera
  $p1.classList.add('task__description');
  $p1.innerText = text;
  if (finish) $p1.style.textDecoration = 'line-through';

  // agregar a su div
  $div1.appendChild($p1);

  // item
  $article.classList.add('todoList__item');
  $article.appendChild($div1);
  $article.appendChild($div2);

  // events
  $a1.addEventListener('click', (e) => {
    lineThrough(e, id, $a1, $p1, $article);
  });

  $a2.addEventListener('click', (e) => {
    deleteItem(e, id, $a2, $article);
  });

  $p1.addEventListener('click', (e) => {
    if (!finish) changeItem(e, id, $p1);
  });

  return $article;
};

export default generateItem;
