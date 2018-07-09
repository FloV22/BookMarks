import React, { Component } from 'react';
import Modal from 'react-modal';
import vimeoFetcher from '../helpers/vimeo';
import flickrFetcher from '../helpers/flickr';

import { MODAL_STYLE, BUTTONS_ID, MODAL_BUTTONS } from '../helpers/helper';

Modal.setAppElement(document.getElementById('root'));

class ModalChoice extends Component {
  state = {
    url: '',
    keywords: '',
    isModalOpen: true,
  }

  componentDidMount() {
    if (this.props.bookmark) {
      const { url, tags } = this.props.bookmark;
      this.setState({
        url: url || '',
        keywords: tags ? tags.map(key => key.value).join(' ') : '',
      });
    }
  }

  getKeyWords = (words) => {
    if (words === '') { return []; }
    return words.split(' ').map(keyword => ({ value: keyword, title: keyword }));
  }

  handleChange = (event) => {
    this.setState({ url: event.target.value });
  }

  handleChangeKeywords = (event) => {
    this.setState({ keywords: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let data;
    if (this.props.choice === BUTTONS_ID.vimeo) {
      data = await vimeoFetcher(this.state.url);
    } else {
      data = await flickrFetcher(this.state.url);
    }
    this.props.load({...data, tags: this.getKeyWords(this.state.keywords) });
  }

  onButtonClick = (button) => {
    const { bookmark } = this.props;
    if (button.value === MODAL_BUTTONS.modify) {
      return this.props.modify({ ...bookmark, tags: this.getKeyWords(this.state.keywords) });
    } else {
      return this.props.delete(bookmark);
    }
  }

  closeModal = () => {
    this.props.reset();
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    const { choice, buttons, bookmark } = this.props;
    const text = !bookmark ?
     "Rentrez le lien vers " + (choice === BUTTONS_ID.vimeo ? "la vidéo vimeo" : "l'image flickr") :
     "Modifier les mots clefs";

    return <Modal
      isOpen={this.state.isModalOpen}
      onRequestClose={this.closeModal}
      contentLabel="Type de Favoris"
      style={MODAL_STYLE}
    >
    <div className='modal'>{text}</div>
    <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            URL:
            <input type="text" value={this.state.url} onChange={this.handleChange} disabled={!bookmark ? false : true}/>
          </label>
        </div>
        <div>
          <label>
            Mots Clés:
            <input type="text" value={this.state.keywords} onChange={this.handleChangeKeywords} />
          </label>
        </div>
        {!bookmark && <input type="submit" value="Enregistrer" />}
        {buttons.length > 0 && buttons.map(button => {
          return <input type="button" onClick={() => this.onButtonClick(button)} value={button.value}/>
        })}
      </form>
    </Modal>;
  }
};

ModalChoice.defaultProps = {
  choice: null,
  buttons: [],
  bookmark: null,
};

export default ModalChoice