import React from 'react';
import Header from './Header';
import FilmContainer from './FilmContainer';
import CharacterPicker from './CharacterPicker';

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
      <div className="container">
        <Header />
        <CharacterPicker onSetActive={this.setActive}/>
        <h1>{this.state.character.name}</h1>
        <FilmContainer films={this.state.films} />
      </div>
    );
  }
}
