class Iface{
  
  constructor(){
  //interface setup
  this.alignment = createSlider(0, 255, 117);
  this.alignment.position(10, 10);
  this.alignment.style('width', '80px');
  
    
    
  this.cohesion = createSlider(0, 255, 49);
  this.cohesion.position(100, 10);
  this.cohesion.style('width', '80px');
  
  this.seperation = createSlider(0, 255, 55);
  this.seperation.position(200, 10);
  this.seperation.style('width', '80px');
  }
  
  getSlider1(){
    // console.log("alignmentVal:" + this.alignment.value())
     return this.alignment.value(); 
  }
  
  getSlider2(){
    // console.log("cohesionVal:" + this.cohesion.value())
     return this.cohesion.value(); 
  }
  
  getSlider3(){
    // console.log("seperationVal:" + this.seperation.value())
     return this.seperation.value(); 
  }
  
  show(){
    
  }
}