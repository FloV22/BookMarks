import flickr, { API_URL, THUMB_URL } from '../flickr';
import Mocks from '../__mocks__/fetcher';
import FlickrMocks from '../__mocks__/flickr';

describe('flickr tests', () => {

  it('should get infos and size from flikr api', async() => {
    window.fetch = jest.fn().mockImplementation((url) => Mocks(200, JSON.stringify(FlickrMocks)));

    const data = await flickr('http://1/2/3/1234');
    expect(data).toEqual(FlickrMocks.result);
  });

  it('should catch errors', async() => {
    window.fetch = jest.fn().mockImplementation((url) => Mocks(200, JSON.stringify({ pho: {} })));

    const data = await flickr('http://1/2/3/1234');
    expect(data).toEqual({});
  });
});
