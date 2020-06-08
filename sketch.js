/*
Note:
  * Cannot move sliders to inside boid.js. Doing so will create x sliders were x is the number of boids.

*/

function setup() {
  cHeight = screen.height - 300, cWidth = screen.width;
  createCanvas(cWidth, cHeight);

  // boids
  boids = []
  numBoids = 100;
  for (let i = 0; i < numBoids; i++) {
    boids.push(new Boid(random(cWidth), random(cHeight), cWidth, cHeight))
  }

  //sliders
  sIface = new SliderInterface();

  //Buttons
  vision = false;
  Vision = createButton("Alignemnt/Cohesion Vision")
  Vision.position(10, 15);
  Vision.mousePressed(toggleVision)

  prox = false;
  Prox = createButton("prox")
  Prox.position(210, 15)
  Prox.mousePressed(toggleSeperation);

  alignVectorBool = false;
  alignVector = createButton("Vector")
  alignVector.position(10, 90)
  alignVector.mousePressed(toggleAlignementVector);

  cohesionVectorBool = false;
  cohesionVector = createButton("Vector")
  cohesionVector.position(110, 90)
  cohesionVector.mousePressed(toggleCohesionVector);

  seperationVectorBool = false;
  seperationVector = createButton("Vector")
  seperationVector.position(210, 90)
  seperationVector.mousePressed(toggleSeperationVector);

  // More info
  createElement("h1", "Boids Algorithm"),
    createP("Boids (short for bird-iod object) algorithm was developed by Craig Reynolds in 1986 to simulate group movements e.g. bird flight, schools of fish. Though the simulation may seem complex, Boids algorithm works on three simple rules.")

}

function toggleSeperationVector() {
  seperationVectorBool = !seperationVectorBool
}

function toggleCohesionVector() {
  cohesionVectorBool = !cohesionVectorBool
}

function toggleAlignementVector() {
  alignVectorBool = !alignVectorBool
}


function toggleVision() {
  vision = !vision;
}

function toggleSeperation() {
  prox = !prox;
}

function draw() {
  background(0);

  //interface update
  let alignmentVal = sIface.getSlider1()
  let cohesionVal = sIface.getSlider2()
  let seperationVal = sIface.getSlider3()
  sIface.showSliderNames()

  for (let i = 0; i < numBoids; i++) {
    boids[i].update(boids, alignmentVal, cohesionVal, seperationVal)
    boids[i].show(vision, prox, alignVectorBool, cohesionVectorBool, seperationVectorBool);
  }

}