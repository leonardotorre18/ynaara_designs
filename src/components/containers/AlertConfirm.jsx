import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const optionsDefault = {
  title: '¿Deseas hacerlo?',
  message: 'Por favor confirma que deseas realizar la siguiente acción',
  buttons: [
    { label: 'Confirmar', onClick: () => {} },
    { label: 'Cancelar', onClick: () => {} },
  ],
};

function Notification({
  options,
  confirm,
  onClose,
  close,
}) {
  const {
    title,
    message,
  } = options;

  const confirmHandler = () => {
    confirm();
    onClose();
  };
  const closeHandler = () => {
    close();
    onClose();
  };
  return (
    <div className="p-3 rounded-lg shadow-2xl bg-white">
      <h3 className="text-lg font-semibold font-second">{title}</h3>
      <p className="font-second text-base">{message}</p>
      <div className="flex justify-center gap-3">
        <button
          type="button"
          className="font-second bg-black text-white p-1 rounded"
          onClick={confirmHandler}
        >
          {options.buttons[0].label}
        </button>
        <button
          type="button"
          className="font-second bg-black text-white p-1 rounded"
          onClick={closeHandler}
        >
          {options.buttons[1].label}
        </button>
      </div>
    </div>
  );
}

export default function ButtonConfirm({
  children,
  className,
  options,
  confirm,
  close,
}) {
  const submit = () => {
    confirmAlert({
      // eslint-disable-next-line react/no-unstable-nested-components
      customUI: ({ onClose }) => (
        <Notification
          options={{
            ...optionsDefault,
            ...options,
          }}
          onClose={onClose}
          confirm={confirm}
          close={close}
        />
      ),
    });
  };

  return (
    <button
      type="button"
      onClick={submit}
      className={className}
    >
      {children}
    </button>
  );
}

ButtonConfirm.defaultProps = {
  className: '',
  confirm: () => {},
  close: () => {},
  options: {},
};
