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
}
function hits() {
  ivan.hits++;
  ivan.health -= addMods()
}
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
  ivan.currentItems.push(items.apollo)
};
function forAmerica() {
  ivan.currentItems.push(items.america)
};
function forAdrienne() {
  ivan.currentItems.push(items.adrienne)
};
function addMods() {
  var modTotal = 0;
  for (let i = 0; i < ivan.currentItems.length; i++) {
    modTotal += ivan.currentItems[i].modifier;
  }
  return modTotal;
}
var images = {
  ivanMain: "https://ewedit.files.wordpress.com/2015/11/rocky-iv.jpg",
  forAppollo: "http://images.tmz.com/2015/04/13/0413-rocky-4-movie-screenshot-3.jpg",
  forAdrianne: "http://gonet.cz/~tri65dnigalerie/porad/250/b/b8288f7434bb34db87a38e899329c201.jpg",
  forAmerica: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxzP1v_2RCinjiRxm6uhUQ-kRIUMyc69SKkhrf6KrNT9RkpW493A",
  altForAbove: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3ssJOzfkDWAL9BR6BadqthySF-w17f21r94FLjyOb9qDJaXS",
  win: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRS1VgXA6T2OPdwcSx2PPqL5CvZwvcL-x_MmlKmjoCHF1A3KSP",
  hit: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCqIh_QRU0XJ7pJXKk2BT0MZ1xLYYOxmemSjjZABiAXm9y_Xs",
  background: "https://i.imgur.com/8K4dj5U.jpg"
}
