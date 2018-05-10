$(document).ready(() => {

  let images = ["img/LIONS LOGO.jpg", "img/MGM LOGO.jpg", "img/REDWINGS LOGO.jpg", "img/TIGERS LOGO.jpg", "img/pistons logo.jpg", "img/little ceaser.png"];
  let imagesused = [];
  let twoImages = [];
  let rand;
  let imageOne;
  let imageTwo; 
  let currentCards = [];
  let card1;
  let card2;

  $(".card").flip();

  // start button
  $(".btn_start").on("click", () => {
    startGame(); // calling start game function
    $("#cover").fadeOut(); // fades the start game menu out
    // console.log('starting game fading out menu');
  });

  $("body").on('click', '.front', (e) => {
    let clickedCard = $(e.target).parent().siblings(".back").children().attr("src");
    // card1 = $(e.target).parent().parent();
    // card2 = $(e.target).parent().parent();
    // console.log(card1);
    currentCards.push($(e.target).parent().parent()); 
    console.log(currentCards); 
    // console.log(clickedCard);
    twoImages.push(clickedCard);
    compare();
  });

  function compare() {
    if (twoImages.length > 1) {
      imageOne = twoImages[0];
      imageTwo = twoImages[1]; 
      // console.log(twoImages); 
      // console.log(imageOne); 
      // console.log(imageTwo); 
      if (imageOne === imageTwo){
        console.log('you made a match');
        $(currentCards["0"]["0"]).hide();
        $(currentCards[1]["0"]).hide();
        // $(currentCards).hide(); 
        twoImages = []; 
        currentCards = []; 
 } else {
        console.log('No match found');
        twoImages = []; 
        currentCards = []; 
      }
    }
  }

  function startGame() {
    $('.back').each(function () {
      rand = Math.floor(Math.random() * images.length); // generates random number based on array length
      $(this).append('<img src="' + images[rand] + '">'); // adding image to back side of each div
      if (imagesused.indexOf(images[rand]) !== -1) { // searched images 'used' array if the index of this image is not used in the array it will splice the image out of the array
        images.splice(rand, 1);
      } else {
        imagesused.push(images[rand]); // if 
      }
      // console.log(images[rand]);
    });
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




})