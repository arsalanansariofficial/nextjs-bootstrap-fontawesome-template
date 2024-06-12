'use client';
import './alert-modal.css';
import { T_Alert, T_Modal } from '@/utils/types/types';
import {
  useRef,
  useState,
  useEffect,
  MouseEvent,
  MutableRefObject
} from 'react';

export default function Alert({ id, message, isOpen, closeModal }: T_Alert) {
  const [modal, setModal] = useState<T_Modal>();
  const backdrop = useRef<HTMLDivElement>();

  if (modal) {
    if (isOpen) modal.show();
    else modal.hide();
  }

  function closeFromBackdrop(
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) {
    if (event.target === backdrop.current) closeModal();
  }

  useEffect(function () {
    async function loadModal() {
      const { Modal } = await import('bootstrap');
      setModal(new Modal(`#${id}`));
    }
    loadModal();
    return function () {
      setModal(null);
    };
  }, []);

  return (
    <div className="backdrop">
      <div
        id={id}
        className="modal"
        tabIndex={-1}
        onClick={closeFromBackdrop}
        ref={backdrop as MutableRefObject<HTMLDivElement>}
      >
        <div className="justify-content-center modal-dialog modal-dialog-centered">
          <div className="w-auto modal-content alert-modal-content">
            <div className="d-flex flex-column gap-2 modal-body alert-modal-body">
              <p className="m-0 p-0">{message}</p>
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={closeModal}
                className="btn btn-danger align-self-end btn-modal"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
