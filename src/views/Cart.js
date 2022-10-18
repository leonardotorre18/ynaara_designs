import '../styles/MenuCart.scss';
import ShortCard from '../components/pure/ShortCard';
import { connect } from 'react-redux/es/exports';
import { resetCart } from '../store/actions/shoppingCart';
import newMessageWhatsapp from '../utils/newMessageWhatsapp';
import getPrice from '../utils/getPrice';
import Message from '../components/pure/Message';
import { Link } from 'react-router-dom';
import Container from '../components/containers/Container';


function MenuCart({ products, resetCart }) {
  
  return (
    <Container>
      <h1 className="title">Carrito de Compras</h1>
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
          }) : <Message>Agregue productos al carrito <Link to={'/store'}>Aquí...</Link></Message>
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
    </Container>
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