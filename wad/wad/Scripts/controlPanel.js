
//The main script for the colour wheel
$(document).ready(function () {
    var f = $.farbtastic('#picker');
    f.linkTo(onColorChange);
});

//Dynamically gets the selected colour of the wheel. Changes styling of tags
function onColorChange(color) {
    var invertedColour = invertColor(color);
    $('#apply_colour').css({ 'background': color , 'color': invertedColour });

    //Update the hex value on textbox
    $('#hex_val').val(color);

    var rgb = hexToRgb(color);
    //Update the red value on textbox
    $('#red_val').val(rgb.r);
    //Update the green value on textbox
    $('#green_val').val(rgb.g);
    //Update the blue value on textbox
    $('#blue_val').val(rgb.b);
};

//Function to convert hexadecimal colour values to RGB values
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

//Function to invert a HEX colour. from StackOverflow.
function invertColor(hexColor) {
    var color = hexColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
}

//Functions for the checkboxes.Bold/Normal,Italics/Normal
function boldText(button) {
    // get the selected range
    var range = window.getSelection().getRangeAt(0);

    // create a new DOM node and set it's style property to bold
    var newNode = document.createElement('span');
    newNode.style.fontWeight = "bold";

    // surround the selection with the new span tag 
    range.surroundContents(newNode);
};

function italicText(button) {
    // get the selected range
    var range = window.getSelection().getRangeAt(0);

    // create a new DOM node and set it's style property to italic 
    var newNode = document.createElement('span');
    newNode.style.fontStyle = "italic";

    // surround the selection with the new span tag 
    range.surroundContents(newNode);
};

function colourText(textbox) {
    // get the selected range
    var range = window.getSelection().getRangeAt(0);

    // create a new DOM node and set it's style property to colour wheel's colour 
    var newNode = document.createElement('span');
    newNode.style.color = textbox.value;

    // surround the selection with the new span tag 
    range.surroundContents(newNode);
}