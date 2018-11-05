//console.log('does it work ?')

var ivan = {
  health: 100,
  name: "Ivan Drago",
  hits: 0,
  currentItems: []
}
var items = {
  america: { name: 'USA', modifier: 4, description: 'Fight for freedom!' },
  apollo: { name: 'Apollo', modifier: 6, description: 'This commie bastard killed my friend!!' },
  adrienne: { name: 'Adrienne', modifier: 2, description: "You can't let her see you lose.." }
};
function hits() {
  setTimeout(bighitPic, 500)
  ivan.hits++;
  ivan.health -= addMods()
};
function slap() {
  hits();
  ivan.health--;
  update()
};
function bodyShot() {
  hits();
  ivan.health -= 5;
  update()
};
function uppercut() {
  hits();
  ivan.health -= 10;
  update()
};
function update() {
  document.getElementById("health").innerText = ivan.health.toString();
  document.getElementById("opponent").innerText = ivan.name.toString();
  document.getElementById("hits").innerText = ivan.hits.toString();
};
function rememberApollo() {
  ivan.currentItems.push(items.apollo);
  setTimeout(dyingPic, 1000)
};
function forAmerica() {
  ivan.currentItems.push(items.america);
  setTimeout(fistsPic, 1000)
};
function forAdrienne() {
  ivan.currentItems.push(items.adrienne);
  setTimeout(lovePic, 1000)
};
function addMods() {
  var modTotal = 0;
  for (let i = 0; i < ivan.currentItems.length; i++) {
    modTotal += ivan.currentItems[i].modifier;
  }
  return modTotal;
};

function bighitPic() {
  document.getElementById('bighit').style.display = 'block';
};
function lovePic() {
  document.getElementById('love').style.display = 'block';
};
function fistsPic() {
  document.getElementById('fists').style.display = 'block';
};
function dyingPic() {
  document.getElementById('dying').style.display = 'block';
}

var images = {
  ivanMain: "https://ewedit.files.wordpress.com/2015/11/rocky-iv.jpg",
  forAppollo: "http://images.tmz.com/2015/04/13/0413-rocky-4-movie-screenshot-3.jpg", //width="150px",
  forAdrianne: "http://gonet.cz/~tri65dnigalerie/porad/250/b/b8288f7434bb34db87a38e899329c201.jpg", //width= "150px",
  forAmerica: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3ssJOzfkDWAL9BR6BadqthySF-w17f21r94FLjyOb9qDJaXS", //width= "150px",
  win: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRS1VgXA6T2OPdwcSx2PPqL5CvZwvcL-x_MmlKmjoCHF1A3KSP",
  hit: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCqIh_QRU0XJ7pJXKk2BT0MZ1xLYYOxmemSjjZABiAXm9y_Xs", //width= "200px",
  background: "https://i.imgur.com/8K4dj5U.jpg",
  toyBackground: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrV_mKN2EM4nESLaQ-mnWtCDCEVp6MUNhnomocbQnV2S2BBWxRHg"
}
