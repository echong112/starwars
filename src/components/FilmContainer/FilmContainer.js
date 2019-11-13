import React from 'react';
import Film from '../Film/Film';
import NotFound from '../NotFound/NotFound';
import './FilmContainer.scss';

export default class FilmContainer extends React.Component {

  render() {
    return (
      <div className="film-container">
        <h4>Movies: </h4>
          {this.props.films && this.props.films.map((film, i) => {
            return <Film film={film} key={i} />
          })}
          {this.props.activeCharacter.url && this.props.films === null ? <NotFound /> : ''}
      </div>
    );
  }
}
