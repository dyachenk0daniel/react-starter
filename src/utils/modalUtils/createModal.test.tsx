import React from 'react';
import { act } from 'react-dom/test-utils';
import modalUtils from 'utils/modalUtils/index';

const Modal = () => <p>paragraph</p>;
let removeFn: (() => void) | null = null;

describe('test modal utils', () => {
  afterEach(() => {
    if (document.body.hasChildNodes()) {
      document.body.innerHTML = '';
    }

    removeFn = null;
  });

  test('test create method', () => {
    act(() => {
      modalUtils.create(<Modal />, 'modalId');
    });

    const id = document.querySelector('body > #modalId')?.id;
    expect(id).toBe('modalId');
  });

  test('test remove method', () => {
    act(() => {
      removeFn = modalUtils.create(<Modal />, 'modalId');
    });

    if (removeFn) removeFn();

    const id = document.querySelector('body > #modalId')?.id;
    expect(id).toBeUndefined();
  });

  test('test removeAll method', () => {
    const ids: number[] = [];

    for (let i = 1; i <= 10; i++) {
      ids.push(i);
    }

    act(() => {
      ids.forEach(i => modalUtils.create(<Modal />, 'modalId' + i));
    });

    modalUtils.removeAll();

    const modals = Array.from(document.getElementsByClassName('modal'));
    expect(modals.length).toBe(0);
  });
});
