$(document).ready(() => {

  let images = ["img/LIONS LOGO.jpg", "img/MGM LOGO.jpg", "img/REDWINGS LOGO.jpg", "img/TIGERS LOGO.jpg", "img/pistons logo.jpg", "img/little ceaser.png"];
  let imagesused = [];
  let twoImages = [];
  let rand;
  let imageOne, imageTwo;
  let currentCards = [];
  let clickedCard;
  let score = 0;
  let container = $("#card_container");
 
  $(".win_game").hide();
  $(".card").flip();
  
  // start button
  $(".btn_start").on("click", () => {
    $(".card").show();
    startGame(); // calling start game function
    $("#cover").fadeOut();
    $(".win_game").fadeOut(); // fades the start game menu out
    // console.log('starting game fading out menu');
  });
  $('.play_again').on('click', () => {
    window.location.reload(true);
  })
  $(".reset").on("click", () => {
    // $("#card_container").detach(".card");
    currentCards = [];
    imagesused = [];
    // $(".card").hide();
    $("#cover").fadeIn();
    // $(container).html("");
    window.location.reload(true);
  });
 
  $(document).on('click', '.front', (e) => {
    clickedCard = $(e.target).parent().siblings(".back").children().attr("src");  // The actual image src w clicked (back side)
    currentCards.push($(e.target).parent().parent()); // The actual cards we clicked into an array
    twoImages.push(clickedCard);
    compare();
  });
 
  function flipCards() {
    $(currentCards["0"]["0"]).flip(false);
    $(currentCards[1]["0"]).flip(false);
    console.log(currentCards["0"]["0"]);
    console.log(currentCards[1]["0"]);
  }
 
  function compare() {
    if (twoImages.length === 2) {
      imageOne = twoImages[0];
      imageTwo = twoImages[1];
      if (imageOne === imageTwo){
        score += 100;
        $(".score").text(`Score: ${score}`);
        console.log(score);
        console.log('you made a match');
        $(currentCards["0"]["0"]).css('visibility', 'hidden');
        console.log(currentCards["0"]["0"]);
        $(currentCards[1]["0"]).css('visibility', 'hidden');
        twoImages = [];
        currentCards = [];
        if (score === 600) {
          $(".win_game").fadeIn();
          alert("Congrats you win!");
        }
      } else {
        setTimeout(flipCards(), 1000);
        twoImages = [];
        currentCards = [];
      }
    }
  }
 
  function startGame() {
    $(".back").each(function (index1, elem){
      $(elem).html("");
    });
    $('.back').each(function () {
      rand = Math.floor(Math.random() * images.length); // generates random number based on array length
      $(this).append('<img src="' + images[rand] + '">'); // adding image to back side of each div
      if (imagesused.indexOf(images[rand]) !== -1) { // searched images 'used' array if the index of this image is not used in the array it will splice the image out of the array
      images.splice(rand, 1);
    } else {
      imagesused.push(images[rand]); // if
    }
    currentCards = [];
    twoImages = [];
      // console.log(images[rand]);
    });
 
    $(".front").each(function() {
      $(this).append('<img src="img/grand-circus.jpg">');
    })
  }
 
 
  /*
  $(".back").each(function() {
    rand = Math.floor(Math.random() * images.length);
    $(this).append('<img src="' + images[rand] + '">');
    if (imagesused.search(images[rand]) != -1) images.splice(rand, 1);
    else (imagesused.push(images[rand]));
  });
  
  console.log('<img src="' + images[rand] + '">');
  // console.log(images[rand]);
  // console.log(images[rand]);
  */
 
 
  //Work on reset function, have both images show before turning back over
  // If match keep both face up not remove.
 
 });