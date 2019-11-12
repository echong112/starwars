import React from 'react';
import characters from '../assets/characters.json';

export default class Characters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      character: {
        name: ''
      },
      films: []
    }
  }

  setActive = (character) => {
    this.props.onSetActive(character);
  }

  render() {
    return (
      <div className="character-picker">
        {characters.characters && characters.characters.map((character, i) => {
          return (
            <div key={i}>
              <a onClick={this.setActive.bind(this, character)}>{character.name}</a>
            </div>
          );
        })}
      </div>
    );
  }
}