let itemA = {
    name: "mouse",
    description: "squeak..?",
    image: "mouse.png"
};

let itemB = {
    name: "knife",
    description: "WHO PUT THIS HERE",
    image: "knife.png"
};

// The parameter item receives whichever object we pass to this function.
function showItem(item) {
    // The dot reads a property; .text(...) displays its value.
    $("#detail-name").text(item.name);
    $("#detail-description").text(item.description);
    // .attr(...) changes the image's file path and alternative text.
    $("#detail-image").attr("src", item.image);
    $("#detail-image").attr("alt", item.name);
}

// .click(...) runs this function when #item-a is clicked.
$("#item-a").click(function () {
    showItem(itemA);
});

$("#item-b").click(function () {
    showItem(itemB);
});

// Display the first item's details when the page opens.
