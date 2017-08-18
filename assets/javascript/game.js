  var targetNumber = Math.floor(Math.random() * 100) + 20;
  $("#number-to-guess").text(targetNumber);
  var counter = 0;
  var wins = 0;
  var losses = 0;
  var images =["http://1ut4jnm5m10oxrax2wal0104-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/billy-crystal_496306-150x150.jpg","http://www.powerthoughtsmeditationclub.com/wp-content/uploads/2015/06/layers_of_crystal__purple__by_sara_satellite.jpg","http://www.treasuremountainmining.com/image/data/2015/06-15/Adam21/EB0615TRIN4.jpg","http://i.ebayimg.com/images/g/mNQAAOxy3zNSmfaV/s-l1600.jpg" ]

  function newGame() { 
    counter = 0;
    targetNumber = Math.floor(Math.random() * 100) + 20;
    $("#number-to-guess").text(targetNumber);
    $("#counter").text("Your score: " + 0);

}
  
  for (var i = 0; i < 4; i++) {
    var numberOptions = Math.floor(Math.random() * 9) + 1;
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");
    
    imageCrystal.attr("src", images[i]);
  
    imageCrystal.attr("data-crystalvalue", numberOptions);
   
    $("#crystals").append(imageCrystal);
  }


  $(".crystal-image").on("click", function() {
   
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
  
    counter += crystalValue;
    
    $("#counter").text("Your score: " + counter);
    if (counter === targetNumber) {
      wins++;
      newGame()
    }
    else if (counter >= targetNumber) {
      losses++
      newGame()
    }
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

  });