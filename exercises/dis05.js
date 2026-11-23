let kaya = {
    name: "kaya",
    age: 2
};

let outfits = ["witch", "scarf", "harness", "cone"];
function describeFit(outfit) {
   if outfit
    return outfit + ""
}



// TODO 1: write a function called describe that takes one parameter, outfit,
// and RETURNS a sentence about Kaya for that outfit:
//    "witch"    ->  kaya is casting evil spells on u...
//    "scarf"    ->  kaya is comfymaxxing<3
//    "harness"  ->  kaya is (pretending to be) ready for a walk!
//    "cone"     ->  kaya is in jail.
// (hint: use if / else if / else, use kaya.name instead of typing "kaya", and return the sentence)

function showKaya(outfit)

// TODO 2: write a function called showKaya that takes one parameter called outfit, and:
//    1. changes the photo:
//         $("#kaya-photo").attr("src", "images/kaya-" + outfit + ".jpg");
//    2. puts the sentence from describe(outfit) into #status
//    (hint: use .html(), and put describe(outfit) inside the ( ))



// TODO 3: write ONE click handler for ALL the buttons with the class "outfit"
// that calls showKaya with the id of the button that was clicked
// (hint: this.id)



// TODO 4: call showKaya once, outside of any click, so the page starts on "scarf"