import { useState } from 'react';
import Modal from 'components/organisms/Modal/index';

const useModal = (initialValue = false) => {
  const [isOpen, setModalState] = useState(initialValue);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return {
    Modal,
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
