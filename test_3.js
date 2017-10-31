let cornerSize = 50
let gap = 10
// let highlight = color(250, 100, 0)
let tOffset = {x: 20, y: 50}

let nodes = []
let w = 400
let h = 200

function setup(){
  createCanvas(900, 900)
  background(155)
}

function draw(){
  background(155)

  nodes.forEach(val => {
    node(val.x, val.y, val.w, val.h)
  })
}

function mouseClicked(){
  nodes.push({x: mouseX-w/2, y: mouseY-h/2, w: w, h: h})
}

function keyPressed(){
  if (keyCode === ENTER || keyCode === RETURN || key === " ")
    nodes.pop()
}

let node = (x, y, w, h) => {
  // vars
  // let cornerSize = 50
  // let gap = 10
  let highlight = color(250, 100, 0)
  let tx = x+tOffset.x
  let ty = y+tOffset.y

  strokeWeight(1)

  // main node
  beginShape()
  fill(250)
  stroke(highlight)
  vertex(x, y)
  vertex(x+w-cornerSize-gap, y)
  vertex(x+w, y+cornerSize+gap)
  vertex(x+w, y+h)
  vertex(x, y+h)
  endShape(CLOSE)

  // corner
  beginShape()
  fill(highlight)
  vertex(x+w-cornerSize, y)
  vertex(x+w, y)
  vertex(x+w, y+cornerSize)
  endShape(CLOSE)

  // headline underline
  strokeWeight(2)
  line(tx, ty+10, tx+200, ty+10)

  // headline
  noStroke()
  textSize(25)
  text("title of card", tx+5, ty)

}
