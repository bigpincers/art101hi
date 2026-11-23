
(function(){
  var clickCount = 0;
  var backgroundImg = [
   'file:///c%3A/Users/fiona/OneDrive/Documentos/GitHub/ART101/exercises/images/forestbg.jpg',
   'file:///c%3A/Users/fiona/OneDrive/Documentos/GitHub/ART101/exercises/images/forestbg2.jpg'
  ];

  $("#div1").on('click', function(){
    var i = clickCount % backgroundImg.length;
    $('body').css('background-image', 'url(' + backgroundImg[i] + ')');
    clickCount++;
  })
  .click();
})();

(function(){
  var clickCount = 0;
  var backgroundImg = [
   'file:///c%3A/Users/fiona/OneDrive/Documentos/GitHub/ART101/exercises/images/beachbg.jpg',
   'file:///c%3A/Users/fiona/OneDrive/Documentos/GitHub/ART101/exercises/images/beachbg2.jpg'
  ];

  $("#div2").on('click', function(){
    var i = clickCount % backgroundImg.length;
    $('body').css('background-image', 'url(' + backgroundImg[i] + ')');
    clickCount++;
  })
  .click();
})();