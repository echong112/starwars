import React from 'react';
import yoda from '../../assets/img/yoda-head.png';
import './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a href="/">
          <img className="logo-image" src={yoda} />
        </a>
      </div>
    );
  }
}
