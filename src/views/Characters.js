import React from 'react';
import Header from '../components/Header/Header';
import FilmContainer from '../components/FilmContainer/FilmContainer';
import CharacterPicker from '../components/CharacterPicker/CharacterPicker';
import Loading from '../components/Loading/Loading';

export default class Characters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      character: {
        name: 'No Character Selected'
      },
      films: [],
      isLoading: false
    }
  }

  setActive = (character) => {
    this.setState({isLoading: true});
    this.setState({character: character});
    this.setState({films: []});
    this.fetchFilms(character);
  }

  fetchFilms = (character) => {
    fetch(character.url)
      .then(response => response.json())
      .then(data => {
        let films = data.films;
        if (films !== undefined) {
          films.forEach(film => {
            fetch(film)
              .then(response => response.json())
              .then(data => {
                let count = this.state.films;
                count.push(data);
                this.setState({films: count});
              })
          })
        } else {
          this.setState({films: null});
        }
      })
      .finally(() => {
        this.setState({isLoading: false});
      });
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
            {
              this.state.isLoading ?
                <Loading /> :
                <FilmContainer
                films={this.state.films}
                activeCharacter={this.state.character}
              />
            }
          </div>
        </div>
      </div>
    );
  }
}
