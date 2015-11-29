
//The main script for the colour wheel
$(document).ready(function () {
    var f = $.farbtastic('#picker');
    f.linkTo(onColorChange);
    rangy.init();
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
    //create new class with arbitrary name
    var randomCssClass = "temp_" + (+new Date());

    //Apply class as a span to selected text
    boldApplier = rangy.createClassApplier(randomCssClass);
    boldApplier.toggleSelection();

    //Change css of new span tag
    $("." + randomCssClass).css({ "font-weight": "bold" }).removeClass(randomCssClass);

    //un-highlight text to show changes
    window.getSelection().removeAllRanges();
};

function italicText(button) {
    //create new class with arbitrary name
    var randomCssClass = "temp_" + (+new Date());

    //Apply class as a span to selected text
    italicApplier = rangy.createClassApplier(randomCssClass);
    italicApplier.toggleSelection();

    //Change css of new span tag, then remove the class so that style is inline
    $("." + randomCssClass).css({ "font-style": "italic" }).removeClass(randomCssClass);

    //un-highlight text to show changes
    window.getSelection().removeAllRanges();
};

function colourText(textbox) {
    //create new class with arbitrary name
    var randomCssClass = "temp_" + (+new Date());

    //Apply class as a span to selected text
    colourApplier = rangy.createClassApplier(randomCssClass);
    colourApplier.toggleSelection();

    //Change css of new span tag
    $("." + randomCssClass).css({ "color": textbox.value }).removeClass(randomCssClass);
    
    //un-highlight text to show changes
    window.getSelection().removeAllRanges();
}

function changeFont() {
    var div = document.getElementById("document-container");
    div.style.fontFamily = $("#font-select option:selected").text();
}
