const buttonBar = document.querySelector('.bar-options');
const buttonMinimizar = document.querySelector('.minimizar');
const navContainer = document.querySelector('.nav-container');
const favoriteItem = document.querySelectorAll('.nav-favoritos-item');
const navStatus = document.querySelector('.nav-status');
const statusInfo = document.querySelector('.status-info');
const inputAddress = document.querySelector('.nav-tarefas-form-address');
const addFavorite = document.querySelector('.addFavorite');
const buttonFavorite = document.querySelector('.favorites');
const boxOptions = document.querySelectorAll('.box-options-item')
const closeFavorite = document.querySelector('.close-favorites')

let listFavorite = [
  {
    id: 0,
    value: 'www.uol.com.br',
  },
  {
    id: 1,
    value: 'www.youtube.com.br',
  },
];

boxOptions.forEach((element) => {
  element.addEventListener('click', function(event){
    switch (element.innerText) {
      case "Favoritos":
        toggleFavorites()
        togglePopUp()
        break;
    
      default:
        break;
    }
  })
})
document.addEventListener('DOMContentLoaded', function () {
  console.log('O DOM foi totalmente carregado.');
  LoadFavorites(listFavorite);
});


closeFavorite.addEventListener('click', function () {
  toggleFavorites()
});
buttonBar.addEventListener('click', togglePopUp);

buttonMinimizar.addEventListener('click', function () {
  navContainer.classList.toggle('minimizar');
});

buttonFavorite.addEventListener('click', toggleFavorites);

favoriteItem.forEach((element) => {
  element.addEventListener('click', function () {
    const info = element.getAttribute('data-info');
    inputAddress.value = info;
  });

  element.addEventListener('mouseover', function (event) {
    const info = event.target.getAttribute('data-info');
    if (info !== null) {
      navStatus.classList.add('on');
      statusInfo.innerHTML = info;
    }
  });

  element.addEventListener('mouseout', function () {
    navStatus.classList.remove('on');
  });
});

addFavorite.addEventListener('click', function () {
  const inputFavorite = document.querySelector('.form-favorite');
  let random = Math.random();
  if (inputFavorite.value !== '') {
    listFavorite.push({ id: random, value: inputFavorite.value });
  }
  limparDiv('.listFavorite');
  LoadFavorites(listFavorite);
  inputFavorite.value = '';
  inputFavorite.focus();
});

function togglePopUp() {
  const boxOptions = document.querySelector('.box-options');
  boxOptions.classList.toggle('active');
}

function toggleFavorites() {
  let contentFavorite = document.querySelector('.content-favorites');
  contentFavorite.classList.toggle('active');
  buttonFavorite.classList.toggle('active');
}

function createElement(tag, classe) {
  let element = document.createElement(tag);
  if (classe) {
    let lista = classe.split(' ');
    lista.forEach((item) => {
      element.classList.add(item);
    });
  }
  return element;
}

function limparDiv(elementId) {
  let div = document.querySelector(elementId);
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function LoadFavorites(listArray) {
  let listFavorite = document.querySelector('.listFavorite');
  listArray.forEach((element) => {
    let itemFavorite = createElement('div', 'item-favorite');
    let pEnd = createElement('p', 'item-favorite-end');
    let removeButtonFavorite = createElement('button', 'remove-favorite');
    let iconRemove = createElement('i', 'fas fa-times');
    pEnd.innerText = element.value;
    removeButtonFavorite.appendChild(iconRemove);
    removeButtonFavorite.addEventListener('click', function () {
      removeFavorite(element);
    });
    itemFavorite.appendChild(pEnd);
    itemFavorite.appendChild(removeButtonFavorite);
    listFavorite.appendChild(itemFavorite);
  });
}

const removeFavorite = (item) => {
  const indiceObjeto = listFavorite.findIndex((objeto) => objeto.id === item.id);

  if (indiceObjeto !== -1) {
    listFavorite.splice(indiceObjeto, 1);
  }
  limparDiv('.listFavorite');
  LoadFavorites(listFavorite);
};

const loadListFavorite = () => {
  return listFavorite;
};

const loadFavorite = (item) => {
  return listFavorite.some((fav) => fav.id === item.id);
};

const editFavorite = (item) => {
  let selectFavorite = loadFavorite(item);
  if (selectFavorite) {
    // Lógica para editar o item favorito
  }
};