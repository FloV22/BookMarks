import React, { Component } from 'react';
import ModalForm from './ModalForm';

import { MODAL_BUTTONS } from '../helpers/helper';

class ModalChoice extends Component {
  render() {
    return <ModalForm 
      buttons={[{ value: MODAL_BUTTONS.modify}, { value: MODAL_BUTTONS.delete }]}
      bookmark={this.props.bookmark}
      modify={this.props.modify}
      delete={this.props.delete}
      reset={this.props.reset}
    />
  }
};

export default ModalChoice