import React from 'react';
import Loading from './Loading';

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
          <h1>{this.state.film.title}</h1>
        </div>
      );
    }
    return <Loading />;
  }
}
