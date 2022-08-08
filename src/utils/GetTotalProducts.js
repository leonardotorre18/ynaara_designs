const GetTotalProducts = (products) => {
  let finalTotalProducts = 0;
  products.forEach((product) => {
    finalTotalProducts +=  product.count;
  });
  return finalTotalProducts;
};

export default GetTotalProducts;
