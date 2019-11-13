import React from 'react';
import Loading from '../Loading/Loading';
import './Film.scss';
import { formatMDY } from '../../utils.js';


export default class Film extends React.Component {
  render() {
    if (this.props.film) {
      return (
        <div className="film">
          <h3>{this.props.film.title}</h3>
          <p>{`Directed By ${this.props.film.director}`}</p>
          <p>{`Release Date: ${formatMDY(this.props.film.release_date)}`}</p>
          <p>{`Episode # ${this.props.film.episode_id}`}</p>
        </div>
      );
    }
    return <Loading />;
  }
}
