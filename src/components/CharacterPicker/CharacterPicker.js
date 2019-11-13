import React from 'react';
import characters from '../../assets/characters.json';
import './CharacterPicker.scss';

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
        <h4>Pick Character</h4>
        {characters.characters && characters.characters.map((character, i) => {
          return (
            <div key={i}>
              <button
                className={`character-button ${this.props.activeCharacter.name === character.name ? 'active' : ''}`}
                onClick={this.setActive.bind(this, character)}>{character.name}</button>
            </div>
          );
        })}
      </div>
    );
  }
}
