import React from 'react';
import ReactDOM from 'react-dom';
import * as enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import * as localStorage from './helpers/bookmarks';

enzyme.configure({ adapter: new Adapter() });

describe('App.jsx', () => {
  let mountedAppScreen;
  const AppScreen = () => {
    if (!mountedAppScreen) {
      mountedAppScreen = enzyme.shallow(<App/>);
    }
    return mountedAppScreen;
  };

  beforeAll(() => {
    spyOn(localStorage, 'getBookmarks').and.returnValue(null);
    spyOn(localStorage, 'setBookmarks').and.returnValue(null);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/> , div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have a default state', () => {
    expect(AppScreen().state()).toEqual({
      isChoice: false,
      choice: null,
      bookmark: null,
      images: [], 
    });
  });

  it('should render div elements', () => {
    const div = AppScreen().find('div');
    expect(div.length).toEqual(1);
  });

  it('should render Gallery', () => {
    const gallery = AppScreen().find('Gallery');
    expect(gallery.length).toEqual(1);
  });

  it('should have a container', () => {
    const container = AppScreen().find('.container');
    expect(container.length).toEqual(1);
  });

  it('onClick method should call setState', () => {
    spyOn(AppScreen().instance(), 'setState').and.returnValue(null);
    AppScreen().instance().onClick();
    expect(AppScreen().instance().setState).toHaveBeenCalledWith({
      isChoice: true,
      choice: null,
    });
  });

  it('reset should reset completely state', () => {
    spyOn(AppScreen().instance(), 'setState').and.returnValue(null);
    AppScreen().instance().reset();
    expect(AppScreen().instance().setState).toHaveBeenCalledWith({
      isChoice: false,
      choice: null,
      bookmark: null,
    });
  });

  it('onChoiceClick should update choice state', () => {
    spyOn(AppScreen().instance(), 'setState').and.returnValue(null);
    AppScreen().instance().onChoiceClick('test');
    expect(AppScreen().instance().setState).toHaveBeenCalledWith({
      isChoice: false,
      choice: 'test',
    }); 
  });

  it('load should add images in state', () => {
    spyOn(AppScreen().instance(), 'setState').and.returnValue(null);
    AppScreen().instance().load({ test: 1 });
    expect(AppScreen().instance().setState).not.toHaveBeenCalled();
    AppScreen().instance().load(1);
    expect(AppScreen().instance().setState).not.toHaveBeenCalled();
    AppScreen().instance().load({ test: 1, test1: 2 });
    expect(AppScreen().instance().setState).toHaveBeenCalled();
  });

});
