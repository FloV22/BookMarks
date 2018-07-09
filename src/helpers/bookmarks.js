const BOOKMARK = 'bookmarks';

export const setBookmarks = (images) => {
  const imageToSave = images.map(({
    addedDate,
    authorName,
    caption,
    duration,
    height,
    width,
    src,
    tags,
    thumbnail,
    thumbnailHeight,
    thumbnailWidth,
    title,
    url
  }) => ({
    addedDate,
    authorName,
    caption,
    duration,
    height,
    width,
    src,
    tags,
    thumbnail,
    thumbnailHeight,
    thumbnailWidth,
    title,
    url
  }));
  try {
    localStorage.setItem(BOOKMARK, JSON.stringify(imageToSave));
  } catch (e) {}
};

export const getBookmarks = () => {
  try {
    return JSON.parse(localStorage.getItem(BOOKMARK));
  } catch (e) {
    return null;
  }
};
