/*
Note: There was trouble moving buttons from sketch.js to iface.js. Buttons are currently in sketch.
*/

class Iface{
  
  constructor(){
    //slider positions
    this.ypos = 40;
    this.xpos = 10;
    
    //interface setup
    this.alignment = createSlider(0, 255, 117);
    this.alignment.position(this.xpos, this.ypos);
    this.alignment.style('width', '80px');

    this.cohesion = createSlider(0, 255, 49);
    this.cohesion.position(this.xpos+100, this.ypos);
    this.cohesion.style('width', '80px');

    this.seperation = createSlider(0, 255, 55);
    this.seperation.position(this.xpos+200, this.ypos);
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

}