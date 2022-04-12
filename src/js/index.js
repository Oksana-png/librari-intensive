import Navigo from 'navigo';

const router = new Navigo('/', {
  hash: true,
});
const library = document.querySelector('.library');
const book = document.querySelector('.book');
const add = document.querySelector('.add');
const addBtns = document.querySelectorAll('.header__btn--add, .library__add--btn');
const backBtn = document.querySelectorAll('.header__btn--back');

console.log(addBtns);

const closeAllPage = () => {
  library.classList.add('hidden');
  book.classList.add('hidden');
  add.classList.add('hidden');
}

router.on({
  '/':  () => {
    closeAllPage();
    library.classList.remove('hidden');
  },
  'book': () => {
    closeAllPage();
    book.classList.remove('hidden');
  },
  'add': () => {
    closeAllPage();
    add.classList.remove('hidden');
  },
}).resolve();

addBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    router.navigate('add');
  });
});
backBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    router.navigate('/');
  });
});