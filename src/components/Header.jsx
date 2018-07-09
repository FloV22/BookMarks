import React, { Component } from 'react';
import TopButton from './TopButtons';
import './Header.scss';

class App extends Component {
  state = {
    elements: [ { name: 'AJOUTER SES FAVORIS', id: 'add' } ]
  }

  render() {
    return (
      <header>
        <nav>
          <ul>
            {this.state.elements.map(({ name, id}) =>
              <TopButton 
                name={name}
                key={id}
                onClick={this.props.onClick} 
              />
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default App;
