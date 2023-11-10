function setup() {
  createCanvas(600, 600);
  background("rgb(255,50,0)");
}

function draw() {
  fill ("black");
  stroke("blue");
  strokeWeight(5);
  
  if(mouseIsPressed) {
  rect(mouseX, mouseY, 20, 30);
  }
}
