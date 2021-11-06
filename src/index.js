import './sass/main.scss';
import apiService from './js/apiService.js';
import makePhotoCards from './js/makePhotoCards.js';
import deb from 'lodash.debounce';
const request = new apiService();

const refs = {
  list: document.querySelector('.gallery'),
  searchForm: document.querySelector('#search-form'),
};

refs.searchForm.addEventListener('input', deb(onSearch, 500));

async function onSearch(ev) {
  const queryValue = ev.target.value;
  ev.target.value = null;

  if (queryValue === '') {
    refs.list.innerHTML = '';
    return;
  }

  request.setQuery = queryValue;
  const respond = await request.query();

  const htmlItems = makePhotoCards(respond.hits);

  refs.list.innerHTML = htmlItems;
}
