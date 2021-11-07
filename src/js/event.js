import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';
import { msgError, msgSuccess } from './notify.js';
import makePhotoCards from './makePhotoCards.js';
import apiService from './apiService.js';
import lazyLoad from './lazyLoad.js';

const request = new apiService();
const modal = new basicLightbox.create('<img id="img-modal-js" src="" alt="Your image">');

const refs = {
  list: document.querySelector('.gallery'),
  anhcor: document.querySelector('#anhcor'),
};

export default async function onSearch(ev) {
  const queryValue = ev.target.value.trim();
  ev.target.value = null;

  if (queryValue === '') {
    refs.list.innerHTML = '';
    msgError('Произошла ошибка! Введите пожалуйста символ.');
    return;
  }

  refs.list.innerHTML = '';

  request.setQuery = queryValue;

  await render();
}

const observer = new IntersectionObserver(callbackObserve, { rootMargin: '300px' });

async function callbackObserve([entry]) {
  if (!entry.isIntersecting) return;
  render();
}

async function render() {
  const respond = await request.query();
  if (respond.hits.length === 0) {
    msgError('Произошла ошибка! Повторите пожалуйста еще раз.');
    return;
  }

  const htmlItems = makePhotoCards(respond.hits);

  refs.list.insertAdjacentHTML('beforeend', htmlItems);

  const images = document.querySelectorAll('img');

  lazyLoad(images);

  refs.list.addEventListener('click', onClick);

  msgSuccess('Запрос выполнен! Вы можете посмотреть полное изображение нажав на картинку.');

  observer.observe(refs.anhcor);
}

function onClick(ev) {
  const item = ev.target;

  if (item.nodeName !== 'IMG') return;

  modal.show();
  document.querySelector('#img-modal-js').src = item.dataset.largeImg;
}
