/**
 * TypingTest Game
 *
 * @param intervalCallback {function} Function to call on each interval when the game starts (usually to update the GUI)
 * @param canvas {HTMLCanvasElement} Canvas to draw on
 * @param inputCallback {function} Function to call when the user types (usually to update the GUI)
 * @constructor
 */
function Game(intervalCallback, canvas, inputCallback) {
    if (arguments.length < 1)
        throw new Error("Invalid number of arguments!");
    this.timeElapsed = new Date(0, 0, 0, 0, 0, 0, 0);
    this.user = new User();
    this.challenge = new Challenge();
    this.answerService = new AnswerService();
    this.wordOffset = 0;
    this.started = false;
    this._timer = null;
    this._intervalCallback = intervalCallback;
    this._inputCallback = inputCallback;
    this.canvasDrawService = new CanvasDrawService(canvas);
}

/**
 * Starts the timer for the game and starts recording user input
 */
Game.prototype.start = function() {
    var _this = this;
    if (!this.started) {
        _this.canvasDrawService.drawRectangleCenter(2, 2, this.canvasDrawService.getTextMeasurement(this.challenge.getWords()[0]).width, this.canvasDrawService.fontSize, "yellow");
        this.canvasDrawService.drawTextCenter(this.challenge.getWordsAsString());
        $(window).on("keypress", this, this.onKeyPress);
        $(window).on("keypress", this, this._inputCallback);
        this.started = true;
    }
    this._timer = setInterval(function() {
        _this.timeElapsed.setSeconds(_this.timeElapsed.getSeconds() + 1);
        _this._intervalCallback(_this.timeElapsed);
    }, 1000);
};

/**
 * Stops the timer for the game
 */
Game.prototype.stop = function() {
    window.clearInterval(this._timer);
    $(window).unbind("keypress", this._inputCallback);
};

/**
 * Resets the game
 */
Game.prototype.reset = function() {
    window.clearInterval(this._timer);
    this.canvasDrawService.clear();
    this.wordOffset = 0;
    this.started = false;
    this.answerService = new AnswerService();
    $(window).unbind("keypress", this.onKeyPress);
    $(window).unbind("keypress", this._inputCallback);
    this.timeElapsed = new Date(0, 0, 0, 0, 0, 0, 0);
};

/**
 * Executed when the user presses a key
 *
 * @param {KeyboardEvent} event Keyboard event
 */
Game.prototype.onKeyPress = function(event) {
    event.data.answerService.addCharacter(event.key);
    var _this = event.data;
    var words = _this.challenge.getWords();
    //TODO The Following if statement may belong in the canvas draw service
    _this.canvasDrawService.clear();
    if (event.key === " " && words.length > 0 && _this.answerService.getWordCount() <= _this.challenge.getWordCount())
        _this.wordOffset += _this.canvasDrawService.getTextMeasurement(words[_this.answerService.getWordCount() - 1] + " ").width;
    //TODO There is s bug in how the count of words from the answer service is calculated causing the highlighted text to be off
    _this.canvasDrawService.drawRectangleCenter(2, 2, _this.canvasDrawService.getTextMeasurement(words[_this.answerService.getWordCount() - 1]).width, _this.canvasDrawService.fontSize, "yellow");
    _this.canvasDrawService.drawTextCenter(_this.challenge.getWordsAsString(), _this.wordOffset);
};

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