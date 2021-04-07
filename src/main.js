import data from './data/lol/lol.js';
//import { }  from '/data.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const dataLol = data.data
const lolValues = (Object.values(dataLol))

const loadData = () => {
 console.log(Object.values(dataLol))
 for (let i = 0; i < lolValues.length; i++) { 
  const namesDiv = document.querySelector('section');
  const namesContainer = document.createElement('names');
  const champNames = document.createElement('p');
  const champImages = document.createElement("img");
  const champImagesContainer = document.createElement("BUTTON");
  champImagesContainer.className = "containerImages";
  namesContainer.className = "namesContainer";
  champImages.className = "championsImages";
  champImagesContainer.setAttribute("id", lolValues[i].name);
  namesDiv.appendChild(namesContainer);
  namesContainer.appendChild(champNames);
  namesContainer.appendChild(champImagesContainer);
  champImagesContainer.appendChild(champImages);
  champNames.textContent = lolValues[i].name;
  champImages.src = lolValues[i].splash;
}}
loadData();

const infoChamps = () => {
  for (let i=0; i < lolValues.length; i++) {
    let idChamps = document.getElementById(lolValues[i].name);     
    idChamps.addEventListener("click", () => {
    const infoCont = document.getElementById('info');
    console.log(Object.values(lolValues[i].info));
    infoCont.style.display = "flex";
    const infoContainer = document.querySelector("article")
    const infoDiv = document.createElement('divinfo');
    const infoChampions = document.createElement('p');
    infoDiv.className = "infoDiv";
    infoContainer.appendChild(infoDiv);
    infoDiv.appendChild(infoChampions);
    infoChampions.textContent = (Object.values(lolValues[i].info));
    })
  }}

infoChamps();