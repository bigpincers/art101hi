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

$('#staticColor').on('submit', changeBg);

function changeBg(e) {

  e.preventDefault();
  switch($('#bg-type').val()) {
    case 'happy':
      $('body').css('background-image', "url('http://127.0.0.1:2222/environ/happysnow.gif')");
      break;
    case 'afraid':
      $('body').css('background-image', "url('http://127.0.0.1:2222/environ/tealsnow.gif')");
      break;
    case 'sad':
      $('body').css('background-image', "url('http://127.0.0.1:2222/environ/sadsnow.gif')");
      break;
     default:
      $('body').css('background-image'), "url('http://127.0.0.1:2222/environ/redsnow.gif')";
      
  }
  
  $('#bg-type').val('');
 }


$("#the-horrible-creature").click(function () {

    count = count + 1;
    
    let message = "<p>hello.</p>"
        message = message + "<p>My name is " + mainEntity.name + ".</p>";
        message = message + "<p>I am a " + mainEntity.type + ".</p>";
        message = message + "<p>My current mood is " + mainEntity.mood + ".</p>";
        message = message + "<p> I love " + mainEntity.favoriteElement + ".</p>";

    $("#output").html(message);

    console.log(mainEntity.mood);

});