import React from 'react';
import Loading from '../Loading/Loading';
import './Film.scss';

export default class Film extends React.Component {
  render() {
    if (this.props.film) {
      return (
        <div>
          <h4>{this.props.film.title}</h4>
          <p>{`Directed By ${this.props.film.director}`}</p>
          <p>{`Produced By ${this.props.film.producer}`}</p>
          <p>{`Release Date: ${this.props.film.release_date}`}</p>
          <p>{`Release Date: ${this.props.film.episode_id}`}</p>
        </div>
      );
    }
    return <Loading />;
  }
}
