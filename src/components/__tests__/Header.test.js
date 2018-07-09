import React from 'react';
import * as enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

enzyme.configure({ adapter: new Adapter() });

describe('Header.jsx', () => {
  let mountedHeaderScreen;
  const HeaderScreen = () => {
    if (!mountedHeaderScreen) {
      mountedHeaderScreen = enzyme.shallow( < Header / > );
    }
    return mountedHeaderScreen;
  };

  it('should have a default state', () => {
    expect(HeaderScreen().state()).toEqual({
      elements: [{ name: 'AJOUTER SES FAVORIS', id: 'add' }]
    });
  });

  it('should render one Top Button', () => {
    const button = HeaderScreen().find('TopButton');
    expect(button.length).toEqual(1);
  });

  it('should render one header', () => {
    const button = HeaderScreen().find('header');
    expect(button.length).toEqual(1);
  });
});
