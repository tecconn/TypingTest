/**
 * Determines the sizes of words with a specific font
 * @constructor
 */
function FontSizeUtility() {

}

/**
 * Gets the with of a word with a specific font size
 *
 * @param font {string} Font of the word
 * @param size {number|string} Size of the font
 * @param word {string} Word to get the length of
 * @return {[number,number]} The length and width of the word in an array
 */
FontSizeUtility.getPixelSize = function(font, size, word) {
    var element = document.createElement("span");
    element.innerText = word;
    element.style.fontFamily = font;
    element.style.fontSize = size;
    return [element.clientWidth, element.clientHeight];
};