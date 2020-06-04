/*
Note:
  * Cannot move sliders to inside boid.js. Doing so will create x sliders were x is the number of boids.
  * 

*/

function setup() {
  cHeight = 700, cWidth = 700;
  createCanvas(cHeight, cWidth);
  
  // boids
  boids = []
  numBoids = 100;
  for(let i = 0; i < numBoids; i++){
   boids.push(new Boid(random(cWidth), random(cHeight), cWidth, cHeight)) 
  }
  
  iface = new Iface();
  
  vision = false;
  button = createButton("Toggle vision")
  button.position(10,15);
  button.mousePressed(toggle)
  
}

function toggle(){
   vision = !vision; 
}

function draw() {
  background(0);

  //interface update
  let alignmentVal = iface.getSlider1()
  let cohesionVal = iface.getSlider2()
  let seperationVal = iface.getSlider3()
  // console.log(vision)
  
  
  
  for(let i = 0; i < numBoids; i++){
    boids[i].update(boids, alignmentVal, cohesionVal, seperationVal)
    boids[i].show(vision);
  }
  
}


