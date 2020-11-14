import React, { Component, ReactNode } from 'react';
import styles from './ErrorHandling.module.scss';

interface State {
  hasError: boolean;
}

interface Props {
  children: ReactNode;
}

export default class ErrorHandling extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.root}>
          <h1>Что-то пошло не так...</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
