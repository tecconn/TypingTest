$(function() {

    function TypingTest() {
        this._started = false;
        var canvas = document.getElementById("typing-test");
        $("button#start").on("click", this, this.onStartClick);
        $("button#stop").on("click", this, this.onStopClick);
        $("button#reset").on("click", this, this.onResetClick);

        this.game = new Game(this.intervalCallback, canvas, this.inputCallback);
    }

    TypingTest.prototype.onStartClick = function(_this) {
        _this.data.game.start();
        _this.data._started = true;
        $("button#start").prop("disabled", true);
        $("button#stop").prop("disabled", false);
        $("button#reset").prop("disabled", true);
    };

    TypingTest.prototype.onStopClick = function(_this) {
        _this.data.game.stop();
        $("button#start").prop("disabled", false);
        $("button#stop").prop("disabled", true);
        $("button#reset").prop("disabled", !_this.data._started);
    };

    TypingTest.prototype.onResetClick = function(_this) {
        _this.data.game.reset();
        $("#time-elapsed").text("0:00");
        $("#letters-typed").text("0 Letters");
        $("button#reset").prop("disabled", true);
    };

    TypingTest.prototype.intervalCallback = function(timeElapsed) {
        var seconds = timeElapsed.getSeconds();
        $("#time-elapsed").text(timeElapsed.getMinutes() + ":" + (seconds < 10 ? "0" + seconds : seconds));
    };

    TypingTest.prototype.inputCallback = function(event) {
        $("#letters-typed").text(event.data.charactersPressed.length + " Letters");
    };

    var typingTest = new TypingTest();

});
