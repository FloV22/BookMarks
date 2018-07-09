import React, { Component } from 'react';
import ModalChoice from './ModalChoice';
import ModalForm from './ModalForm';
import ModalChange from './ModalChange';

class ModalComponent extends Component {
  render() {
    const { isChoice, choice, bookmark } = this.props
    return <div>
      {isChoice && 
        <ModalChoice 
          onChoiceClick={this.props.onChoiceClick} 
          reset={this.props.reset}
        />}
      {choice !== null && 
        <ModalForm 
          choice={this.props.choice}
          load={this.props.load}
          reset={this.props.reset}
        />}
      {bookmark !== null && 
        <ModalChange 
          bookmark={this.props.bookmark}
          modify={this.props.modify}
          delete={this.props.delete} 
          reset={this.props.reset}
        />}
    </div>;
  }
};

ModalComponent.defaultProps = {
  isChoice: false,
  choice: null,
  bookmark: null
};

export default ModalComponent;

