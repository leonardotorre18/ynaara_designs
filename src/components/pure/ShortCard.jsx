import React from 'react';
import '../../styles/ShortCard.scss';
import trashIcon from '../../assets/iconmonstr-trash-can-27.svg';
import { DeleteToCart } from '../../store/actions';
import { connect } from 'react-redux/es/exports';

function ShortCard({ id, title, count, img, deleteProduct }) {
  return (
    <div className='short-card'>
      <div className="short-card__img">
        <img src={'/img/'+img} alt="" /> 
      </div>
      <div className="short-card__body">
        <h3 className="title">{title}</h3>
        <p className="count">Cantidad: {count}</p> 
      </div>
      <div className="short-card__buttons">
        <button
          onClick={()=> {
            deleteProduct(id)
          }} 
        >
          <img src={trashIcon} alt="Trash Icon" />
        </button>
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => dispatch(DeleteToCart(id)) 
  }
}

export default connect(null, mapDispatchToProps)(ShortCard)