const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//1-й вариант

const makeGalleryListMarkup = images => {
  const { url, alt } = images;
  return `<li class = "gallery-item"><img src=${url} alt=${alt} class='gallery-img' width=360></li>`;
};

const listImagesEl = document.querySelector('ul#gallery');
listImagesEl.classList.add('gallery-list');

const makeGallery = images.map(makeGalleryListMarkup).join(''); //объединяем все в одну строку чтоб insertAdjacentHTML мог вставить в HTML

listImagesEl.insertAdjacentHTML('afterbegin', makeGallery);
 
//2-й вариант

//const makeGallery = images => {
  //return images.map((image) => {
    //const imageEl = document.createElement('img');
    //imageEl.src = image.url;
    //imageEl.alt = image.alt;
    //imageEl.width = 480;
   // imageEl.style.margin = 20;

   // const itemEl = document.createElement('li');
    //itemEl.appendChild(imageEl);
    //itemEl.classList.add('list-item');
  
    //return itemEl;
  //})
//}

//const elements = makeGallery(images);

//const listImagesEl = document.querySelector('ul');
//listImagesEl.append(...elements); 

//3-й вариант

//const makeImage = ({url,alt})=> {
  
  //  const imageEl = document.createElement('img');
    //imageEl.src = url;
    //imageEl.alt = alt;
    //imageEl.width = 480;
    //imageEl.style.margin = 20;
    //imageEl.classList.add('gallery-img');

    //const itemEl = document.createElement('li');
    //itemEl.appendChild(imageEl);
    //itemEl.classList.add('gallery-item');
  
    //return itemEl;
  //}

//const elements = images.map(makeImage);
  
//const listImagesEl = document.querySelector('ul#gallery');
//listImagesEl.classList.add('gallery-list');
//listImagesEl.append(...elements); 


