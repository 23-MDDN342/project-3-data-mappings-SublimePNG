var x=300;
var y=300;
var a=100;
var b=100;

function draw_one_frame(cur_frac) {
  
////////////////////////////////////  SETUP  //////////////////////////////////////////////////////
// draws a hexagon
function drawHexagon(x, y, radius) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let px = x + cos(angle) * radius;
    let py = y + sin(angle) * radius;
    vertex(px, py);
  }
  endShape(CLOSE);
}

// primary and secondary colurs of the noise
let primaryLight = color("#00f2ff")
let secondaryLight = color ("#FF0059")


///////////////////////////////////  PIXEL GRID  /////////////////////////////////////////////////

// pixel settings
let pixelSize =width / 10
let pixelSpacing =width / 100

//draws the grid of pixels
for(let x = 0; x < width / pixelSpacing; x++){
    for(let y = 0; y < height / pixelSpacing; y++){ 
 
  // noisy colour for background pixels
  noiseColour = getNoiseValue (pixelSpacing*x,pixelSpacing*y, cur_frac/2, "colour",0.2 ,1, height/2)
  noisyColour = lerpColor(primaryLight,secondaryLight,noiseColour)
  
  noStroke();
  fill(noisyColour)
  rect(pixelSpacing*x,pixelSpacing*y, pixelSize);
}
}

//////////////////////////////////  HEXAGON GRID  ////////////////////////////////////////////////
// hexgrid settings
let hexSize = width / 20
let hexSizeSmall = width / 23

//let hexSize = width * 70
//let hexSizeSmall = width * 62

let x_spacing = width / 6
let y_spacing = width / 20.7

//let x_spacing = 220
//let y_spacing = 64

// draws the grid of hexagons
for(let x = 0; x -1 < width / x_spacing; x++){
    for(let y = 0; y -1 < height / y_spacing; y++){
      let xPos = x_spacing * x;
      let yPos = y_spacing * y;
     // adds an offset to every second row
      if (y % 2 == 1) { 
        xPos += x_spacing / 2;
      }

      // noisycolour for hex edges
      noiseColour2 = getNoiseValue (xPos*x,yPos*y, cur_frac/2, "colour",0 ,1, height/2)
      noisyColour2 = lerpColor(primaryLight,secondaryLight,noiseColour)
      // smaller hex colour
      let hexColourSmall = color("#0f0f0f")

     // edge lighting on large hexagons
      fill(noisyColour2)
      stroke(0)
      drawHexagon(xPos, yPos, hexSize);

     // dark overlay for large hexagons to dim colour
      fill(15, 15, 15, 220)
      stroke(0)
      drawHexagon(xPos, yPos, hexSize);

    // smaller inner hexagons
      fill(hexColourSmall)
      noStroke()
      drawHexagon(xPos, yPos, hexSizeSmall);
    }
  }
}