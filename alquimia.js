const elements = document.querySelectorAll('.element');
const result = document.getElementById('result');

let draggingElement = null;
let Poder = ''
function handleDragStart(event) {
  draggingElement = this;
  event.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDrop(event) {
  event.preventDefault();
  const targetElement = this;

  function getResult() {
    if ((draggingElement.id === 'agua' && targetElement.id === 'aire') || (draggingElement.id === 'aire' && targetElement.id === 'agua')) {
      const imagenUno = new Image();
      imagenUno.src = '/img/Figura-1.jpg';
      return imagenUno
    } else if ((draggingElement.id === 'tierra' && targetElement.id === 'fuego') || (draggingElement.id === 'fuego' && targetElement.id === 'tierra')) {
      const imagenDos = new Image();
      imagenDos.src = '/img/Figura-2.jpg';
      return imagenDos
    } else if ((draggingElement.id === 'tierra' && targetElement.id === 'agua') || (draggingElement.id === 'agua' && targetElement.id === 'tierra')) {
      const imagenTres = new Image();
      imagenTres.src = '/img/Figura-3.jpg';
      return imagenTres
    } else if ((draggingElement.id === 'fuego' && targetElement.id === 'aire') || (draggingElement.id === 'aire' && targetElement.id === 'fuego')) {
      const imagenTres = new Image();
      imagenTres.src = '/img/Figura-4.jpg';
      return imagenTres
    }else {
      return 'Sin poder';
    }
  }

  // Eliminar el poder anterior si existe
  const poderAnterior = document.querySelector('.poder');
  if (poderAnterior) {
    result.removeChild(poderAnterior);
  }

  //Eliminar el elemento
 /*  draggingElement.remove();
  targetElement.remove(); */

  // Agregar el nuevo poder
  const poder = document.createElement('div');
  poder.classList.add('poder');
  poder.appendChild(getResult());

  // Agregar el nuevo elemento al resultado
  result.appendChild(poder);
}

elements.forEach(element => {
  element.addEventListener('dragstart', handleDragStart);
  element.addEventListener('dragover', handleDragOver);
  element.addEventListener('drop', handleDrop);
});

result.addEventListener('dragover', handleDragOver);
result.addEventListener('drop', handleDrop);
