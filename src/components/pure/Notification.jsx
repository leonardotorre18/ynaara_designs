import React, { useEffect } from 'react';
import icon from '../../assets/iconmonstr-check-mark-16.svg';

export default function Notification({ id, remove, message}) {
  useEffect(()=> {
    setTimeout(() => {
      remove(id)
    }, 3000);
  })

  return (
    <div className="notification">
      <span className="notification__text">{message}</span>
      <img
        src={icon}
        alt="Check Icon"
        className="notification__icon"
      />
    </div>
  )
}
