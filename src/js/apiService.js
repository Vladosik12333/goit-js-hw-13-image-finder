const BASE_URL = 'https://pixabay.com/api';
const BASE_OPIONS_URL = '/?image_type=photo&orientation=horizontal&per_page=12';
const KEY = '24213343-241a268dec8bb0c33cac9d25a';

export default class {
  queryText = '';
  page = 1;

  async query() {
    try {
      const respond = await fetch(
        `${BASE_URL}${BASE_OPIONS_URL}&q=${this.queryText}&page=${this.page++}&key=${KEY}`,
      );

      if (!respond.ok) throw new SyntaxError(respond.status);

      const respondJson = await respond.json();

      return respondJson;
    } catch (error) {
      return console.log('ERROR!', error);
    }
  }

  set setQuery(newQuery) {
    this.queryText = newQuery;
    this.page = 1;
    return this.queryText;
  }

  get getQuery() {
    return this.queryText;
  }
}
