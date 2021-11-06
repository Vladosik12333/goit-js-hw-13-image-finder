import template from '../templates/card-photo.hbs';

export default function makePhotoCards(arrResp) {
  const newArrResp = arrResp.map(
    ({ webformatURL, largeImageURL, likes, views, comments, downloads, tags }) => ({
      webformatURL,
      largeImageURL,
      likes,
      views,
      comments,
      downloads,
      tags,
    }),
  );

  return template(newArrResp);
}
