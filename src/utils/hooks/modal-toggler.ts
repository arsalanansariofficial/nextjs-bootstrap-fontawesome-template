import { useState } from 'react';

export default function useModalToggler() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return { isOpen, openModal, closeModal };
}
