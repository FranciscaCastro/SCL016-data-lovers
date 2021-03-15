//import data from './data/lol/pruebas.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const header = document.querySelector('header');
const section = document.querySelector('section');

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['type'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Format: ' + jsonObj['format'] + ' // Version: ' + jsonObj['version'];
    header.appendChild(myPara);
}
    console.log (populateHeader, data);
function showData(jsonObj) {   
    const champions = jsonObj['data'];
      for (let i = 0; i < champions.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = data[i].name;
      myPara1.textContent = 'title: ' + data[i].title;
      myPara2.textContent = 'blurb: ' + data[i].blurb;
      myPara3.textContent = 'info: '
  
      const about = data[i].info;
      for (let j = 0; j < about.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = about[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);

         }
  }

console.log(showData, data);
