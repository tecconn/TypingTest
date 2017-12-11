$(function() {

    function TypingTest() {
        this._started = false;
        var canvas = document.getElementById("typing-test");
        $("button#start").on("click", this, this.onStartClick);
        $("button#stop").on("click", this, this.onStopClick);
        $("button#reset").on("click", this, this.onResetClick);
        $.ajaxSetup({
            dataType: "json",
            url: baseUrl,
            async: true,
            error: function(jqXHR, textStatus, errorThrown) {
                console.error(errorThrown);
            }
        });
        this.gameService = new GameService(this.intervalCallback, canvas, this.inputCallback);
    }

    TypingTest.prototype.onStartClick = function(_this) {
        _this.data.gameService.start();
        _this.data._started = true;
        $("button#start").prop("disabled", true);
        $("button#stop").prop("disabled", false);
        $("button#reset").prop("disabled", true);
    };

    TypingTest.prototype.onStopClick = function(_this) {
        _this.data.gameService.stop();
        $("button#start").prop("disabled", false);
        $("button#stop").prop("disabled", true);
        $("button#reset").prop("disabled", !_this.data._started);
    };

    TypingTest.prototype.onResetClick = function(_this) {
        _this.data.gameService.reset();
        $("#time-elapsed").text("0:00");
        $("#words-typed").text("0 Words");
        $("#wpm").text("0 WPM");
        $("button#reset").prop("disabled", true);
    };

    TypingTest.prototype.intervalCallback = function(timeElapsed) {
        var seconds = timeElapsed.getSeconds();
        $("#time-elapsed").text(timeElapsed.getMinutes() + ":" + (seconds < 10 ? "0" + seconds : seconds));
    };

    TypingTest.prototype.inputCallback = function(event) {
        $("#words-typed").text(event.data.answerService.getWordCount() + " Words");
        $("#wpm").text(event.data.answerService.getWPM() + " WPM");

    };

    var typingTest = new TypingTest();

});
