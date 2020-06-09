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
  Prox = createButton("Proximity")
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

  // Write up
  createElement("h1", "Boids Algorithm")
  createP("Boids (short for bird-iod object) algorithm was developed by Craig Reynolds in 1986 to simulate group movements e.g. bird flight, schools of fish. Though the simulation may seem complex, Boids algorithm works on three simple rules:")
  createElement("li", "* Alignment: Fly with the pack")
  createElement("li", "* Cohesion: Gravatate twords the center of the pack")
  createElement("li", "* Seperation: Keep a distance from another boid")

  createElement('h2', "Boid Vision")
  createP("It is unreasonable for a single boid to consider all other boids when flying--in nature a bird or a fish would not see every other of its pack, just the ones closest to it. ")
  createElement("li", "* Toggling the Alignment/Cohesion button shows what other boids a boid considers when applying alignment and cohesion to its flight path.")
  createElement("li", "* Toggling the Proximity button will show the distance between two boids before then begin to be influenced by seperation.")
  createElement("li", "* Overlapping circles trigger influencing vectors")

  createElement('h2', "Motion")
  createP("In simulation, the path directing the boid is governed by vector arithmetic. All rules produce a vector, the governing vector is the subtraction of all vectors i.e. result = -AlignmentVector - CohesionVector - SeperationVector.")
  createElement("li", "* These Values can be manipulted by using the corresponding sliders")

  createElement('h2', "More info")
  createA("https://www.red3d.com/cwr/boids/", "For more information, check out Craig Reynolds website")

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