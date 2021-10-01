/**
 * Framerate
 * @type number
 */
let fr = 30;
/**
 * Window Height
 * @type number
 */
const windowHeight = 500;
/**
 * Window width
 * @type number
 */
const windowWidth = 500;
/**
 * Primitive selected by the user
 */
let selectedPrimitive = null;
/**
 * Stroke width for freehand drawing
 * @type number
 */
let sw = 0;
let displayText = "hello";
let color = "#000000";
/**
 * Slider DOM element
 */
let slider;
let textEl;
let colorpicker;
window.onload = function () {
  slider = document.getElementById("strokeWidth");
  textEl = document.getElementById("displayText");
  colorpicker = document.getElementById("color");
};

let img;
/**
 * P5 Function to preload assets
 */
// function preload() {
//   img = loadImage("andyGoofy.gif");
// }

/**
 * Function that sets up the p5 environment
 * @returns void
 */
function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("mainCanvas");
  frameRate(fr);
} // end setup

/**
 * Function that blits to the canvas based on framerate
 * @returns void
 */
function draw() {
  selectedPrimitive = document.querySelector(
    'input[name="primitive"]:checked'
  ).value;
  if (mouseIsPressed) {
    strokeWeight(sw);
    fill(color);
    if (selectedPrimitive == "circle") {
      ellipse(mouseX, mouseY, 80, 80);
    } else if (selectedPrimitive == "square") {
      square(mouseX - 55 / 2, mouseY - 55 / 2, 55);
    } else if (selectedPrimitive == "freehand") {
      stroke(color);
      line(mouseX, mouseY, pmouseX, pmouseY);
    } else if (selectedPrimitive == "andy") {
      image(img, mouseX, mouseY);
    } else if (selectedPrimitive == "text") {
      text(displayText, mouseX, mouseY);
    }
  }
} //end draw

/**
 * Function called when the reset button is pressed. Clears the p5 canvas
 */
function onReset() {
  clear();
}

/**
 * Function called when the stroke width slider's value is changed.
 */
function onSliderChange() {
  sw = slider.value;
}

/**
 * Function called when text input is changed
 */
function onTextChange() {
  displayText = textEl.value;
}

/**
 * Function called when the color of the picker changes
 */
function onColorChange() {
  color = colorpicker.value;
}
