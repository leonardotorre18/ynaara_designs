import React, { useEffect } from 'react';
import '../../styles/Message.scss';

export default function Message({children}) {
  useEffect(()=> {

  },[])


  return (
    <div className="message">
      <p className="message__param">{children}</p>
    </div>
  )
}
