import {  useState, useRef } from "react";

const useProductList = () => {
  const state = useRef([
    {
      "id": 1,
      "name": "Blusa Mangas Largas Verde",
      "tags": ["blouse"],
      "img": "assets/img/img1.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 2,
      "name": "Blusa Mangas Largas Amarilla",
      "tags": [],
      "img": "assets/img/img2.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 3,
      "name": "Blusa Mangas Largas Azul",
      "tags": [],
      "img": "assets/img/img3.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 4,
      "name": "Blusa Mangas Largas Morada",
      "tags": ["dress"],
      "img": "assets/img/img4.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 5,
      "name": "Blusa Mangas Largas Roja",
      "tags": ["dress"],
      "img": "assets/img/img5.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 6,
      "name": "Blusa Mangas Largas Rosado Fuerte",
      "tags": ["dress"],
      "img": "assets/img/img6.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 7,
      "name": "Blusa Mangas Largas Rosado",
      "tags": ["blouse"],
      "img": "assets/img/img7.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 8,
      "name": "Blusa Mangas Cortas Amarillo",
      "tags": ["blouse"],
      "img": "assets/img/img8.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 9,
      "name": "Blusa Mangas Cortas Azul",
      "tags": ["blouse"],
      "img": "assets/img/img9.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 10,
      "name": "Blusa Mangas Cortas Blanca",
      "tags": ["blouse"],
      "img": "assets/img/img10.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 11,
      "name": "Blusa Mangas Cortas Morado",
      "tags": ["blouse"],
      "img": "assets/img/img11.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 12,
      "name": "Blusa Mangas Cortas Roja",
      "tags": ["blouse"],
      "img": "assets/img/img12.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 13,
      "name": "Blusa Mangas Cortas Rosado Fuerte",
      "tags": ["blouse"],
      "img": "assets/img/img13.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 14,
      "name": "Blusa Mangas Cortas Rosado",
      "tags": ["blouse"],
      "img": "assets/img/img14.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 15,
      "name": "Blusa Mangas Cortas Verde",
      "tags": ["blouse"],
      "img": "assets/img/img15.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 16,
      "name": "Franelilla Amarilla",
      "tags": ["blouse"],
      "img": "assets/img/img16.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 17,
      "name": "Franelilla Azul",
      "tags": ["blouse"],
      "img": "assets/img/img17.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 18,
      "name": "Franelilla Blanca",
      "tags": ["blouse"],
      "img": "assets/img/img18.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 19,
      "name": "Franelilla Morada",
      "tags": ["blouse"],
      "img": "assets/img/img19.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 20,
      "name": "Franelilla Roja",
      "tags": ["blouse"],
      "img": "assets/img/img20.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 21,
      "name": "Franelilla Rosado Fuerte",
      "tags": ["blouse"],
      "img": "assets/img/img21.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 22,
      "name": "Franelilla Rosada",
      "tags": ["blouse"],
      "img": "assets/img/img22.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    },{
      "id": 23,
      "name": "Franelilla Verde",
      "tags": ["blouse"],
      "img": "assets/img/img23.jpg",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sequi dolor at, qui esse aspernatur ipsam ducimus a voluptatum nobis alias! Reiciendis aspernatur adipisci alias possimus sunt, et ipsa perferendis.",
      "price": 6
    }
  ]);
  const [tempList, setTempList] = useState(state);


  const filterList = (filter) => {
    if (filter.length > 0 ) {
      setTempList(
        state.current.filter(
          product => product.name.trim().toLowerCase().includes(filter)
        )
      );
      console.log(tempList)
    } else setTempList(state.current)
  }

  return [tempList, filterList];
}

export default useProductList;
