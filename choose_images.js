
var chooseIMG = function(files){
  var chosenIMG = [[],[],[],[]];
  for (n = 0; n<4; n++) {
    for (i = 0; i < 12; i++) {
      var randomImage = files[Math.floor(Math.random() * files.length)];
      const index = files.indexOf(randomImage);

      //usuwanie wybranego obrazka z puli
      if (index > -1) {
        files.splice(index, 1);
      }
      chosenIMG[n].push(randomImage);
    }
  }
  return chosenIMG
}


module.exports = chooseIMG
