import './sass/main.scss';
import deb from 'lodash.debounce';
import onSearch from './js/event.js';

const refs = {
  searchForm: document.querySelector('#search-form'),
};

refs.searchForm.addEventListener('input', deb(onSearch, 500));
