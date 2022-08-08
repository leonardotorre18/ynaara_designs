function GenerateList (productsState, products) {
  const newList = [];
  productsState.forEach(element => {
    newList.push({ ...products.find(e => e.id === element.id), count: element.count })
  });
  return newList;
}
export default GenerateList;