// hoisting
let velX = 1, velY = 1
let rectangles = []
let updateRectangles = []

class Rect {
  constructor(x, y, w, h, vx, vy){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.vx = vx
    this.vy = vy
  }
}

// p5 setup
function setup(){
  createCanvas(1000, 500)   // create a canvas with width and height
                            // note: this is done automatically, if omitted

  background(100)           // set a background color
}

function draw(){
  updateRectangles = []     // reset updateRectangles
  background(100)           // make last frame disappear

  // draw all rectangles
  rectangles.forEach(val => {
    // draw
    drawRect(val.x, val.y, val.w, val.h)
    // calc next location
    val.x += val.vx
    val.y += val.vy
    // accelerate
    val.vx *= 1.01
    val.vy *= 1.01
  })

  // remove rectangles, that are off screen
  rectangles.forEach((val, ind) => {
    // if the rect is still on canvas
    if(!checkBound(val.x, val.y, width, height))
      // put it into the temp storage
      updateRectangles.push(val)
  })
  // then reassign rectangles to be those, that still are on canvas
  rectangles = updateRectangles

  // add rectangles
  if(mouseIsPressed){
    let h = 10
    let w = 10
    let x = mouseX - w/2
    let y = mouseY - h/2
    let vx = (mouseX - pmouseX) / 7
    let vy = (mouseY - pmouseY) / 7
    addRect(x, y, w, h, vx, vy)
  }
}

// add a new rectangle to the stack
function addRect(x, y, w, h, vx, vy){
  rectangles.push(new Rect(x, y, w, h, vx, vy))
}

// check if rectangle is out of bounds
function checkBound(x, y, boundX, boundY){
  if( x > boundX || y > boundY )
    return true
}

// define a rectangle as a reusable component
function drawRect(x, y, w, h){
  fill(250, 150, 0)
  stroke(250, 100, 0)
  strokeWeight(5)
  rect(x, y, w, h, 5)
}
