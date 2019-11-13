import React from 'react';
import Header from '../components/Header';
import FilmContainer from '../components/FilmContainer';
import CharacterPicker from '../components/CharacterPicker/CharacterPicker';

export default class Characters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      character: {
        name: 'No Character Selected'
      },
      films: []
    }
  }

  setActive = (character) => {
    this.setState({character: character});
    this.fetchFilms(character);
  }

  fetchFilms = (character) => {
    fetch(character.url)
      .then(response => response.json())
      .then(data => this.setState({ films: data.films }));
  }

  render() {
    return (
      <div>
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <div className="col col--35">
            <CharacterPicker
              onSetActive={this.setActive}
              activeCharacter={this.state.character}
            />
          </div>
          <div className="col col--65">
            <FilmContainer
              films={this.state.films}
              activeCharacter={this.state.character}
            />
          </div>
        </div>
      </div>
    );
  }
}
