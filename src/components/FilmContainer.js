import React from 'react';
import Film from './Film';

export default class FilmContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.films && this.props.films.map((film, i) => {
          return (
            <Film film={film} key={i} />
          );
        })}
      </div>
    );
  }
}
