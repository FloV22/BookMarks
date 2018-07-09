import Vimeo from '../vimeo';
import Mocks from '../__mocks__/fetcher';
import VimeoMocks from '../__mocks__/vimeo';

describe('flickr tests', () => {

  it('should get infos from vimeo api', async() => {
    window.fetch = jest.fn().mockImplementation((url) => Mocks(200, JSON.stringify(VimeoMocks.api)));

    const data = await Vimeo('http://1/2/3/1234');
    expect(data).toEqual({
      ...VimeoMocks.result,
      url: 'http://1/2/3/1234'
    });
  });

  it('should catch errors', async() => {
    window.fetch = jest.fn().mockImplementation((url) => Mocks(200, JSON.stringify({})));

    const data = await Vimeo('http://1/2/3/1234');
    expect(data).toEqual({});
  });
});
