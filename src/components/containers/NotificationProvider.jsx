import React, { createContext, useReducer } from 'react';
import { useContext } from 'react';
import Notification from '../pure/Notification';
import '../../styles/Notification.scss';

const NotificationContext =  createContext();

function NotificationProvider({children}) {

  const [state, dispatch] = useReducer((state, action)=>{
    switch (action.type) {
      case "ADD_NOTIFICATION" :
      return [
        ...state,
        state.length > 0 ?
        { id: state[state.length - 1].id + 1, message: action.payload.message } :
        { id: 1, message: action.payload.message }
      ];

      case "REMOVE_NOTIFICATION":
        return state.filter((e) => e.id !== action.payload.id)
      
      default:
        return state;
    }
  }, []);

  const removeNotification = (id) => {
    dispatch({
      type: "REMOVE_NOTIFICATION",
      payload: { id }
    })
  }

  return (
    <NotificationContext.Provider value={dispatch}>
      <div className="notification-wrapper">

        { state.map(({id, message}, key)=> {
          return <Notification 
            key={key}
            id={id}
            message={message}
            remove={removeNotification}
          />
        })}
      </div>

      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => {
  return useContext(NotificationContext);
}

export default NotificationProvider;
