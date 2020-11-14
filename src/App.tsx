import React, { Component } from 'react';
import styles from './App.module.scss';

export default class App extends Component {
  render() {
    const { root, title, heart } = styles;

    return (
      <div className={root}>
        <h1 className={title}>
          I <span className={heart}>&#10084;</span> React
        </h1>
      </div>
    );
  }
}
