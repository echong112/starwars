import React from 'react';
import Header from '../components/Header/Header';
import FilmContainer from '../components/FilmContainer/FilmContainer';
import CharacterPicker from '../components/CharacterPicker/CharacterPicker';
import Loading from '../components/Loading/Loading';
import Scroller from '../components/Scroller/Scroller';

export default class Characters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      character: {
        name: 'No Character Selected'
      },
      films: null,
      isLoading: false,
      isModalOpen: true
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

  closeModal = () => {
    this.setState({isModalOpen: !this.state.isModalOpen});
  }

  render() {
    return (
      <div>
        <div className="scroller-close">
          <button onClick={this.closeModal}>{this.state.isModalOpen ? 'Close' : 'Open Scroller'}</button>
        </div>
        {this.state.isModalOpen ? 
          <div className="scroller-container">
            <Scroller />
          </div> :
          ''
        }
        <div className="container">
          <Header />
        </div>
        <div className="container container--flex-column">
          <div className="col col--35">
            <CharacterPicker
              onSetActive={this.setActive}
              activeCharacter={this.state.character}
              onIsLoading={this.state.isLoading}
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
