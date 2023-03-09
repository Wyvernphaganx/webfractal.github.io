var minval = -0.5;
var maxval = 0.5;

var minSlider;
var maxSlider;

var frDiv;

function setup() {
  createCanvas(1000, 500);
  pixelDensity(1);

  minSlider = createSlider(-1.5, 0, -1.5, 0.01);
  maxSlider = createSlider(0, 10, 1.5, 0.01);

  frDiv = createDiv('');

  button4 = createButton('Save');
  button4.position(1000, 400);
  button4.size(100,30);
  button4.style("font-size", "21px");
  button4.mousePressed(takeimg);
}

function draw() {
  var maxiterations = 100;

  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {

      var a = map(x, 0, width, minSlider.value(), maxSlider.value());
      var b = map(y, 0, height, minSlider.value(), maxSlider.value());

      var ca = a;
      var cb = b;

      var n = 0;

      while (n < maxiterations) {
        var aa = a * a - b * b;
        var bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;
        if (a * a + b * b > 16) {
          break;
        }
        n++;
      }

      var bright = map(n, 0, maxiterations, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);

      if (n == maxiterations) {
        bright = 0;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();

  frDiv.html(floor(frameRate()));
}

function takeimg(){
  save("Mandelbrot set.jpg");
}