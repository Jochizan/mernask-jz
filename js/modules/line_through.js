import changeTask from './ls_tasks/change_task.js';

const lineThrough = (e, id, $a, $p, $article) => {
  if (e.target == $a) {
    if ($p.style.textDecoration === 'line-through') {
      $p.style.textDecoration = 'none';
      $a.innerText = '✔';
      $article.parentElement.insertAdjacentElement('afterbegin', $article);
      changeTask({ finish: false }, id);
    } else {
      $p.style.textDecoration = 'line-through';
      $a.innerText = '⚙';
      $article.parentElement.appendChild($article);
      changeTask({ finish: true }, id);
    }
  }
};

export default lineThrough;
