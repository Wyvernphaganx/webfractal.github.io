var angle= 0;
var slider;
function setup(){
  createCanvas(1000,1000);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);

  button4 = createButton('Save');
  button4.position(1000, 500);
  button4.size(100,30);
  button4.style("font-size", "21px");
  button4.mousePressed(takeimg);

  
}

function takeimg(){
  save("Tree.jpg");
}


function draw(){
  background(22);
  angle= slider.value();
  var len=100;
  stroke(150);
  translate(500, height);
  branch(250);
  
}

function branch(len){
  line(0, 0, 0, -len );
  translate(0, -len);
  if(len > 10){
  strokeWeight(map(len, 10, 120, 1, 15))
  push();
  rotate(angle);
  branch(len*0.7);
  pop();
  push();
  rotate(-angle);
  branch(len*0.7);
  pop();
  }
  else{
    var r=80+ random(-20, 20)
    var g=80+ random(-20, 20)
    var b=80+ random(-20, 20)
    fill(r, g, b)
    noStroke
    ellipse(0, 0, 10)
  }

}

