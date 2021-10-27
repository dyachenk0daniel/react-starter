import React, { Component } from 'react';
import './styles.scss';
import { IErrorHandlingProps, IErrorHandlingState } from './types';

export default class ErrorHandling extends Component<IErrorHandlingProps, IErrorHandlingState> {
  state: IErrorHandlingState = { hasError: false };

  static getDerivedStateFromError(): IErrorHandlingState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error-handling'>
          <h1>Что-то пошло не так...</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
