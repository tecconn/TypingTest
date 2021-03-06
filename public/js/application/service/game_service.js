/**
 * TypingTest Game
 *
 * @param intervalCallback {function} Function to call on each interval when the game starts (usually to update the GUI)
 * @param canvas {HTMLCanvasElement} Canvas to draw on
 * @param inputCallback {function} Function to call when the user types (usually to update the GUI)
 * @param gameOverCallback {function=} Function to call when the game is over
 * @constructor
 */
function GameService(intervalCallback, canvas, inputCallback, gameOverCallback) {
    if (arguments.length < 1)
        throw new Error("Invalid number of arguments!");
    this.timeElapsed = new Date(0, 0, 0, 0, 0, 0, 0);
    this.user = new User();
    this.challenge = new Challenge();
    this.answerService = new AnswerService();
    this.wordOffset = 0;
    this._timer = null;
    this._intervalCallback = intervalCallback;
    this._inputCallback = inputCallback;
    this._gameOverCallback = gameOverCallback;
    this.canvasDrawService = new CanvasDrawService(canvas);
}

/**
 * Starts the timer for the game and starts recording user input
 */
GameService.prototype.start = function() {
    var _this = this;
    if (!this.answerService.startTime) {
        _this.canvasDrawService.drawRectangleCenter(2, 2, this.canvasDrawService.getTextMeasurement(this.challenge.getWords()[0]).width, this.canvasDrawService.fontSize, "yellow");
        this.canvasDrawService.drawTextCenter(this.challenge.getWordsAsString());
        this.answerService.startTime = new Date();
    }
    $(window).on("keypress", this, this.onKeyPress);
    $(window).on("keypress", this, this._inputCallback);
    this._timer = setInterval(function() {
        _this.timeElapsed.setSeconds(_this.timeElapsed.getSeconds() + 1);
        _this._intervalCallback(_this.timeElapsed);
    }, 1000);
};

/**
 * Stops the timer for the game
 */
GameService.prototype.stop = function() {
    this.answerService.endTime = new Date();
    window.clearInterval(this._timer);
    $(window).unbind("keypress", this.onKeyPress);
    $(window).unbind("keypress", this._inputCallback);
};

/**
 * Resets the game
 */
GameService.prototype.reset = function() {
    window.clearInterval(this._timer);
    this.canvasDrawService.clear();
    this.wordOffset = 0;
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
GameService.prototype.onKeyPress = function(event) {
    var _this = event.data;
    var words = _this.challenge.getWords();
    if (GameService.checkIfOver(_this.answerService, _this.challenge)) {
        _this.handleGameOver();
        return; //Exit; this game is over
    }
    if (event.key === " ") {
        if (_this.answerService.getCharacters().length === 0 || (_this.answerService.getCharacters().length > 0 && _this.answerService.getCharacters()[_this.answerService.getCharacters().length - 1] === " "))
            return; //Exit - The user cannot enter multiple spaces at any given time. Spaces are used to count words
    }
    event.data.answerService.addCharacter(event.key);
    //TODO The Following if statement may belong in the canvas draw service
    _this.canvasDrawService.clear();
    if (event.key === " " && words.length > 0 && _this.answerService.getWordCount() <= _this.challenge.getWordCount())
        _this.wordOffset += _this.canvasDrawService.getTextMeasurement(words[_this.answerService.getWordCount() - 1] + " ").width;
    //TODO There is s bug in how the count of words from the answer service is calculated causing the highlighted text to be off
    _this.canvasDrawService.drawRectangleCenter(2, 2, _this.canvasDrawService.getTextMeasurement(words[_this.answerService.getWordCount() - 1]).width, _this.canvasDrawService.fontSize, "yellow");
    _this.canvasDrawService.drawTextCenter(_this.challenge.getWordsAsString(), _this.wordOffset);
};

/**
 * Handles what to do when the game is over
 */
GameService.prototype.handleGameOver = function() {
    this.stop();
    var text = this.answerService.getWPM() + " WPM!";
    this.canvasDrawService.clear();
    this.canvasDrawService.drawTextCenter(text, this.canvasDrawService.getTextMeasurement(this.answerService.getWPM() + " WPM!").width / 2);
    this.notifyServerOfGame();
    if (this._gameOverCallback)
        this._gameOverCallback();
};

/**
 * Notifies the server that a game has been completed
 */
GameService.prototype.notifyServerOfGame = function() {
    var gameRepository = new GameRepository();
    var game = new Game();
    game.challenge_id = this.challenge.id || 1;
    game.answer = this.answerService.getWordsAsString();
    game.start_time = this.answerService.startTime;
    game.end_time = this.answerService.endTime;
    game.username = "william callahan"; //TODO add an input for the username
    $.when(gameRepository.save(game)).done(function() {
        $(document).trigger("gameSaved");
    });
};

/**
 * Checks if the game is over based on how many words the user has provided
 *
 * @param answerService {AnswerService} Answers from the user
 * @param challenge {Challenge} Challenge of the game
 * @return {boolean} Whether or not the game is over
 */
GameService.checkIfOver = function(answerService, challenge) {
    if (answerService.getCharacters().length === 0)
        return false; //No answers provided
    var lastAnswer = answerService.getWords()[answerService.getWords().length - 1];
    var lastWord = challenge.getWords()[challenge.getWords().length - 1];
    return answerService.getWords().length > challenge.getWords().length || (answerService.getWords().length === challenge.getWords().length && lastAnswer.length >= lastWord.length);
};
