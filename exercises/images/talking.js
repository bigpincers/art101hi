let messagesA = ["How are u doing", "Sorry to hear that", "What color should it be then asshole",];
let counterA = 0
let messagesB = ["Terrible", "this background color SUCKS", "NOT THIS ONE",];
let counterB = 0

if(counterB > 0) $("answers")

$("#character-a").click(function () {

    if (counterA == counterB) {
        $("#chat").append("<p>jake: " + messagesA[counterA] + "</p>");

        counterA = counterA + 1;
    }

});

$("#character-b").click(function () {

    if (counterB < counterA) {

        $("#chat").append("<p>finn: " + messagesB[counterB] + "</p>");
        counterB = counterB + 1;

    }



});