import fetcher from './fetcher';

const VIMEO_API = 'https://vimeo.com/api/oembed.json?url=';

export default async(url) => {
  const vimeo = await fetcher(VIMEO_API + url);
  return Object.keys(vimeo).length === 0 ? {} : {
    url,
    title: vimeo.title,
    addedDate: vimeo.upload_date,
    authorName: vimeo.author_name,
    width: vimeo.width,
    height: vimeo.height,
    duration: vimeo.duration,
    thumbnail: vimeo.thumbnail_url,
    thumbnailWidth: vimeo.thumbnail_width,
    thumbnailHeight: vimeo.thumbnail_height,
    caption: vimeo.title,
    src: vimeo.thumbnail_url,
  };
}
