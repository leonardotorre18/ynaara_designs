/**
 * Add up all the items in the shopping cart and calculate the price to pay
 * @param {array} products Array with list products
 * @returns {number} Counter to pay
 */
const GetFinalPrice = (products) => {
  let finalPrice = 0;
  products.forEach((product) => {
    finalPrice += product.price * product.count;
  });
  return finalPrice;
};

export default GetFinalPrice;
