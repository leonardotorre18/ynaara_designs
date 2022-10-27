/**
 * Add up all the items in the shopping cart and calculate the price to pay
 * @param {array} products Array with list products
 * @returns {number} Counter to pay
 */
const GetFinalPrice = (products = []) => {
  let finalPrice = 0;
  products.forEach((product) => {
    finalPrice += product.price * product.count;
  });
  return finalPrice;
};

// const getDiscount = (product = {}) => {

//   const rest = product.count % 6;

//   const firstDiscount = Math.floor(product.count / 6) * 9;
//   const secondDiscount = Math.floor(rest / 3) * 3;

//   return firstDiscount + secondDiscount;

// }

export const getDiscount = (products = []) => {

  let totalProduct = 0;
  products.forEach(product => {
    totalProduct += product.count
  });

  let firstDiscount= 0;
  let secondDiscount = 0;

  const rest = totalProduct % 6;

  firstDiscount += Math.floor(totalProduct / 6) * 9;
  secondDiscount += Math.floor(rest / 3) * 3;

  return firstDiscount + secondDiscount;

}

export default GetFinalPrice;
