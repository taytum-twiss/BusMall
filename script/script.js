'use strict'

// This is the mini-database to keep track of everything. 
let PRODUCTS_ARRAY = [
  {HTMLid: 'bag', imgURL: './images/bag.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'banana', imgURL: './images/banana.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'bathroom', imgURL: './images/bathroom.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'boots', imgURL: './images/boots.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'breakfast', imgURL: './images/breakfast.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'bubblegum', imgURL: './images/bubblegum.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'chair', imgURL: './images/chair.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'cthulhu', imgURL: './images/cthulhu.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'dogDuck', imgURL: './images/dog-duck.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'dragon', imgURL: './images/dragon.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'pen', imgURL: './images/pen.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'petSweep', imgURL: './images/pet-sweep.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'scissors', imgURL: './images/scissors.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'shark', imgURL: './images/shark.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'sweep', imgURL: './images/sweep.png', totalViews: 0, totalVotes: 0},
  {HTMLid: 'tauntaun', imgURL: './images/tauntaun.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'unicorn', imgURL: './images/unicorn.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'usb', imgURL: './images/usb.gif', totalViews: 0, totalVotes: 0},
  {HTMLid: 'waterCan', imgURL: './images/water-can.jpg', totalViews: 0, totalVotes: 0},
  {HTMLid: 'wineGlass', imgURL: './images/wine-glass.jpg', totalViews: 0, totalVotes: 0},
]

let clicks = 0;

// On startup - display 3 images from the array
function renderImages() {

  for (let i=0; i <= 2; i++) {
    // let imgContainer = document.getElementById('img' + i + 'Container');
    // imagine the following code being done i times
    let imgContainer = document.getElementById(`img${i}Container`);
    let img = document.createElement('img');
    imgContainer.appendChild(img);
    img.setAttribute('src', PRODUCTS_ARRAY[i].imgURL);
    img.setAttribute('id', PRODUCTS_ARRAY[i].HTMLid);
    img.setAttribute('class', 'item');

    //whenever the image is shown, we need to add one to the total view
    PRODUCTS_ARRAY[i].totalViews++;
    console.log('total views', PRODUCTS_ARRAY[i].HTMLid,PRODUCTS_ARRAY[i].totalViews)
  }

}

// Consolidate all the response functions (callbacks) into one function
function handleClick(event) {
  // put all the callbacks into one place
  clicks++;
  console.log('I was clicked, and my id is: ', event.target.id)
  let imageid = event.target.id;

  // when the parent container is clicked, how do i know which image it is ???
  // we have to compare the id's
  // if then else statement.. compare parentId to image id somehow.. 
  //if parentid == 0,1, 2 - array[0], or array[1], array[2]
  for (let i=0; i < PRODUCTS_ARRAY.length; i++) {
    if ( imageid === PRODUCTS_ARRAY[i].HTMLid) {
      PRODUCTS_ARRAY[i].totalVotes++
      console.log('total votes ', PRODUCTS_ARRAY[i].totalVotes);
    }
  }
}

(function startApp() {

  for(let i=0; i < 3; i++) {
    let imgContainer = document.getElementById(`img${i}Container`);
    imgContainer.addEventListener('click', handleClick);
  }

  // shuffle the images - later
  renderImages();

})();

