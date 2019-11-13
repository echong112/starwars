import React from 'react';
import Loading from '../Loading';
import './Film.scss';

export default class Film extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      film: null,
    }
  }

  componentDidMount() {
    fetch(this.props.film)
      .then(response => response.json())
      .then(data => {
        this.setState({ film: data });
      });
  }

  render() {
    if (this.state.film) {
      return (
        <div>
          <h4>{this.state.film.title}</h4>
          <p>{`Directed By ${this.state.film.director}`}</p>
          <p>{`Produced By ${this.state.film.producer}`}</p>
          <p>{`Release Date: ${this.state.film.release_date}`}</p>
          <p>{`Release Date: ${this.state.film.episode_id}`}</p>
        </div>
      );
    }
    return <Loading />;
  }
}
