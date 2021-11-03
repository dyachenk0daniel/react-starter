import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { IModalProps } from 'components/Modal/types';

const rootContainer = document.getElementById('root') as Element;

const Modal: FC<PropsWithChildren<IModalProps>> = ({ isOpen, children }) => {
  if (isOpen) {
    return createPortal(children, rootContainer);
  }

  return null;
};

export default Modal;
