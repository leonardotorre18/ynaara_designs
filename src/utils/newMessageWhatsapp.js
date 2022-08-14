/**
 * Created a URL Message Whatsapp using Whatsapp API
 * @param {array} products products in listing to shopping cart
 * @param {number} finalPrice price to pay
 * @returns URL to send whastapp Message
 */
const newMessageWhatsapp = (products, finalPrice) => {
  const urlStore = 'https://ynaara-designs.netlify.app/';
  
  let message = `https://api.whatsapp.com/send/?phone=04128920206&text=%C2%A1Hola%2C+YNaara+Designs%21+👋🏼👋🏼👋🏼%0D%0A%0D%0AHice+este+pedido+desde+tu+tienda+online+${urlStore}%0D%0A%0D%0A`;

  products.forEach((product) => {
    // message += `${product.count}+${product.name}+Talla%3A+${product.size}%0D%0A`;
    message += `${product.count}%20*${product.name}*%20%20_talla%20${product.size}_%20%20$${product.price}%20c/u%0D%0A`;
  });

  message+=`%0D%0A____________________________%0D%0A%0D%0A%F0%9F%92%B0+Total+a+pagar%3A+%24+${finalPrice}+%F0%9F%92%B0%0D%0A%0D%0A%C2%A1Muchas+gracias%21+Quedo+pendiente+de+su+respuesta`;

  return message;
}

export default newMessageWhatsapp;
