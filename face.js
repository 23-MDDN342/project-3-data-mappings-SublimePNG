/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = false;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 6;

// other variables can be in here too
// here's some examples for colors used


const stroke_color = [95, 52, 8];

// example of a global function
// given a segment, this returns the average point [x, y]
function segment_average(segment) {
  let sum_x = 0;
  let sum_y = 0;
  let s_len = segment.length;
  for (let i=0; i<s_len; i++) {
    sum_x = sum_x + segment[i][0];
    sum_y = sum_y + segment[i][1];
  }
  return [sum_x / s_len , sum_y / s_len ];
}

// This where you define your own face object
function Face() {
  // these are state variables for a face
  this.outlineColour = [20]
  
  this.faceColour = 1 //5 skin tones 1-5
  this.browType = 1   //3 brow options 1-3
  this.browColour = 1 //5 brow colours 1-5
  this.lashesType = 1 //3 lashes types from 1-3
  this.pupilType = 1  //pupil or no pupil 1-2 
  this.teeth = 1      //2 teeth options 1-2

  /*
   * Draw the face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {


////////////////////////////////     FACE     /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if(this.faceColour == 1){
faceFill = color(247, 222, 206)
shadowFill = color(224, 170, 148)
}
else if(this.faceColour == 2){
  faceFill = color(243, 210, 162)
  shadowFill = color(210, 160, 119)
  }
  else if(this.faceColour == 3){
    faceFill = color(213, 171, 136)
    shadowFill = color(183, 139, 96)
    }
    else if(this.faceColour == 4){
      faceFill = color(175, 126, 87)
      shadowFill = color(144, 96, 62)
      }
      else if(this.faceColour == 5){
        faceFill = color(124, 83, 62)
        shadowFill = color(88, 53, 41)
        }

    fill(faceFill)
    strokeWeight(0.08)  
    stroke(this.outlineColour)  
    /// FACE SHAPE ///
    beginShape()    
      curveVertex(positions.chin[0][0]*1.1, positions.chin[0][1])
      curveVertex(positions.chin[1][0]*1.1, positions.chin[1][1])
      curveVertex(positions.chin[2][0]*1.1, positions.chin[2][1])
      curveVertex(positions.chin[3][0]*1.1, positions.chin[3][1])
      curveVertex(positions.chin[4][0]*1.1, positions.chin[4][1])
      curveVertex(positions.chin[5][0]*1.1, positions.chin[5][1])
      curveVertex(positions.chin[6][0]*1.1, positions.chin[6][1])
      curveVertex(positions.chin[7][0]*1.1, positions.chin[7][1])
      curveVertex(positions.chin[8][0]*1.1, positions.chin[8][1])
      curveVertex(positions.chin[9][0]*1.1, positions.chin[9][1])
      curveVertex(positions.chin[10][0]*1.1, positions.chin[10][1])
      curveVertex(positions.chin[11][0]*1.1, positions.chin[11][1])
      curveVertex(positions.chin[12][0]*1.1, positions.chin[12][1])
      curveVertex(positions.chin[13][0]*1.1, positions.chin[13][1])
      curveVertex(positions.chin[14][0]*1.1, positions.chin[14][1])
      curveVertex(positions.chin[15][0]*1.1, positions.chin[15][1])
      curveVertex(positions.chin[16][0]*1.1, positions.chin[16][1])
      curveVertex(positions.right_eyebrow[4][0]*1.1, positions.right_eyebrow[4][1])
      curveVertex(positions.right_eyebrow[3][0]*1.1, positions.right_eyebrow[3][1])
      curveVertex(positions.right_eyebrow[1][0]*1.1, positions.right_eyebrow[1][1])
      curveVertex(positions.right_eyebrow[0][0]*1.1, positions.right_eyebrow[0][1])
      curveVertex(positions.left_eyebrow[4][0]*1.1, positions.left_eyebrow[4][1])
      curveVertex(positions.left_eyebrow[3][0]*1.1, positions.left_eyebrow[3][1])
      curveVertex(positions.left_eyebrow[1][0]*1.1, positions.left_eyebrow[1][1])
      curveVertex(positions.left_eyebrow[0][0]*1.1, positions.left_eyebrow[0][1])
    endShape(CLOSE)

    /// BROW SHADOW ///
    fill(shadowFill)
    strokeWeight(0)
    stroke(shadowFill)
    //left
  beginShape()
    curveVertex(positions.left_eyebrow[1][0]*1.2,positions.left_eyebrow[1][1]*0.9)
    curveVertex(positions.left_eyebrow[4][0], positions.left_eyebrow[4][1])
    curveVertex(positions.left_eye[3][0]*0.8,positions.left_eye[3][1])
    curveVertex(positions.left_eye[0][0]*1.2,positions.left_eye[1][1])
  endShape(CLOSE)
//right
  beginShape()
    curveVertex(positions.right_eyebrow[3][0]*1.2,positions.right_eyebrow[3][1]*0.9)
    curveVertex(positions.right_eyebrow[0][0],positions.right_eyebrow[0][1])
    curveVertex(positions.right_eye[0][0]*0.8,positions.right_eye[0][1])
    curveVertex(positions.right_eye[3][0]*1.2,positions.right_eye[1][1])
  endShape(CLOSE)

///////////////////////////////////     NOSE     ///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
noStroke()
/// NOSE SHADOW SHAPE ///
beginShape()    
    curveVertex(positions.nose_tip[2][0], positions.nose_tip[2][1])
    curveVertex(positions.nose_tip[3][0], positions.nose_tip[3][1])
    curveVertex(positions.nose_tip[4][0]+0.2, positions.nose_tip[4][1]-0.1)
    curveVertex(positions.nose_bridge[1][0]+0.4, positions.nose_bridge[1][1])
    curveVertex(positions.nose_bridge[1][0]+0.2, positions.nose_bridge[1][1])   
    curveVertex(positions.nose_bridge[2][0]+0.3, positions.nose_bridge[2][1])
    curveVertex(positions.nose_bridge[3][0], positions.nose_bridge[3][1])  
  endShape(CLOSE)

////////////////////////////////////////   EYES   ////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let left_eye_pos = segment_average(positions.left_eye);
let right_eye_pos = segment_average(positions.right_eye);

noStroke()
fill(10)
  ellipse(right_eye_pos[0]*1.15,right_eye_pos[1]+0.15,(positions.right_eye[3][0]-positions.right_eye[0][0])*1.9,(positions.right_eye[4][1]-positions.right_eye[2][1])*4.2)
  ellipse(left_eye_pos[0]*1.15,left_eye_pos[1]+0.15,(positions.left_eye[0][0]-positions.left_eye[3][0])*1.9,(positions.left_eye[5][1]-positions.left_eye[1][1])*4.2)

/// LASHES SMALL ///
if (this.lashesType == 1){
beginShape()
 vertex(positions.left_eye[1][0],positions.left_eye[1][1])
 vertex(positions.left_eye[0][0]*1.5,positions.left_eye[0][1]+0.3)
 vertex(positions.left_eye[4][0]*1.5,positions.left_eye[4][1]+0.4)
endShape(CLOSE)
beginShape()
 vertex(positions.right_eye[2][0],positions.right_eye[2][1])
 vertex(positions.right_eye[3][0]*1.5,positions.right_eye[3][1]+0.3)
 vertex(positions.right_eye[5][0]*1.5,positions.right_eye[5][1]+0.4)
endShape(CLOSE)
  }
  /// LASHES BIG ///
else if (this.lashesType == 2){
beginShape()
 vertex(positions.left_eye[1][0],positions.left_eye[1][1])
 vertex(positions.left_eye[0][0]*1.7,positions.left_eye[0][1]+0.3)
 vertex(positions.left_eye[4][0]*1.5,positions.left_eye[4][1]+0.4)
endShape(CLOSE)
beginShape()
 vertex(positions.right_eye[2][0],positions.right_eye[2][1])
 vertex(positions.right_eye[3][0]*1.7,positions.right_eye[3][1]+0.3)
 vertex(positions.right_eye[5][0]*1.5,positions.right_eye[5][1]+0.4)
endShape(CLOSE)
  }
/// LASHES EXTRA ///
else if (this.lashesType == 3){
//big (again)
beginShape()
 vertex(positions.left_eye[1][0],positions.left_eye[1][1])
 vertex(positions.left_eye[0][0]*1.7,positions.left_eye[0][1]+0.3)
 vertex(positions.left_eye[4][0]*1.5,positions.left_eye[4][1]+0.4)
endShape(CLOSE)
beginShape()
 vertex(positions.right_eye[2][0],positions.right_eye[2][1])
 vertex(positions.right_eye[3][0]*1.7,positions.right_eye[3][1]+0.3)
 vertex(positions.right_eye[5][0]*1.5,positions.right_eye[5][1]+0.4)
endShape(CLOSE)
//extras
beginShape()
 vertex(positions.left_eye[0][0]-0.3,positions.left_eye[3][1]+0.45)
 vertex(positions.left_eye[0][0]-0.6,positions.left_eye[3][1]+0.65)
 vertex(positions.left_eye[0][0]-0.2,positions.left_eye[3][1]+0.6)
 vertex(positions.left_eye[5][0]-0.3,positions.left_eye[4][1]+0.7)
 vertex(positions.left_eye[5][0]-0.2,positions.left_eye[4][1]+0.5)
endShape(CLOSE)
beginShape()
 vertex(positions.right_eye[3][0]+0.3,positions.right_eye[3][1]+0.45)
 vertex(positions.right_eye[3][0]+0.6,positions.right_eye[3][1]+0.65)
 vertex(positions.right_eye[3][0]+0.2,positions.right_eye[3][1]+0.6)
 vertex(positions.right_eye[4][0]+0.3,positions.right_eye[4][1]+0.7)
 vertex(positions.right_eye[4][0]+0.2,positions.right_eye[4][1]+0.5)
endShape(CLOSE)
  }
 /// EYE SCLERA ///
 fill(35)
 ellipse(right_eye_pos[0]*1.1,right_eye_pos[1]+0.2,(positions.right_eye[3][0]-positions.right_eye[0][0])*1.8,(positions.right_eye[4][1]-positions.right_eye[2][1])*4)
  ellipse(left_eye_pos[0]*1.1,left_eye_pos[1]+0.2,(positions.left_eye[0][0]-positions.left_eye[3][0])*1.8,(positions.left_eye[5][1]-positions.left_eye[1][1])*4)
fill(50)
  ellipse(right_eye_pos[0]*1.1,right_eye_pos[1]+0.2,(positions.right_eye[3][0]-positions.right_eye[0][0])*1.6,(positions.right_eye[4][1]-positions.right_eye[2][1])*3.2)
  ellipse(left_eye_pos[0]*1.1,left_eye_pos[1]+0.2,(positions.left_eye[0][0]-positions.left_eye[3][0])*1.6,(positions.left_eye[5][1]-positions.left_eye[1][1])*3.2)

/// EYE IRIS ///
  fill(255)
    stroke(220)
    strokeWeight(0.04)
      ellipse(left_eye_pos[0]*1.1, left_eye_pos[1]+0.1, (positions.left_eye[0][0]-positions.left_eye[3][0]),(positions.left_eye[0][0]-positions.left_eye[3][0]));
      ellipse(right_eye_pos[0]*1.1, right_eye_pos[1]+0.1, (positions.left_eye[0][0]-positions.left_eye[3][0]),(positions.left_eye[0][0]-positions.left_eye[3][0]));
/// EYE PUPILS ///
if (this.pupilType == 2){
  fill(55)
  ellipse(left_eye_pos[0]*1.1, left_eye_pos[1]+0.1, (positions.left_eye[0][0]-positions.left_eye[3][0])*0.3,(positions.left_eye[0][0]-positions.left_eye[3][0])*0.5);
  ellipse(right_eye_pos[0]*1.1, right_eye_pos[1]+0.1, (positions.left_eye[0][0]-positions.left_eye[3][0])*0.3,(positions.left_eye[0][0]-positions.left_eye[3][0])*0.5); 
}

//////////////////////////////////////   BROWS   //////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (this.browColour == 1){
  browFill = color(42, 48, 59)
}
else if (this.browColour == 2){
  browFill = color(69, 57, 43)
}
else if (this.browColour == 3){
  browFill = color(107, 96, 72)
}
else if (this.browColour == 4){
  browFill = color(209, 199, 178)
}
else if (this.browColour == 5){
  browFill = color(94, 255, 0)
}
strokeWeight(0.65)
stroke(this.outlineColour)
noFill();
////// ROUND LONG //////
if (this.browType == 1){
//left OUTLINE
beginShape()
  curveVertex(positions.left_eyebrow[4][0],positions.left_eyebrow[4][1])
  curveVertex(positions.left_eyebrow[4][0],positions.left_eyebrow[4][1])
  curveVertex(positions.left_eyebrow[3][0],positions.left_eyebrow[3][1])
  curveVertex(positions.left_eyebrow[2][0],positions.left_eyebrow[2][1])
  curveVertex(positions.left_eyebrow[1][0],positions.left_eyebrow[1][1])
  curveVertex(positions.left_eyebrow[0][0],positions.left_eyebrow[0][1])
endShape()
//right OUTLINE
beginShape()
  curveVertex(positions.right_eyebrow[0][0],positions.right_eyebrow[0][1])
  curveVertex(positions.right_eyebrow[0][0],positions.right_eyebrow[0][1])
  curveVertex(positions.right_eyebrow[1][0],positions.right_eyebrow[1][1])
  curveVertex(positions.right_eyebrow[2][0],positions.right_eyebrow[2][1])
  curveVertex(positions.right_eyebrow[3][0],positions.right_eyebrow[3][1])
  curveVertex(positions.right_eyebrow[4][0],positions.right_eyebrow[4][1])
endShape()

strokeWeight(0.5)
stroke(browFill)
noFill();
//left
beginShape()
  curveVertex(positions.left_eyebrow[4][0],positions.left_eyebrow[4][1])
  curveVertex(positions.left_eyebrow[4][0],positions.left_eyebrow[4][1])
  curveVertex(positions.left_eyebrow[3][0],positions.left_eyebrow[3][1])
  curveVertex(positions.left_eyebrow[2][0],positions.left_eyebrow[2][1])
  curveVertex(positions.left_eyebrow[1][0],positions.left_eyebrow[1][1])
  curveVertex(positions.left_eyebrow[0][0],positions.left_eyebrow[0][1])
endShape()
//right
beginShape()
  curveVertex(positions.right_eyebrow[0][0],positions.right_eyebrow[0][1])
  curveVertex(positions.right_eyebrow[0][0],positions.right_eyebrow[0][1])
  curveVertex(positions.right_eyebrow[1][0],positions.right_eyebrow[1][1])
  curveVertex(positions.right_eyebrow[2][0],positions.right_eyebrow[2][1])
  curveVertex(positions.right_eyebrow[3][0],positions.right_eyebrow[3][1])
  curveVertex(positions.right_eyebrow[4][0],positions.right_eyebrow[4][1])
endShape()
}
///// ROUND SHORT /////
else if (this.browType == 2){
//left OUTLINE
beginShape()
curveVertex(positions.left_eyebrow[4][0],positions.left_eyebrow[4][1])
curveVertex(positions.left_eyebrow[4][0],positions.left_eyebrow[4][1])
curveVertex(positions.left_eyebrow[3][0],positions.left_eyebrow[3][1])
curveVertex(positions.left_eyebrow[2][0],positions.left_eyebrow[2][1])
endShape()
//right OUTLINE
beginShape()
curveVertex(positions.right_eyebrow[0][0],positions.right_eyebrow[0][1])
curveVertex(positions.right_eyebrow[0][0],positions.right_eyebrow[0][1])
curveVertex(positions.right_eyebrow[1][0],positions.right_eyebrow[1][1])
curveVertex(positions.right_eyebrow[2][0],positions.right_eyebrow[2][1])
endShape()

strokeWeight(0.5)
stroke(browFill)
noFill();
//left
beginShape()
curveVertex(positions.left_eyebrow[4][0],positions.left_eyebrow[4][1])
curveVertex(positions.left_eyebrow[4][0],positions.left_eyebrow[4][1])
curveVertex(positions.left_eyebrow[3][0],positions.left_eyebrow[3][1])
curveVertex(positions.left_eyebrow[2][0],positions.left_eyebrow[2][1])
endShape()
//right
beginShape()
curveVertex(positions.right_eyebrow[0][0],positions.right_eyebrow[0][1])
curveVertex(positions.right_eyebrow[0][0],positions.right_eyebrow[0][1])
curveVertex(positions.right_eyebrow[1][0],positions.right_eyebrow[1][1])
curveVertex(positions.right_eyebrow[2][0],positions.right_eyebrow[2][1])
endShape()
}
///// SHARP LONG /////
else if (this.browType == 3){
  fill(browFill)
  strokeWeight(0.5)
  stroke(this.outlineColour)
  //left outline
beginShape()  
  vertex(positions.left_eyebrow[4][0]*0.8,positions.left_eyebrow[4][1])
  vertex(positions.left_eyebrow[4][0]*0.8,positions.left_eyebrow[4][1]+0.1)
  vertex(positions.left_eyebrow[2][0],positions.left_eyebrow[2][1]+0.1)
  vertex(positions.left_eyebrow[1][0],positions.left_eyebrow[1][1]+0.1)
  vertex(positions.left_eyebrow[1][0],positions.left_eyebrow[1][1]-0.1)
  vertex(positions.left_eyebrow[2][0],positions.left_eyebrow[2][1]-0.1)
endShape(CLOSE)
//right outline
beginShape()
vertex(positions.right_eyebrow[0][0]*0.8,positions.right_eyebrow[0][1])
  vertex(positions.right_eyebrow[0][0]*0.8,positions.right_eyebrow[0][1]+0.1)
  vertex(positions.right_eyebrow[2][0],positions.right_eyebrow[2][1]+0.1)
  vertex(positions.right_eyebrow[3][0],positions.right_eyebrow[3][1]+0.1)
  vertex(positions.right_eyebrow[3][0],positions.right_eyebrow[3][1]-0.1)
  vertex(positions.right_eyebrow[2][0],positions.right_eyebrow[2][1]-0.1)
endShape(CLOSE)

fill(browFill)
strokeWeight(0.35)
stroke(browFill)
//left 
beginShape()  
vertex(positions.left_eyebrow[4][0]*0.8,positions.left_eyebrow[4][1])
vertex(positions.left_eyebrow[4][0]*0.8,positions.left_eyebrow[4][1]+0.1)
vertex(positions.left_eyebrow[2][0],positions.left_eyebrow[2][1]+0.1)
vertex(positions.left_eyebrow[1][0],positions.left_eyebrow[1][1]+0.1)
vertex(positions.left_eyebrow[1][0],positions.left_eyebrow[1][1]-0.1)
vertex(positions.left_eyebrow[2][0],positions.left_eyebrow[2][1]-0.1)
endShape(CLOSE)
//right 
beginShape()
vertex(positions.right_eyebrow[0][0]*0.8,positions.right_eyebrow[0][1])
vertex(positions.right_eyebrow[0][0]*0.8,positions.right_eyebrow[0][1]+0.1)
vertex(positions.right_eyebrow[2][0],positions.right_eyebrow[2][1]+0.1)
vertex(positions.right_eyebrow[3][0],positions.right_eyebrow[3][1]+0.1)
vertex(positions.right_eyebrow[3][0],positions.right_eyebrow[3][1]-0.1)
vertex(positions.right_eyebrow[2][0],positions.right_eyebrow[2][1]-0.1)
endShape(CLOSE)

}

/////////////////////////////////////  MOUTH  ////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///  MOUTH SHAPE ///
fill(1)
noStroke()
    beginShape()
    curveVertex(positions.top_lip[11][0], positions.top_lip[11][1]);
    curveVertex(positions.top_lip[10][0], positions.top_lip[10][1]);
    curveVertex(positions.top_lip[9][0], positions.top_lip[9][1]); 
    curveVertex(positions.top_lip[8][0], positions.top_lip[8][1]);
    curveVertex(positions.top_lip[7][0], positions.top_lip[7][1]);  
    curveVertex(positions.bottom_lip[1][0], positions.bottom_lip[1][1]*1);
    curveVertex(positions.bottom_lip[2][0], positions.bottom_lip[2][1]);
    curveVertex(positions.bottom_lip[3][0], positions.bottom_lip[3][1]);  
    curveVertex(positions.bottom_lip[4][0], positions.bottom_lip[4][1]);
    curveVertex(positions.bottom_lip[5][0], positions.bottom_lip[5][1]*1);
  endShape(CLOSE)

  /// UPPER LIP SHADOW ///
fill(shadowFill)
strokeWeight(0)
stroke(shadowFill)

beginShape()
    curveVertex(positions.top_lip[0][0]*1.1, positions.top_lip[0][1]*0.9);
    curveVertex(positions.top_lip[1][0]*1.1, positions.top_lip[1][1]*0.9);
    curveVertex(positions.top_lip[2][0]*1.1, positions.top_lip[2][1]*0.9); 
    curveVertex(positions.top_lip[4][0]*1.1, positions.top_lip[4][1]*0.9);  
    curveVertex(positions.top_lip[5][0]*1.1, positions.top_lip[5][1]*0.9);
    curveVertex(positions.top_lip[6][0]*1.1, positions.top_lip[6][1]*0.9);
    curveVertex(positions.top_lip[7][0], positions.top_lip[7][1]); 
    curveVertex(positions.top_lip[8][0]*1.1, positions.top_lip[8][1]*1.1);
    curveVertex(positions.top_lip[9][0]*1.1, positions.top_lip[9][1]*1.1);
    curveVertex(positions.top_lip[10][0]*1.1, positions.top_lip[10][1]*1.1);  
    curveVertex(positions.top_lip[11][0], positions.top_lip[11][1]);    
endShape(CLOSE)


fill(255)
noStroke() 
/// TEETH STRAIGHT ///
if (this.teeth == 1){
//Bottom Staight
beginShape() 
    curveVertex(positions.bottom_lip[1][0], positions.bottom_lip[1][1]+0.02);
    curveVertex(positions.bottom_lip[2][0], positions.bottom_lip[2][1]+0.02);
    curveVertex(positions.bottom_lip[3][0], positions.bottom_lip[3][1]+0.02);  
    curveVertex(positions.bottom_lip[4][0], positions.bottom_lip[4][1]+0.02);
    curveVertex(positions.bottom_lip[5][0], positions.bottom_lip[5][1]+0.02);
    curveVertex(positions.bottom_lip[5][0], positions.bottom_lip[5][1]-0.05);
    curveVertex(positions.bottom_lip[4][0], positions.bottom_lip[4][1]-0.1);
    curveVertex(positions.bottom_lip[2][0], positions.bottom_lip[2][1]-0.1);
    curveVertex(positions.bottom_lip[1][0], positions.bottom_lip[1][1]-0.05);
endShape(CLOSE)
//Top Straight
beginShape()
    curveVertex(positions.top_lip[11][0]*0.9, positions.top_lip[11][1]+0.15);   
    curveVertex(positions.top_lip[10][0], positions.top_lip[10][1]+0.2);
    curveVertex(positions.top_lip[9][0], positions.top_lip[9][1]+0.2); 
    curveVertex(positions.top_lip[8][0], positions.top_lip[8][1]+0.2);     
    curveVertex(positions.top_lip[7][0]*0.9, positions.top_lip[7][1]+0.15);
    curveVertex(positions.top_lip[7][0], positions.top_lip[7][1]-0.02);
    curveVertex(positions.top_lip[8][0], positions.top_lip[8][1]-0.02);
    curveVertex(positions.top_lip[9][0], positions.top_lip[9][1]-0.02); 
    curveVertex(positions.top_lip[10][0], positions.top_lip[10][1]-0.02);
    curveVertex(positions.top_lip[11][0], positions.top_lip[11][1]-0.02);
endShape(CLOSE)
}
/// TEETH SHARP ///
else if(this.teeth = 2){
//Bottom Sharp
beginShape() 
vertex(positions.bottom_lip[1][0], positions.bottom_lip[1][1]+0.02);
vertex(positions.bottom_lip[2][0], positions.bottom_lip[2][1]+0.02);
vertex(positions.bottom_lip[3][0], positions.bottom_lip[3][1]+0.02);  
vertex(positions.bottom_lip[4][0], positions.bottom_lip[4][1]+0.02);
vertex(positions.bottom_lip[5][0], positions.bottom_lip[5][1]+0.02);
vertex(positions.bottom_lip[5][0], positions.bottom_lip[5][1]-0.05);
vertex(positions.bottom_lip[5][0]+0.1, positions.bottom_lip[5][1]*1.08);
vertex(positions.bottom_lip[4][0], positions.bottom_lip[4][1]-0.1);
vertex(positions.bottom_lip[4][0]+0.1, positions.bottom_lip[4][1]*1.05);
vertex(positions.bottom_lip[3][0], positions.bottom_lip[3][1]-0.1);
vertex(positions.bottom_lip[2][0]-0.1, positions.bottom_lip[2][1]*1.05);
vertex(positions.bottom_lip[2][0], positions.bottom_lip[2][1]-0.1);
vertex(positions.bottom_lip[1][0]-0.1, positions.bottom_lip[1][1]*1.08);
vertex(positions.bottom_lip[1][0], positions.bottom_lip[1][1]-0.05);
endShape(CLOSE)
//Top Sharp
beginShape()
    vertex(positions.top_lip[11][0]*0.9, positions.top_lip[11][1]+0.15);
    vertex(positions.top_lip[1][0], positions.top_lip[1][1]+0.1);    
    vertex(positions.top_lip[10][0]-0.1, positions.top_lip[10][1]+0.2);
    vertex(positions.top_lip[2][0], positions.top_lip[2][1]+0.2);
    vertex(positions.top_lip[9][0], positions.top_lip[9][1]+0.2); 
    vertex(positions.top_lip[4][0], positions.top_lip[4][1]+0.2);
    vertex(positions.top_lip[8][0]+0.1, positions.top_lip[8][1]+0.2);
    vertex(positions.top_lip[5][0], positions.top_lip[5][1]+0.1);      
    vertex(positions.top_lip[7][0]*0.9, positions.top_lip[7][1]+0.15)
    vertex(positions.top_lip[7][0], positions.top_lip[7][1]-0.02);
    vertex(positions.top_lip[8][0], positions.top_lip[8][1]-0.02);
    vertex(positions.top_lip[9][0], positions.top_lip[9][1]-0.02); 
    vertex(positions.top_lip[10][0], positions.top_lip[10][1]-0.02);
    vertex(positions.top_lip[11][0], positions.top_lip[11][1]-0.02);
endShape(CLOSE)
}

/// LOWER LIP SHADOW ///
fill(shadowFill)
beginShape() 
    curveVertex(positions.bottom_lip[4][0], positions.bottom_lip[4][1]*1.2);
    curveVertex(positions.bottom_lip[3][0], positions.bottom_lip[3][1]*1.3);  
    curveVertex(positions.bottom_lip[2][0], positions.bottom_lip[2][1]*1.2);
endShape(CLOSE) 

  }
///////////////////////////////////////    SETTINGS     //////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// example of a function *inside* the face object.
  // this draws a segment, and do_loop will connect the ends if true
  

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {    
    this.faceColour = int(map(settings[0], 0, 100, 1, 5));
    this.browType = int(map(settings[1], 0, 100, 1, 3));
    this.browColour = int(map(settings[2], 0, 100, 1, 5));
    this.lashesType = int(map(settings[3], 0, 100, 1, 3));
    this.pupilType = int(map(settings[4], 0, 100, 1, 2));
    this.teeth = int(map(settings[5], 0, 100, 1, 2));  
    
    
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(6);
    settings[0] = map(this.faceColour, 1, 5, 0, 100);
    settings[1] = map(this.browType, 1, 3, 0, 100);
    settings[2] = map(this.browColour, 1, 5, 0, 100);
    settings[3] = map(this.lashesType, 1, 3, 0, 100);
    settings[4] = map(this.pupilType, 1, 2, 0, 100);
    settings[5] = map(this.teeth, 1, 2, 0, 100);  
    
  
    return settings;
  }
}
