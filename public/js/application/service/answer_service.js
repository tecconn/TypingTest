/**
 * Stores all the answers that the users provides
 *
 * @constructor
 */
function AnswerService() {
    this._charactersPressed = [];
    this._charactersPressedWithDeleted = [];
}

/**
 * Gets the total number of words that the user has provided as an answer
 *
 * @return {number} Total number of words
 */
AnswerService.prototype.getWordCount = function () {
    var words = this.getWords();
    if (this._charactersPressed.length === 0 || words.length === 0)
        return 0;
    else if (words[words.length - 1] === "" || words[words.length - 1] === " ")
        return words.length - 1;
    return this.getWords().length;
};

/**
 * Gets all the words in an array of strings
 *
 * @return {string[]} All answered words
 */
AnswerService.prototype.getWords = function () {
    return this._charactersPressed.join("").split(" ");
};

/**
 * Gets the number of correct answers that the user provided
 *
 * @param words {string} Words to compare against the answers the user provided
 * @return {Array} All the words that the user answered correctly
 */
AnswerService.prototype.getCorrectAnswers = function (words) {
    var answers = this.getWords();
    var correctAnswers = [];
    for (var i = 0; i < words.length && i < answers.length; i++) {
        if (answers[i] === words[i])
            correctAnswers.push(answers[i]);
    }
    return correctAnswers;
};

/**
 * Adds a character to the answer that the user provided
 *
 * @param character {string} Character to add to the answers
 */
AnswerService.prototype.addCharacter = function (character) {
    this._charactersPressed.push(character);
    this._charactersPressedWithDeleted.push(character);
};

/**
 * Removes the last character that the user provided as an answer
 */
AnswerService.prototype.backspacePressed = function () {
    this._charactersPressed.pop();
};