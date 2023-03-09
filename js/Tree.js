
let bcol;
let lcol;
function setup(){
  createCanvas(1000,600);
  angleMode(DEGREES)

  button1 = createButton('Save');
  button1.position(1000, 500);
  button1.size(100,30);
  button1.style("font-size", "21px");
  button1.mousePressed(takeimg);

  button2 = createButton('Redraw');
  button2.position(1000, 250);
  button2.size(100,30);
  button2.style("font-size", "21px");
  button2.mousePressed(Startdraw);

  noLoop()

  function changeColor() {
    let val = sel1.value();
    if (val == 'Brown') {
      bCol = color(102, 51, 0);
    } else if (val == 'White') {
      bCol = color(249, 246, 238);
    } else if (val == 'Red') {
      bCol = color(210, 4, 45);
    }
    let lval=sel2.value();
    if (lval == 'Pink') {
        lCol = color(255, 105, 180);
      } else if (lval == 'Green') {
        lCol = color(124, 252, 0);
      } else if (lval == 'Amber') {
        lCol = color(255, 194, 0 );
      }
  }



  sel1 = createSelect();
  sel1.size(100,30);
  sel1.style("font-size", "21px");
  sel1.position(1000, 200);
  sel1.option('Brown');
  sel1.option('White');
  sel1.option('Red');
  sel1.changed(changeColor);
  bCol = color(102, 51, 0);
  
  sel2 = createSelect();
  sel2.size(100,30);
  sel2.style("font-size", "21px");
  sel2.position(1000, 300);
  sel2.option('Green');
  sel2.option('Pink');
  sel2.option('Amber');
  sel2.changed(changeColor);
  lCol = color(124, 252, 0);
}

function takeimg(){
  save("Tree.jpg");
}

function draw(){
  background(51)
  translate(500, height)
  branch(110)
  
}

  function Startdraw(){
    redraw()
    
  }

function branch(len){
  push()
  if(len > 10){
  strokeWeight(map(len, 15, 45, 1, 15))
  stroke(bCol)
  line(0, 0, 0, -len)
  translate(0, -len)
  rotate(random(-20, -30, -10, -15, -5))
  branch(len*random(0.7, 0.9))
  rotate(random(50, 60, 20, 30, 5))
  branch(len*random(0.7, 0.9))
  }
  else{
    fill(lCol)
    noStroke()
    ellipse(0, 0, 5, 20)
  }
  pop()

}

