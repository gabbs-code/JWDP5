
let mockDataStr = '[{"lenses":["35mm 1.4","50mm 1.6"],"_id":"5be1ed3f1c9d44000030b061","name":"Zurss 50S","price":49900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/vcam_1.jpg"},{"lenses":["50mm 1.8","60mm 2.8","24-60mm 2.8/4.5"],"_id":"5be1ef211c9d44000030b062","name":"Hirsch 400DTS","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":309900,"imageUrl":"http://localhost:3000/images/vcam_2.jpg"},{"lenses":["25mm 4.5"],"_id":"5be9bc241c9d440000a730e7","name":"Franck JS 105","price":209900,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","imageUrl":"http://localhost:3000/images/vcam_3.jpg"},{"lenses":["50mm 1.7","35mm 1.4"],"_id":"5be9c4471c9d440000a730e8","name":"Kuros TTS","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":159900,"imageUrl":"http://localhost:3000/images/vcam_4.jpg"},{"lenses":["50mm 1.4","35mm 1.8","28-200mm 2.8/4.5"],"_id":"5be9c4c71c9d440000a730e9","name":"Katatone","description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","price":59900,"imageUrl":"http://localhost:3000/images/vcam_5.jpg"}]'

const dataObjArr = JSON.parse(mockDataStr);
const cardHolder = document.getElementById('cardHolder');

buildCards(dataObjArr);

function buildCards(arr){
  for(let i=0; i<arr.length; i++){
    makeCard(arr[i]);
  }
}

function makeCard(layout) {
  const card = document.createElement('div');
  card.classList.add('card');

  const name = document.createElement('h2');

  const descript = document.createElement('p');
  descript.classList.add('description');
  
  const price = document.createElement('p');
  price.classList.add('price');

  name.innerHTML = layout.name;
  descript.innerHTML = layout.description;
  price.innerHTML = layout.price;

  const image = document.createElement('img');
  image.setAttribute('src', layout.imageUrl);
  image.setAttribute('alt', layout.name + ' image');
  image.classList.add('img');

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(descript);
  card.appendChild(price);

 
  cardHolder.appendChild(card);
}










