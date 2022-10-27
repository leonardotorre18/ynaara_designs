import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

// JSX custom Notification Component
function Notification ( { onClose, options, close, confirm } ) {

  return (
    <div className="p-3 rounded-lg shadow-2xl bg-white">
      <h3 className="text-lg font-semibold font-second">{options.title}</h3>
      <p className="font-second text-base">{options.message}</p>
      <div className="flex justify-center gap-3">
        <button 
          className="font-second bg-black text-white p-1 rounded"
          onClick={()=> {
            confirm();
            onClose();
          }}
        >{options.buttons[0].label}</button>
        <button 
          className="font-second bg-black text-white p-1 rounded"
          onClick={()=> {
            close();
            onClose();
          }}
        >{options.buttons[1].label}</button>
      </div>
    </div>
  )
}

const optionsDefault = {
  title: '¿Deseas hacerlo?',
  message: 'Por favor confirma que deseas realizar la siguiente acción',
  buttons: [
    {label: 'Confirmar', onClick: ()=>{}},
    {label: 'Cancelar', onClick: ()=>{}}
  ]
}

export const ButtonConfirm = ({
  children, 
  className = '',
  confirm = ()=>{},
  close = ()=>{},
  options = {},
}) => {
  const alertazo = () => {
    confirmAlert({
      customUI: ({onClose}) => {
        return (
          <Notification
            confirm={confirm}
            close={close}
            onClose={onClose}
            options={{...optionsDefault, ...options}}
          />
        )
      }
    })
  }

  return (
    <button 
      onClick={alertazo} 
      className={className}
    >
      {children}
    </button>
  )
}