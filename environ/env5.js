let count = 0;
let environmentTitle = "The Weed-Induced Nightmare";

let environmentElements = ["darkness","mist", "grime", "cold ground", "dark tunnel", "red", "black", "gurgling"];

let mainEntity = {
    name: "The Horrible Creature",
    type: "thing of nightmares",
    mood: "so very hungry",
    isMoving: true,
    favoriteElement: environmentElements[4]
};

$("#stage").click(function (event) {
    // Convert page coordinates to coordinates inside this area.
    let x = event.pageX - $("#stage").offset().left;
    let y = event.pageY - $("#stage").offset().top;

    // Create a new mark for every click, keeping the earlier marks.
    let mark = $("<div class='mark'></div>");
    mark.css("left", x);
    mark.css("top", y);
    $("#stage").append(mark);
});


$('#staticColor').on('submit', changeBg);

function changeBg(e) {

  e.preventDefault();
  switch($('#bg-type').val()) {
    case 'happy':
      $('body').css('background-image', "url('file:///c%3A/Users/fiona/OneDrive/Documentos/GitHub/ART101/environ/images/happysnow.gif')");
      break;
    case 'afraid':
      $('body').css('background-image', "url('file:///c%3A/Users/fiona/OneDrive/Documentos/GitHub/ART101/environ/images/tealsnow.gif')");
      break;
    case 'sad':
      $('body').css('background-image', "url('file:///c%3A/Users/fiona/OneDrive/Documentos/GitHub/ART101/environ/images/sadsnow.gif')");
      break;
     default:
      $('body').css('background-image'), "url('file:///c%3A/Users/fiona/OneDrive/Documentos/GitHub/ART101/environ/images/redsnow.gif')";
      
  }
  
  $('#bg-type').val('');
};
