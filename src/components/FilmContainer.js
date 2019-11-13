import React from 'react';
import Film from './Film/Film';
import NotFound from './NotFound/NotFound';

export default class FilmContainer extends React.Component {

  render() {
    if (this.props.films !== null) {
      return (
        <div>
            {this.props.films && this.props.films.map((film, i) => {
              return (
                <Film film={film} key={i} />
              );
            })}
        </div>
      );

    } else if (this.props.films === null) {
      return <NotFound />
    }
  }
}
