let x = 0;
let y = 0;
let sel1, sel2;
let cr;
let fCol;
let mutx1;
let mutx2;
let muty1; 
let muty2;


function changeColor() {
  let val = sel1.value();
  if (val == 'red') {
    fCol = color(255, 0, 0);
  } else if (val == 'blue') {
    fCol = color(0, 0, 255);
  } else if (val == 'green') {
    fCol = color(0, 255, 0);
  }
}

function nextPoint() {
  let nextX;
  let nextY;
  let r = random(1);
  if (r < 0.01) {
    //1
    nextX = 0;
    nextY = 0.16 * y;
  } else if (r < 0.86) {
    //2
    nextX = 0.85 * x + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.6;
  } else if (r < 0.93) {
    //3
    nextX = 0.2 * x + -0.26 * y;
    nextY = 0.23 * x + 0.22 * y + 1.6;
  } else {
    //4
    nextX = -0.15 * x + 0.28 * y;
    nextY = 0.26 * x + 0.24 * y + 0.44;
  }
  x = nextX;
  y = nextY;
}


function drawPoint() {
  stroke(fCol);
  strokeWeight(2);
  let px = map(x, mutx1,  mutx2, 0, width);
  let py = map(y, muty1, muty2, height, 0);
  point(px, py);
}



function draw() {
  for (let i = 0; i < 10000; i++) {
    drawPoint();
    nextPoint();
  }
}


function setup() {
  const mycanvas =createCanvas(500,500);
  background(51);
  mycanvas.parent('#CanvasBox');
 

  sel1 = createSelect();
  sel1.size(100,30);
  sel1.style("font-size", "21px");
  sel1.position(600, 150);
  sel1.option('red');
  sel1.option('green');
  sel1.option('blue');
  sel1.changed(changeColor);
  fCol = color(255, 0, 0);

  sel2=createSelect();
  sel2.size(100,30);
  sel2.style("font-size", "21px");
  sel2.position(600,200);
  sel2.option('default');
  sel2.option('mutated');
  sel2.changed(mut);
  mutx1 = -2.1820
  mutx2 = 2.6558
  muty1 = 0
  muty2 = 9.9983
  

  button1 = createButton('Start');
  button1.position(600, 250);
  button1.size(100,30);
  button1.style("font-size", "21px");
  button1.mousePressed(Startdraw);


  button2 = createButton('Stop');
  button2.position(600, 300);
  button2.size(100,30);
  button2.style("font-size", "21px");
  button2.mousePressed(Stopdraw);
  

  button3 = createButton('Clear');
  button3.position(600, 350);
  button3.size(100,30);
  button3.style("font-size", "21px");
  button3.position(600,350);
  button3.mousePressed(ClearDrawing);

  button4 = createButton('Save');
  button4.position(600, 400);
  button4.size(100,30);
  button4.style("font-size", "21px");
  button4.mousePressed(takeimg);


 
}

function mut() {
  let val = sel2.value();
  console.log(val);
  if (val == 'mutated') {
    mutx1 = -4
    mutx2 = 3
    muty1 = 0
    muty2 = 9.9983
  }
  else{
    mutx1 = -2.1820
    mutx2 = 2.6558
    muty1 = 0
    muty2 = 9.9983
  }
  drawPoint();
}
  function Stopdraw() {
    noLoop();
    redraw();
  }
function Startdraw(){
  loop();
}

function ClearDrawing(){
  noLoop();
  clear(draw);
}

function takeimg(){
  save("Fern.jpg");
}


  