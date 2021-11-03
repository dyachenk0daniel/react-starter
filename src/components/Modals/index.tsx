import layoutStore from '@/stores/layoutStore';
import { observer } from 'mobx-react';

const Modals = () => {
  return (
    <>
      {layoutStore.modalList.map(modal => {
        return modal.element;
      })}
    </>
  );
};

export default observer(Modals);
