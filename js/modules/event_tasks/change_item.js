import changeTask from '../ls_tasks/change_task.js';

const changeItem = (e, id, $p) => {
  if (e.target === $p) {
    const text = prompt('Ingrese el texto: ');

    if (!text) {
      alert('Ingrese algún texto para continuar...');
      return;
    }

    $p.innerText = text;
    changeTask({ text: text }, id);
  }
};

export default changeItem;
