class Products {
  constructor(id, name, img, price, sizes, description) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.sizes = sizes;
    this.description = description;
  }
}

const addRoute = (id, url) => ({ id, url: `assets/img/${url}` });

export default [
  new Products(1, 'Sueter Verde', [
    addRoute(1, 'img1.jpg'),
    addRoute(2, 'img1.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(2, 'Sueter Amarillo', [
    addRoute(1, 'img2.jpg'),
    addRoute(2, 'img2.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(3, 'Sueter Azul', [
    addRoute(1, 'img3.jpg'),
    addRoute(2, 'img3.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(4, 'Sueter Morado', [
    addRoute(1, 'img4.jpg'),
    addRoute(2, 'img4.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(5, 'Sueter Rojo', [
    addRoute(1, 'img5.jpg'),
    addRoute(2, 'img5.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(6, 'Sueter Rosado Fuerte', [
    addRoute(1, 'img6.jpg'),
    addRoute(2, 'img6.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(7, 'Sueter Rosa', [
    addRoute(1, 'img7.jpg'),
    addRoute(2, 'img7.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(8, 'Sueter Amarillo', [
    addRoute(1, 'img8.jpg'),
    addRoute(2, 'img8.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(9, 'Sueter Azul', [
    addRoute(1, 'img9.jpg'),
    addRoute(2, 'img9.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(10, 'Sueter Blanco', [
    addRoute(1, 'img10.jpg'),
  ], 6, ['Única'], ''),
  new Products(11, 'Sueter Morado', [
    addRoute(1, 'img11.jpg'),
    addRoute(2, 'img11.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(12, 'Blusa Roja', [
    addRoute(1, 'img12.jpg'),
    addRoute(2, 'img12.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(13, 'Blusa Rosado Fuerte', [
    addRoute(1, 'img13.jpg'),
    addRoute(2, 'img13.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(14, 'Blusa Rosa', [
    addRoute(1, 'img14.jpg'),
    addRoute(2, 'img14.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(15, 'Blusa Verde', [
    addRoute(1, 'img15.jpg'),
    addRoute(2, 'img15.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(16, 'Franelilla Amarilla', [
    addRoute(1, 'img16.jpg'),
    addRoute(2, 'img16.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(17, 'Franelilla Azul', [
    addRoute(1, 'img17.jpg'),
  ], 6, ['Única'], ''),
  new Products(18, 'Franelilla Blanca', [
    addRoute(1, 'img18.jpg'),
  ], 6, ['Única'], ''),
  new Products(19, 'Franelilla Morada', [
    addRoute(1, 'img19.jpg'),
    addRoute(2, 'img19.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(20, 'Franelilla Roja', [
    addRoute(1, 'img20.jpg'),
    addRoute(2, 'img20.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(21, 'Franelilla Rosado Fuerte', [
    addRoute(1, 'img21.jpg'),
    addRoute(2, 'img21.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(22, 'Franelilla Rosa', [
    addRoute(1, 'img22.jpg'),
    addRoute(2, 'img22.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(23, 'Franelilla Verde', [
    addRoute(1, 'img23.jpg'),
    addRoute(2, 'img23.1.jpg'),
  ], 6, ['Única'], ''),
];
