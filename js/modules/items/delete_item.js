import deleteTask from '../delete_task.js';

const deleteItem = (e, id, $a, $article) => {
  if (e.target == $a) {
    $a.parentElement.parentElement.parentElement.removeChild($article);
    deleteTask(id);
  }
};

export default deleteItem;
