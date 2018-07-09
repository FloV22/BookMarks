import React, { Component } from 'react';
import Modal from 'react-modal'

import { MODAL_STYLE, BUTTONS_ID } from '../helpers/helper';

import './ModalChoice.scss'; 

Modal.setAppElement(document.getElementById('root'));

class ModalChoice extends Component {
  state = {
    isModalOpen: true
  }

  closeModal = () => {
    this.props.reset();
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    return <Modal
      isOpen={this.state.isModalOpen}
      onRequestClose={this.closeModal}
      contentLabel="Type de Favoris"
      style={MODAL_STYLE}
    >
      <div className='modal'>Type de Favoris</div>
      <button className='button-vimeo' onClick={() => this.props.onChoiceClick(BUTTONS_ID.vimeo)}/>
      <button className='button-flickr' onClick={() => this.props.onChoiceClick(BUTTONS_ID.flickr)}/>
    </Modal>;
  }
};

export default ModalChoice