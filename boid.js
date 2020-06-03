/* 
  Note: 
  * rules terminology governing boid motion are taken from Craig Reynolds website: http://www.red3d.com/cwr/boids/
  * Playing with the limit value in the 3 governing rules gives more fluid motion to the boids. Play with this.
  

  Note[1]: Alignment will try to stear birds tword the average acc of the flock given that it is in proximity. Setting showAlignmentVision to true will give the proximity in a light blue color.
*/

class Boid{

  constructor(x,y,cHeight,cWidth){
    this.cWidth = cWidth;
    this.cHeight = cHeight;
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().setMag(1)
    this.acc = p5.Vector.random2D().setMag(1)
    
    //Vision center: Note[1]
    this.showAlignmentVision = false // light blue
    this.alignmentVision = 100;
    this.showCohesionVision = false
    this.cohesionVision = 100;
  }
  
  // Steer towards the average heading of local flockmates 
  alignment(boids){
    //TODO: Figure out how to make vision only in front of the boid, not a 360 view
    if(this.showAlignmentVision){
      fill(135,206,235, 100)
      ellipse(this.pos.x, this.pos.y, this.alignmentVision,this.alignmentVision)
    }    
    
    let inProx = 0;
    let totalAcc = createVector(0,0)
    for(let i = 0; i < boids.length; i++){
      if(this != boids[i] && this.pos.dist(boids[i].pos) < this.alignmentVision){
        totalAcc.add(boids[i].acc); 
        inProx += 1;
      }         
    }
    if(inProx > 0){totalAcc.div(inProx);}
    // totalAcc.limit(2)
    return totalAcc
  }
  
  
  // Steer twords average flockmates
  cohesion(boids){
    
    if (this.showCohesionVision){
      fill(0,255,0, 100)
      ellipse(this.pos.x, this.pos.y, this.alignmentVision,this.alignmentVision)
    }
    
    let count = 0;
    let averagePos = createVector(0,0)
    for(let i = 0; i < boids.length; i++){
       if(this != boids[i] && this.pos.dist(boids[i].pos) < this.cohesionVision){
        averagePos.add(boids[i].pos) 
        count += 1;
       }
    }
    
    // check for div by 0
    if (count > 0){
      averagePos.div(count)
    }
    averagePos.sub(this.pos)
    // averagePos.limit(.5)
    return averagePos
  }

  
  seperation(boids){
    
    let totalF = createVector(0,0)
    let prox = 60;
    let count = 0;
    for(let i = 0; i < boids.length; i++){
      let d = this.pos.dist(boids[i].pos)
      if(this != boids[i] && d < prox){
        let temp = p5.Vector.sub(this.pos, boids[i].pos)
        temp.div(d*d*d)
        totalF.add(temp)
        count += 1
      }
    }
    if (count > 0){
     totalF.div(count) 
    }
    
      
    return totalF;
  }
  
  
  addForces(boids, alignmentVal, cohesionVal, seperationVal){
    let totalF = createVector(0,0);
    
    // Three forces governing Boid motion: Alignment, Seperation, Cohesion
    totalF.sub(this.alignment(boids).setMag(alignmentVal))
    totalF.sub(this.cohesion(boids).setMag(cohesionVal))
    totalF.sub(this.seperation(boids).setMag(seperationVal))

    
    // picked arbitarily, play with this value
    totalF.limit(100);
    // console.log(totalF)
    return totalF 
  }

  reappear(){
   if (this.pos.x > this.cWidth){ this.pos.x = 0; }  
   if (this.pos.y > this.cHeight){ this.pos.y = 0; }  
   if (this.pos.x < 0){ this.pos.x = this.cWidth; }  
   if (this.pos.y < 0){ this.pos.y = this.cHeight; }  
  }
  
  update(boids, alignmentVal, cohesionVal, seperationVal){
    this.acc = this.acc.sub(this.addForces(boids, alignmentVal, cohesionVal, seperationVal))
    this.acc.limit(100)
    this.vel.add(this.acc)
    this.vel.limit(3)
    
    this.pos.add(this.vel)

    this.reappear();
  }
  
  
  show(){
    
    //TODO: make boids smaller and vision smaller
    strokeWeight(2)
    stroke(200)
    fill(200,100)
    ellipse(this.pos.x, this.pos.y, 16, 16)
  }
  
  
}
