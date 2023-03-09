let segments = [];

function addAll(arr, list) {
  for (let s of arr) {
    list.push(s);
  }
}

function setup() {
  createCanvas(1000, 800)
  button0 = createButton('Gen')
  button0.position(1000, 450)
  button0.size(100,30)
  button0.style("font-size", "21px")
  button0.mousePressed(Startgen)
  
  button1 = createButton('Save')
  button1.position(1000, 650)
  button1.size(100,30)
  button1.style("font-size", "21px")
  button1.mousePressed(takeimg)

 


  function changeColor() {
    let val = sel.value();
    if (val == 'White') {
      sCol = color(225, 225, 225);
    } else if (val == 'Blue') {
      sCol = color(100, 149, 237);
    } else if (val == 'Pink') {
      sCol = color(255, 105, 180);
    }
  }

  sel = createSelect();
  sel.size(100,30);
  sel.style("font-size", "21px");
  sel.position(1000, 250);
  sel.option('White');
  sel.option('Blue');
  sel.option('Pink');
  sel.changed(changeColor);
  sCol = color(255, 255, 255);
  
  let a = createVector(0, 100)
  let b = createVector(600, 100)
  let s1 = new Segment(a, b)

  let len = p5.Vector.dist(a, b)
  let h = len * sqrt(3) / 2
  let c = createVector(300, 100+h)
  
  let s2 = new Segment(b, c)
  let s3 = new Segment(c, a)
  segments.push(s1)
  segments.push(s2)
  segments.push(s3)

  
}


button1 = createButton('Save')
button1.position(1000, 500)
button1.size(100,30)
button1.style("font-size", "21px")


function Startgen() {
  let nextGeneration = []

  for (let s of segments) {
    let children = s.generate()
    addAll(children, nextGeneration)
  }
  segments = nextGeneration
}



function draw() {
  background(51)
  translate(200, 100)

  stroke(255)
  for (let s of segments) {
    s.show()
  }
}

function takeimg(){
  save("Snowflake.jpg")
}