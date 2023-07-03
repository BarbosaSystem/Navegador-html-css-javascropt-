//Abrir menu de opções
const buttonBar = document.querySelector('.bar-options');
const buttonMinimizar = document.querySelector('.minimizar');
const navContainer = document.querySelector('.nav-container');
const favoriteItem = document.querySelectorAll('.nav-favoritos-item');
const navStatus = document.querySelector('.nav-status');
const statusInfo = document.querySelector('.status-info');
const inputAddress = document.querySelector('.nav-tarefas-form-address');
const addFavorite = document.querySelector('.addFavorite');
const buttonFavorite = document.querySelector('.favorites');

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

document.addEventListener('DOMContentLoaded', function () {
  // Código da função a ser executada
  console.log('O DOM foi totalmente carregado.');

  // Chame sua função aqui
  LoadFavorites(listFavorite);
});

//botão de "+" opções
buttonBar.addEventListener('click', function (event) {
  togglePopUp();
});

// botão de minimizar
buttonMinimizar.addEventListener('click', function (event) {
  navContainer.classList.toggle('minimizar');
});

buttonFavorite.addEventListener('click', function (event) {
  toggleFavorites();
});
favoriteItem.forEach((element) => {
  element.addEventListener('click', (event) => {
    const info = element.getAttribute('data-info');
    inputAddress.value = info;
  });
  element.addEventListener('mouseover', (event) => {
    const info = event.target.getAttribute('data-info');
    if (info !== null) {
      navStatus.classList.add('on');
      console.log(info);
      statusInfo.innerHTML = info;
    }
  });
  element.addEventListener('mouseout', () => {
    navStatus.classList.remove('on');
  });
});
addFavorite.addEventListener('click', function (event) {
  addFavoritefunc();
});
//função
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
    if (lista.length == 1) {
      element.classList.add(classe);
    } else {
      lista.forEach((item) => {
        element.classList.add(item);
      });
    }
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
    itemFavorite.appendChild(pEnd);
    itemFavorite.appendChild(removeButtonFavorite);
    listFavorite.appendChild(itemFavorite);
  });
}
// Favoritos

const loadListFavorite = () => {
  return listFavorite;
};

const loadFavorite = (item) => {
  let favorite = listFavorite.map((fav) => {
    return fav.id === item.id;
  });
  return favorite;
};
const editFavorite = (item) => {
  let selectFavorite = loadFavorite(item);
  if (selectFavorite) {
  }
};
