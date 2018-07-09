export default {
  photo: {
    title: {
      _content: 'test'
    },
    id: 12,
    farm: 'testFarm',
    server: 'testServer',
    secret: 'testSecret',
    dateuploaded: 123456,
    owner: {
      username: 'John Doe',
    },
  },
  sizes: {
    size: [
      { label: 'Original', width: 12, height: 13 },
      { label: 'Test', width: 1, height: 5 },
      { label: 'Thumbnail', width: '1', height: '2' },
    ]
  },
  result: {
    url: 'https://farmtestFarm.staticflickr.com/testServer/12_testSecret_b.jpg',
    title: 'test',
    addedDate: 'Fri, 02 Jan 1970 10:17:36 GMT',
    authorName: 'John Doe',
    width: 12,
    height: 13,
    thumbnail: 'https://farmtestFarm.staticflickr.com/testServer/12_testSecret_n.jpg',
    thumbnailWidth: 1,
    thumbnailHeight: 2,
    caption: 'test',
    src: 'https://farmtestFarm.staticflickr.com/testServer/12_testSecret_n.jpg',
  }
};
