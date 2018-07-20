// ----------------------------------------------
// ----------------- Cat Pictures ---------------
// ----------------------------------------------

//array of cat pictures
const cats = [
  {
    src: 'images/5372754294_db6acaa1e5_z.jpg',
    name: 'Grumpy',
    count: 0,

  },
  {
    src: 'images/5655186625_2eedca4fc6_z.jpg',
    name: 'Tiger',
    count: 0,

  },
  {
    src: 'images/5675069067_c427114ce0_z.jpg',
    name:'Shylo',
    count: 0,

  },
  {
    src: 'images/8086455101_227ba7054d_z.jpg',
    name: 'Bob',
    count: 0,


  },
  {
    src: 'images/12367551225_3c15302538_z.jpg',
    name: 'Cutie',
    count: 0,

  }
];


// ----------------------------------------------
// ------------------ Init Cat  -----------------
// ----------------------------------------------

//figure element that holds the cat picture

const catContainer = document.querySelector('.img-container');
const catImg = document.createElement('img');
const catName = document.createElement('figcaption');


// ----------------------------------------------
// --------------- Cat Selector -----------------
// ----------------------------------------------

const catSelector = document.querySelector('.cat-radiogroup');
const counter = document.querySelector('.counter');
// const catChooser = function(cats) {
//   return
for (let i = 0; i < cats.length; i++) {

    const catSelection = document.createElement('input');
    catSelection.setAttribute('type', 'radio');
    catSelection.setAttribute('id', i);
    catSelection.setAttribute('name', 'cat');
    catSelection.setAttribute('aria-checked', 'false');
    catSelection.setAttribute('value', cats[i].name);
    catSelector.appendChild(catSelection);

    const catLabel = document.createElement('label');
    catLabel.setAttribute('for', cats[i].name);
    catLabel.textContent = cats[i].name;
    catSelector.appendChild(catLabel);

    catSelection.addEventListener('click', (function(iCopy) {
      return function() {
           let selectedCat = cats[iCopy].src;
           let selectedName = cats[iCopy].name;
           let selectedID = cats[iCopy].id;

           catSelection.setAttribute('aria-checked', 'true');


           catImg.setAttribute('src', selectedCat);
           catContainer.appendChild(catImg);
           selectedCat.textContent = selectedName
           catContainer.appendChild(catName);

          };
      })(i));

};

function initCat() {

  catImg.setAttribute('alt', 'cat');
  catImg.setAttribute('class', 'cat-pic');
  catImg.setAttribute('src', cats[0].src);
  catContainer.appendChild(catImg);
  document.getElementById('0').setAttribute('aria-checked', 'true');
}

initCat();


catContainer.addEventListener('click', function() {

  switch (catSelection.id) {
    case 0 :
      cats[0].count =  cats[0].count + 1;
      counter.textContent = `Cat clicks: ${cats[0].count}`;
      break;
    case 1 :
        cats[1].count =  cats[1].count + 1;
      counter.textContent = `Cat clicks: ${cats[1].count}`;
      break;
    case 2 :
        cats[2].count =  cats[2].count + 1;
      counter.textContent = `Cat clicks: ${cats[2].count}`;
      break;
    case 3 :
      cats[3].count =  cats[3].count + 1;
      counter.textContent = `Cat clicks: ${cats[3].count}`;
      break;
    case 4 :
      cats[4].count =  cats[4].count + 1;
      counter.textContent = `Cat clicks: ${cats[4].count}`;
      break;
  };

 });
