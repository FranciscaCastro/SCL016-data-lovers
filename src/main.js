import data from './data/lol/lol.js';
// import { filterMage }  from '/data.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
const dataLol = data.data;
const dataValues = Object.values(dataLol);
const btnMage = document.getElementById('mage');
const btnMarksman = document.getElementById('marksman');
const btnAssassin = document.getElementById('assassin');
const btnTank = document.getElementById('tank');
const btnSupport = document.getElementById('support');
const btnAll = document.getElementById('all');
const btnClose = document.getElementById('btnClose');
const champsContainer = document.getElementById('container');
const infoCont = document.getElementById('info');
const infoDiv = document.getElementById('infoDiv');
infoCont.appendChild(infoDiv);
infoDiv.className = 'infoDiv';
infoDiv.setAttribute('id','infoDiv')

//Mostrar la data inicial en página principal
const loadData = (filters) => {
  const lolValues = dataValues.filter((tag) => {
    if((tag.tags).includes(filters)){
      return tag;
        }
    else if (filters == null) {
      return tag;
    }    
  }) 
  for (let i = 0; i < lolValues.length; i++) { 
  const champsDiv = document.createElement('champsDiv');
  const champImagesContainer = document.createElement('BUTTON');
  champImagesContainer.setAttribute('id', lolValues[i].name);
  const champNames = document.createElement('p');
  const champImages = document.createElement('img');
  champsDiv.className = 'namesContainer';
  champImagesContainer.className = 'championsButton'
  champImages.className = 'championsImages';
  champsContainer.appendChild(champsDiv);
  champsDiv.appendChild(champNames);
  champsDiv.appendChild(champImagesContainer);
  champImagesContainer.appendChild(champImages);
  champNames.textContent = lolValues[i].name;
  champImages.src = lolValues[i].splash;
}}
loadData();


//Modal
const infoChamps = (filters) => {
  const lolValues = dataValues.filter((tag) => {
    if((tag.tags).includes(filters)){
      return tag;
        }
    else if (filters == null) {
      return tag;
    }    
  }) 
  for (let i=0; i < lolValues.length; i++) {
    let idChamps = document.getElementById(lolValues[i].name);  
    idChamps.addEventListener('click', () => {
    infoCont.style.display = 'flex';
    const infor = (lolValues[i].info);
    const stats = (lolValues[i].stats);
    const avatar = (lolValues[i].splash);
    const infoChampionsDiv = document.createElement('infoChampDiv')
    const champAvatar = document.createElement('img')
    const infoChampions = document.createElement('li');
    const champStatsLvlerDiv = document.createElement('statsLvlerDiv')
    const champStatsDiv = document.createElement('statsDiv');
    const champStats = document.createElement('a');
    const champLvlerDiv = document.createElement ('lvlersDiv');
    const champLvler = document.createElement('a');
    infoChampions.setAttribute('id', 'modalInfo');
    infoChampionsDiv.setAttribute('id', 'infoChampsDiv')
    champStatsLvlerDiv.setAttribute('id', 'statsLvlerDiv')
    champStats.setAttribute('id', 'stats');
    champLvler.setAttribute('id', 'lvler');
    champAvatar.className = 'avatar';
    champStatsLvlerDiv.className = 'statsContainer';
    champStatsDiv.className = 'statsDiv';
    champLvlerDiv.className = 'lvlerDiv';
    infoDiv.appendChild(infoChampionsDiv);
    infoDiv.appendChild(champStatsLvlerDiv);
    infoChampions.appendChild(champAvatar);
    champStatsLvlerDiv.appendChild(champStatsDiv);
    champStatsLvlerDiv.appendChild(champLvlerDiv);
    infoChampionsDiv.appendChild(infoChampions);
    champStatsDiv.appendChild(champStats);
    champLvlerDiv.appendChild(champLvler);
    champAvatar.src = avatar;
    infoChampions.innerHTML = 'Attack: ' + infor.attack + '     Defense: ' + infor.defense + '    Magic: ' + infor.magic + '    Movespeed: ' + stats.movespeed 
    champStats.innerHTML = 'Stats' + '<br>Hp: ' + stats.hp + '<br>Mp: ' + stats.mp + '<br>Armor: ' + stats.armor + '<br>Spellblock: ' + stats.spellblock + '<br>HpRegen: ' + stats.hpregen + '<br>MpRegen: ' + stats.mpregen + '<br>Crit: ' + stats.crit + '<br>Attack Dmg: ' + stats.attackdamage;
    champLvler.innerHTML = 'Increase per Lvl' + '<br>+' + stats.hpperlevel + '<br>+' + stats.mpperlevel + '<br>+' + stats.armorperlevel + '<br>+' + stats.spellblockperlevel + '<br>+' + stats.hpregenperlevel + '<br>+' + stats.mpregenperlevel + '<br>+' + stats.critperlevel + '<br>+' + stats.attackdamageperlevel;
   })
  }}
  infoChamps();

//Cerrar y limpiar modal
const limpiar = () => {
  const infoDiv = document.getElementById('infoDiv');
  const infoChampionsDiv = document.getElementById('infoChampsDiv');
  const champStatsLvlerDiv = document.getElementById('statsLvlerDiv')
  infoDiv.removeChild(infoChampionsDiv);
  infoDiv.removeChild(champStatsLvlerDiv)
}

btnClose.addEventListener('click', () => {
  limpiar();
  infoCont.style.display = 'none';
  })

btnAssassin.addEventListener('click', (btnAssasin) => {
    champsContainer.innerHTML=''
    btnAssasin ='Assassin'
   loadData(btnAssasin);
   infoChamps(btnAssasin);
  })

btnTank.addEventListener('click', (btnTank) => {
    champsContainer.innerHTML=''
    btnTank = 'Tank'
   loadData(btnTank);
   infoChamps(btnTank);
})

btnMage.addEventListener('click', (btnMage) => {
  champsContainer.innerHTML=''
  btnMage = 'Mage'
 loadData(btnMage);
 infoChamps(btnMage);
})
btnSupport.addEventListener('click', (btnSupport) => {
  champsContainer.innerHTML=''
  btnSupport='Support'
 loadData(btnSupport);
 infoChamps(btnSupport)
})
btnMarksman.addEventListener('click', (btnMarksman) => {
  champsContainer.innerHTML=''
  btnMarksman='Marksman'
 loadData(btnMarksman);
 infoChamps(btnMarksman);
})
btnAll.addEventListener('click', (btnAll) => {
  champsContainer.innerHTML=''
 loadData();
 infoChamps();
})