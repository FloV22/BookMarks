import fetcher from '../fetcher.js';
import Mocks from '../__mocks__/fetcher';

describe('fetcher test', () => {

  it('should return wanted informations', async() => {
    window.fetch = jest.fn().mockImplementation(() => Mocks(200, '{"test":1 }'));

    const data = await fetcher('http://test.fr');
    expect(data).toEqual({ test: 1 });
  });

  it('should catch json parsing errors', async() => {
    window.fetch = jest.fn().mockImplementation(() => Mocks(200, '{"test:1 }'));

    const data = await fetcher('http://test.fr');
    expect(data).toEqual({});
  });

  it('should catch server errors', async() => {
    window.fetch = jest.fn().mockImplementation(() => Mocks(500, '{"test:1 }'));
    spyOn(window, 'alert').and.returnValue(null);

    const data = await fetcher('http://test.fr');
    expect(data).toEqual({});
    expect(window.alert).toHaveBeenCalled();
  });
});
