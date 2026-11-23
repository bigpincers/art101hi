// the clicker button progrm 

let count=0;
let colorsCount=0

let colors = ["orange","green", "brown", "yellow", "gold", "purple", "red", "pink"
 ];

let moods = ["fresh and happy", "keep pushing...", "so tired!"]

let buttonText=""


$("#needy-button").click( function(){ 
    // what to do when the button is clicked
   
    count = count +1;
   

    console.log(count);
    console.log(colors[colorsCount]);
   
 
    buttonText="FUCK YOU HAVE CLICKED ME " + count + " TIMES AND COLOR IS " +colors[colorsCount]; 

    $("#needy-button").html (buttonText);

    $("body").css("background-color", colors[colorsCount] );

    if (count >=16) { $("#needy-button").after("<p>kill</p>");} 
    
    else if (count >=13) { $("#needy-button").after("<p>my mood is...REALLY agitated</p>");}
    
    else if (count >= 5) { $("#needy-button").after("<p>my mood is...agitated</p>");}
   
    //if ( (count >=5) && (count < 13) ) { $("#needy-button").after("<p>my mood is...agitated</p>"); }

    // if (count >=13) { $("#needy-button").after("<p>my mood is...REALLY agitated</p>");}
    
    // if (count >=16) { $("#needy-button").after("<p>my mood is...REALLY agitated</p>");}

    // if we run out of colors start the first one anew

    colorsCount= colorsCount +1;
    
    if(colorsCount >= 8){colorsCount = 0;}
        
   
});



