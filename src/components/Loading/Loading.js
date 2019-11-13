import React from 'react';
import atat from '../../assets/img/loading-gif-transparent-25.gif';
import './Loading.scss'

export default class Loading extends React.Component {

  render() {
    return (
      <div className="loading-img">
        <img src={atat} />
      </div>
    );
  }
}
