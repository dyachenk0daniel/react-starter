import { ReactNode } from 'react';

export interface IErrorHandlingState {
  hasError: boolean;
}

export interface IErrorHandlingProps {
  children: ReactNode;
}