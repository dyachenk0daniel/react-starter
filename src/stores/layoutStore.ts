import React from 'react';
import { makeAutoObservable } from 'mobx';

interface IModal {
  id: string | null;
  element: React.ReactElement;
}

class LayoutStore {
  public modalList: IModal[] = [];

  public constructor() {
    makeAutoObservable(this);
  }

  public showModal(element: React.ReactElement, id: string | null = null) {
    this.modalList.push({ id, element });
  }

  public hideModal(modalId: string) {
    const modalIndex = this.modalList.findIndex(({ id }) => id === modalId);
    this.modalList.splice(modalIndex, 1);
  }

  public hideAllModals() {
    this.modalList = [];
  }
}

export default new LayoutStore();
