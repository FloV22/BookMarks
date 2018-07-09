import fetcher from './fetcher';

//exported for specs
export const API_PHOTO = 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=7e1184d0e273a9a33cf05109feef3e19&format=json&nojsoncallback=?&photo_id=';
export const API_SIZE = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=7e1184d0e273a9a33cf05109feef3e19&format=json&nojsoncallback=?&photo_id=';

const ORIGINAL = 'Original';
const MEDIUM = 'Medium';
const THUMB = 'Thumbnail';

export default async(flickrUrl) => {
  const id = flickrUrl.split('/')[5];
  try {
    const { photo } = await fetcher(API_PHOTO + id);
    const { sizes: { size } } = await fetcher(API_SIZE + id);

    const original = size.find(({ label }) => label === ORIGINAL) || {};
    const medium = size.find(({ label }) => label === MEDIUM) || {};
    const thumb = size.find(({ label }) => label === THUMB) || {};

    const url = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_b.jpg"
    const thumbnail = "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_n.jpg"
    return {
      url,
      title: photo.title._content,
      addedDate: new Date(photo.dateuploaded * 1000).toUTCString(),
      authorName: photo.owner.username,
      width: original.width || medium.width,
      height: original.height || medium.height,
      thumbnail: thumbnail,
      thumbnailWidth: parseInt(thumb.width, 10),
      thumbnailHeight: parseInt(thumb.height, 10),
      caption: photo.title._content,
      src: thumbnail,
    };
  } catch (e) {
    alert('Un Problème est survenu lors de la récupération de l\'image Flickr');
    return {};
  }
}
