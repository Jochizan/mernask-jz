import deleteTask from '../ls_tasks/delete_task.js';

const deleteItem = (e, id, $a, $article) => {
  if (e.target == $a) {
    $article.parentElement.removeChild($article);
    deleteTask(id);
  }
};

export default deleteItem;