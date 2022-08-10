const GenerateMessageWhatsapp = (products, finalPrice) => {
  const urlStore = 'https://leonardoapi.herokuapp.com/';
  
  let message = `https://api.whatsapp.com/send/?phone=04128920206&text=%C2%A1Hola%2C+YNaara+Designs%21+👋🏼👋🏼👋🏼%0D%0A%0D%0AHice+este+pedido+desde+tu+tienda+online+${urlStore}%0D%0A%0D%0A`;

  products.forEach((product) => {
    message += `${product.count}+${product.name}+Talla%3A+${product.size}%0D%0A`;
  });

  message+=`%0D%0A________________________________%0D%0A%0D%0A%F0%9F%92%B0+Total+a+pagar%3A+%24+${finalPrice}+%F0%9F%92%B0%0D%0A%0D%0A%C2%A1Muchas+gracias%21+Quedo+pendiente+de+su+respuesta`;

  return message;
}

export default GenerateMessageWhatsapp;
