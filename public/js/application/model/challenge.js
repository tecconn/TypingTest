/**
 * Contains a group of words that the user will enter for a challenge in the Typing Test game
 *
 * @constructor
 */
function Challenge() {
    this.level = 0;
}

/**
 * Gets the words of the challenge as a singe string
 *
 * @return {string} Words of the challenge
 */
Challenge.prototype.getWordsAsString = function() {
    return "Please try this example to asses how fast you can type. The difficulty of the following test will be " +
        "based on how well you perform this test.";
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