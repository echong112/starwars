import React from 'react';
import loading from '../../assets/img/loading.gif';
import './Loading.scss'

export default class Loading extends React.Component {

  render() {
    return (
      <div className="loading-img">
        <img alt="Loading" src={loading} />
      </div>
    );
  }
}
