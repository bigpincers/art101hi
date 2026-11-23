let count = 0;
let buttonMan = {
    name: "the button man",
    species: "immortal code",
    favoriteFood: "tears",
    moods: ["happy", "sad", "confused", "bloodlust"]
}; 

$("#the-button-man").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonMan.moods[arrayPosition]

    let message = "<p>You have clicked the button man " + count + " times.</p>";
    message = message + "<p>My name is " + buttonMan.name + ".</p>";
    message = message + "<p>I am an " + buttonMan.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonMan.favoriteFood + ".</p>";
    message = message + "<p>My current mood is " + currentMood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood)

});
