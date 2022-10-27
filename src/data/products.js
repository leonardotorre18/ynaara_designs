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

const addRoute = (name) => `assets/img/${name}`;

export const products = [
  new Products(1, 'Sueter Verde', [
    addRoute('img1.jpg'),
    addRoute('img1.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(2, 'Sueter Amarillo', [
    addRoute('img2.jpg'),
    addRoute('img2.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(3, 'Sueter Azul', [
    addRoute('img3.jpg'),
    addRoute('img3.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(4, 'Sueter Morado', [
    addRoute('img4.jpg'),
    addRoute('img4.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(5, 'Sueter Rojo', [
    addRoute('img5.jpg'),
    addRoute('img5.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(6, 'Sueter Rosado Fuerte', [
    addRoute('img6.jpg'),
    addRoute('img6.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(7, 'Sueter Rosa', [
    addRoute('img7.jpg'),
    addRoute('img7.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(8, 'Sueter Amarillo', [
    addRoute('img8.jpg'),
    addRoute('img8.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(9, 'Sueter Azul', [
    addRoute('img9.jpg'),
    addRoute('img9.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(10, 'Sueter Blanco', [addRoute('img10.jpg')], 6, ['Única'], ''),
  new Products(11, 'Sueter Morado', [
    addRoute('img11.jpg'),
    addRoute('img11.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(12, 'Blusa Roja', [
    addRoute('img12.jpg'),
    addRoute('img12.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(13, 'Blusa Rosado Fuerte', [
    addRoute('img13.jpg'),
    addRoute('img13.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(14, 'Blusa Rosa', [
    addRoute('img14.jpg'),
    addRoute('img14.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(15, 'Blusa Verde', [
    addRoute('img15.jpg'),
    addRoute('img15.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(16, 'Franelilla Amarilla', [
    addRoute('img16.jpg'),
    addRoute('img16.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(17, 'Franelilla Azul', [addRoute('img17.jpg')], 6, ['Única'], ''),
  new Products(18, 'Franelilla Blanca', [addRoute('img18.jpg')], 6, ['Única'], ''),
  new Products(19, 'Franelilla Morada', [
    addRoute('img19.jpg'),
    addRoute('img19.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(20, 'Franelilla Roja', [
    addRoute('img20.jpg'),
    addRoute('img20.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(21, 'Franelilla Rosado Fuerte', [
    addRoute('img21.jpg'),
    addRoute('img21.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(22, 'Franelilla Rosa', [
    addRoute('img22.jpg'),
    addRoute('img22.1.jpg'),
  ], 6, ['Única'], ''),
  new Products(23, 'Franelilla Verde', [
    addRoute('img23.jpg'),
    addRoute('img23.1.jpg'),
  ], 6, ['Única'], ''),
];
