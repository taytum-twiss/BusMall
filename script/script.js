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

//count the total votes/clicks
  for (let i=0; i < PRODUCTS_ARRAY.length; i++) {
    if ( imageid === PRODUCTS_ARRAY[i].HTMLid) {
      PRODUCTS_ARRAY[i].totalVotes++
      console.log('total votes ', PRODUCTS_ARRAY[i].totalVotes);
    }
  }

  //we need a conditional statement
  if (clicks !== 25 ) {
    //remove the first 3 images from the array
    for(let i=0; i<3; i++) {

      //generate a random number between 0 and x 
      let random = Math.floor(Math.random() * PRODUCTS_ARRAY.length -1);

      let item = PRODUCTS_ARRAY.shift();
      PRODUCTS_ARRAY.splice(PRODUCTS_ARRAY.length -1 , 0, item);
    }
  
    //remove it from the index.html (remove it from the DOM)
    for(let i=0; i < 3; i++) {
      let parent = document.getElementById(`img${i}Container`);
      parent.removeChild(parent.lastChild);
    }
    console.log('clicks:', clicks);

    renderImages();

  }else {
    let divs = document.getElementsByTagName('div');
    for (let i=1, i<divs.length - 1; i++) {
      divs[i].removeEventListener('click',handleClick);
    }
    console.log('you have reached 25 clicks')


    //render the results by running a function()
    renderResults();

  }

}

function renderResults() {

  // console.log('displaying results');
  // I must target the parent, which in my case is..
  let resultSection = document.getElementById('resultSection');
  let div = document.createElement('div');
  div.setAttribute('id', 'result');
  resultSection.appendChild(div);

  let h3 = document.createElement('h3');
  h3.textContent = 'Results: ';
  div.appendChild(h3);

  let ol = document.createElement('ol');
  div.appendChild(ol);

  // PRODUCTS_ARRAY.sort( function(a, b) {
  //   return b.totalVotes - a.totalVotes;
  // });

  for (let i=0; i < PRODUCTS_ARRAY.length; i++) {
    // display all of the results;
    let listItem = document.createElement('li');
    listItem.textContent= `${PRODUCTS_ARRAY[i].totalVotes} for ${PRODUCTS_ARRAY[i].HTMLid}`;
    ol.appendChild(listItem);
  }

}


//This is our entry point
(function startApp() {

  for(let i=0; i < 3; i++) {
    let imgContainer = document.getElementById(`img${i}Container`);
    imgContainer.addEventListener('click', handleClick);
  }

  // shuffle the images - later
  renderImages();

})();

