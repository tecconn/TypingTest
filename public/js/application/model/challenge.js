/**
 * Contains a group of words that the user will enter for a challenge in the Typing Test game
 *
 * @param id {number=}
 * @param text {string=}
 * @param level {number=}
 * @constructor
 */
function Challenge(id, text, level) {
    this.id = id;
    this.text = "Please try this example to asses how fast you can type. The difficulty of the following test will" +
        "be based on how well you perform this test.";
    this.level = 0;
}

/**
 * Gets the words of the challenge as a singe string
 *
 * @return {string} Words of the challenge
 */
Challenge.prototype.getWordsAsString = function() {
    return this.text;
};

/**
 * Gets the words for a challenge
 *
 * @return {Array.<string>} Challenge words
 */
Challenge.prototype.getWords = function() {
    return this.getWordsAsString().split(" ");
};

/**
 * Gets the number of words in the challenge
 *
 * @return {number} Number of words in the challenge
 */
Challenge.prototype.getWordCount = function () {
    return this.getWords().length;
};