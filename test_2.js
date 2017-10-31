
let dots = []

let turner = 0

function setup(){
  createCanvas(500, 500)
  background(0)
}

function draw(){
  background("rgba(0,0,0,0.001)")

  rotatingRect()

}

let rotatingRect = () => {
  translate(width/2, height/2)
  rotate(turner * PI/100)

  let scale = turner / 100

  noFill()
  stroke(250)
  rect(-50*scale, -50*scale, 100*scale, 100*scale)

  turner++
}
