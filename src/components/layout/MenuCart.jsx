import '../../styles/MenuCart.scss';
import ShortCard from '../pure/ShortCard';
import { connect } from 'react-redux/es/exports';
import { resetCart } from '../../store/actions/shoppingCart';
import newMessageWhatsapp from '../../utils/newMessageWhatsapp';
import getPrice from '../../utils/getPrice';
import Message from '../pure/Message'

function MenuCart({ products, showMenu, resetCart }) {
  
  return (
    <div className={showMenu ? 'menu-cart menu-cart--visible' : 'menu-cart'}>
      <h3 className="menu-cart__title">Shopping Cart</h3>
      <div className="menu-cart__list">
        {
          products.length > 0 ?
          products.map((element, index) => {
            return <ShortCard 
              key={index} 
              id={element.id}
              size={element.size}
              title={element.name} 
              count={element.count} 
              img={element.img}
            />
          }) : <Message>Agregue productos al carrito</Message>
        }
      </div>
      <div className="menu-cart__buttons">
        <button
          className="buy"
          onClick={()=> {
            products.length > 0 && window.open(newMessageWhatsapp(products, getPrice(products)))
            resetCart();
          }}
        >Comprar todo</button>
        <button
          onClick={resetCart}
        >Limpiar Carrito</button>
      </div> 
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.shoppingCart,
    showMenu: state.showMenuCart
  }
}
const mapDispatchToProps = (dispatch) => {
  return { resetCart: () => dispatch(resetCart()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuCart)
