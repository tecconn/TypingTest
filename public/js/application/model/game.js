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
    this.charactersPressed = [];
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
    this.canvasDrawService.drawTextCenter(this.challenge.getWords());
    $(window).on("keypress", this, this._inputCallback);
    $(window).on("keypress", this, this.onKeyPress);
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
    this.charactersPressed = [];
    $(window).unbind("keypress", this._inputCallback);
    $(window).unbind("keypress", this.onKeyPress);
    this.timeElapsed = new Date(0, 0, 0, 0, 0, 0, 0);
};

/**
 * Executed when the user presses a key
 *
 * @param {KeyboardEvent} event Keyboard event
 */
Game.prototype.onKeyPress = function(event) {
    console.log("OnKeyPress");
    event.data.charactersPressed.push(event.key);
    event.data.canvasDrawService.drawTextCenter(event.data.challenge.getWords(), event.data.charactersPressed.length);
};

/**
 * Contains a group of words that the user will enter for a challenge in the Typing Test game
 *
 * @constructor
 */
function Challenge() {

}

/**
 * Gets the words for a challenge
 *
 * @return {string} Challenge words
 */
Challenge.prototype.getWords = function() {
    return "Please try this example to asses how fast you can type. The difficulty of the following test will be " +
        "based on how well you perform this test.";
};