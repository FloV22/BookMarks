import React from 'react';
import * as enzyme from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Modal from '../Modal';

enzyme.configure({ adapter: new Adapter() });

describe('Modal.jsx', () => {

  it('should render one div', () => {
    const button = enzyme.shallow(<Modal/>).find('div');
    expect(button.length).toEqual(1);
  });
});
