$(document).ready(() => {

  let images = ["img/LIONS LOGO.jpg", "img/MGM LOGO.jpg", "img/REDWINGS LOGO.jpg", "img/TIGERS LOGO.jpg", "img/pistons logo.jpg", "img/little ceaser.png"];
  let imagesused = [];
  let twoImages = [];
  let rand;


  $(".card").flip();

  // start button
  $(".btn_start").on("click", () => {
    startGame(); // calling start game function
    $("#cover").fadeOut(); // fades the start game menu out
    // console.log('starting game fading out menu');
  });

  
  $("body").on('click', '.front', (e) => {
    let source = $(e.target).attr('src');
    let test = $(e.target).parent().siblings(".back").children().attr("src");
    console.log(test);
    twoImages.push(source);
    compare();
  });

  function compare() {
    if (twoImages.length > 1) {
      console.log("test");
      if (twoImages === twoImages) {
        console.log('you made a match');
      } else {
        console.log('No match found');
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