import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import Header from './components/Header';
import Modal from './components/Modal';

import { setBookmarks, getBookmarks } from './helpers/bookmarks';

import './App.scss';

class App extends Component {
  state = {
    isChoice: false,
    choice: null,
    bookmark: null,
    images: [],
  }

  componentDidMount() {
    const images = getBookmarks();
    if (images) {
      this.setState({ images });
    }
  }

  onClick = () => {
    this.setState({
      isChoice: true,
      choice: null,
    });
  }

  reset = () => {
    this.setState({
      isChoice: false,
      choice: null,
      bookmark: null,
    });
  }

  onChoiceClick = (choice) => {
    this.setState({
      isChoice: false,
      choice: choice,
    })
  }

  load = (data) => {
    if (typeof data === 'object' && Object.keys(data).length > 1) {
      const images = [...this.state.images, data];
      this.setState({
        choice: null,
        images,
      });
      setBookmarks(images);
    }
  }

  onClickThumbnail = (index) => {
    this.setState({
      bookmark: this.state.images[index],
    });
  }

  modify = (bookmark) => {
    const images = [...this.state.images];
    const index = this.state.images.findIndex(image => image.title === bookmark.title);
    images[index] = bookmark;
    this.setState({
      bookmark: null,
      images,
    });
    setBookmarks(images);
  }

  delete = (bookmark) => {
    const images = [...this.state.images];
    const index = this.state.images.findIndex(image => image.title === bookmark.title);
    images.splice(index, 1);
    this.setState({
      bookmark: null,
      images,
    });
    setBookmarks(images);
  }

  setCustomTags = (t) => {
    const duration = 'Duréé : ' + t.duration;
    return <div key={t.title} className='customTags'>
      Nom de l'auteur : {t.authorName}<br/>
      Date d'ajout : {t.addedDate}<br/>
      Url : {t.url}<br/>
      Largeur : {t.width}<br/>
      Longeur : {t.height}<br/>
      {t.duration &&  duration}
    </div>;
  }
 
  render() {
    var images = this.state.images.map((i) => {
      i.customOverlay = (
      <div className='captionStyle'>
        <div className='captionButtons'>
          <input type='button' onClick={() => this.delete(i)} value={'Supprimer'}/>
        </div>
        <div>{i.caption}</div>
        {this.setCustomTags(i)}
      </div>);
      return i;
    });

    return <div className='container'>
      <Header onClick={this.onClick} reset={this.reset}/>
      <Modal 
        isChoice={this.state.isChoice}
        onChoiceClick={this.onChoiceClick}
        choice={this.state.choice}
        bookmark={this.state.bookmark}
        load={this.load}
        modify={this.modify}
        delete={this.delete}
        reset={this.reset}
      />
      <Gallery 
        images={images}
        onClickThumbnail={this.onClickThumbnail}
        enableImageSelection={false}
      />
    </div>;
  }
}

export default App;
