/**
 * Provides the ability to draw on a canvas
 *
 * @param canvas {HTMLCanvasElement} Canvas to draw on
 * @constructor
 */
function CanvasDrawService(canvas) {
    this.fontSize = 20;
    this.font = "Arial";
    this.fontColor = "black";
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.canvas.style.width = "100%";
    this.canvas.style.height = "100%";
    this.canvas.width  = canvas.offsetWidth;
    this.canvas.height = canvas.offsetHeight;
    this.context.font = this.fontSize + "px " + this.font;
}

/**
 * Measures the width and height of a text element given the font settings in the {@link CanvasDrawService}
 *
 * @param text {string} Text to measure
 * @return {TextMetrics}
 */
CanvasDrawService.prototype.getTextMeasurement = function (text) {
    return this.context.measureText(text);
};

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
    this.context.fillStyle = this.fontColor;
    this.context.fillText(text, (this.canvas.width / 2) - xOffset, (this.canvas.height / 2) - yOffset);
};

/**
 * Draws a Rectangle
 *
 * @param xOffset {number=} X-Axis offset of the rectangle from the center
 * @param yOffset {number=} Y-Axis offset of the rectangle from the center
 * @param width {number} Width of the rectangle in pixels
 * @param height {number} Height of the rectangle in pixels
 * @param color {string} Color of the rectangle
 */
CanvasDrawService.prototype.drawRectangleCenter = function (xOffset, yOffset, width, height, color) {
    this.context.fillStyle = color;
    this.context.fillRect(this.canvas.width / 2 - xOffset, (this.canvas.height / 2) - this.fontSize + yOffset, width, height);
};

/**
 * Clears the drawing surface of the canvas
 */
CanvasDrawService.prototype.clear = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};