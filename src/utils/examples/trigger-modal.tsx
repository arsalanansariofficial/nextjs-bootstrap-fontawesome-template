'use client';
import { useEffect } from 'react';
import Alert from '@/components/alert-modal/alert-modal';
import useModalToggler from '@/utils/hooks/modal-toggler';

export default function TriggerModal() {
  const { isOpen, closeModal, openModal } = useModalToggler();

  useEffect(function () {
    openModal();
  }, []);

  return (
    <>
      <Alert
        id="alert"
        isOpen={isOpen}
        key={String(isOpen)}
        closeModal={closeModal}
        message="Some info goes here..."
      />
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
    </>
  );
}
