/**
 * Provides the ability to draw on a canvas
 *
 * @param canvas {HTMLCanvasElement} Canvas to draw on
 * @constructor
 */
function CanvasDrawService(canvas) {
    this.fontSize = 20;
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.canvas.width  = canvas.offsetWidth;
    this.canvas.height = canvas.offsetHeight;
    this.context.font = this.fontSize + "px Arial";
}

/**
 * Draws text in the center of the canvas
 *
 * @param text {string} Text to draw on the canvas
 * @param xOffset {number=} X-Axis offset of the text from the center
 * @param yOffset {number=} Y-Axis offset of the text from the center
 */
CanvasDrawService.prototype.drawTextCenter = function (text, xOffset, yOffset) {
    if (!xOffset)
        xOffset = 0;
    if (!yOffset)
        yOffset = 0;
    this.clear();
    this.context.fillText(text, (this.canvas.width / 2) - (this.fontSize * xOffset), (this.canvas.height / 2) - (this.fontSize * yOffset));
};

/**
 * Clears the drawing surface of the canvas
 */
CanvasDrawService.prototype.clear = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};