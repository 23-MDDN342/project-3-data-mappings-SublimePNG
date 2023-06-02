/*
 * FaceMap class - holds all informaiton about one mapped
 * face and is able to draw itself.
 */  

// remove this or set to false to enable full program (load will be slower)
var DEBUG_MODE = true;

// this can be used to set the number of sliders to show
var NUM_SLIDERS = 3;

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
  // (your variables should be different!)
  this.detailColour = [204, 136, 17];
  this.mainColour = [51, 119, 153];
  this.num_eyes = 2;    // can be either 1 (cyclops) or 2 (two eyes)
  this.eye_shift = -1;   // range is -10 to 10
  this.mouth_size = 1;  // range is 0.5 to 8

  this.chinColour = [153, 153, 51]
  this.lipColour = [136, 68, 68]
  this.eyebrowColour = [119, 85, 17]

  /*
   * Draw the face with position lists that include:
   *    chin, right_eye, left_eye, right_eyebrow, left_eyebrow
   *    bottom_lip, top_lip, nose_tip, nose_bridge, 
   */  
  this.draw = function(positions) {


    //face shape base

    fill(225)
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

    //browshadow
    fill(180)
    strokeWeight(0.3)
    stroke(180)
  beginShape()
    curveVertex(positions.left_eyebrow[1][0],positions.left_eyebrow[1][1])
    curveVertex(positions.left_eyebrow[4][0],positions.left_eyebrow[4][1])
    curveVertex(positions.left_eye[3][0],positions.left_eye[3][1])
    curveVertex(positions.left_eye[0][0],positions.left_eye[1][1])
  endShape(CLOSE)

  beginShape()
    curveVertex(positions.right_eyebrow[3][0],positions.right_eyebrow[3][1])
    curveVertex(positions.right_eyebrow[0][0],positions.right_eyebrow[0][1])
    curveVertex(positions.right_eye[0][0],positions.right_eye[3][1])
    curveVertex(positions.right_eye[3][0],positions.right_eye[1][1])
  endShape(CLOSE)
///////////////////////////   NOSE   //////////////////////////////////////////////////////
fill(180)
noStroke()
//nose right
beginShape()    
    curveVertex(positions.nose_tip[2][0], positions.nose_tip[2][1])
    curveVertex(positions.nose_tip[3][0], positions.nose_tip[3][1])
    curveVertex(positions.nose_tip[4][0]+0.2, positions.nose_tip[4][1]-0.1)
    curveVertex(positions.nose_bridge[1][0]+0.4, positions.nose_bridge[1][1])
    curveVertex(positions.nose_bridge[1][0]+0.2, positions.nose_bridge[1][1])
   
    curveVertex(positions.nose_bridge[2][0]+0.3, positions.nose_bridge[2][1])
    curveVertex(positions.nose_bridge[3][0], positions.nose_bridge[3][1])
  
    endShape(CLOSE)





///////////////////////////   EYES   /////////////////////////////////////////////////////

let left_eye_pos = segment_average(positions.left_eye);
let right_eye_pos = segment_average(positions.right_eye);
this.slit_height = positions.right_eye[0][1]
this.slit_bottom = positions.right_eye[0][1]
this.eyeMiddleTop = segment_average([positions.left_eye[1], positions.left_eye[2]])
this.eyeMiddleDown = segment_average([positions.left_eye[4], positions.left_eye[5]])
this.eyeHeight = segment_average([positions.left_eye[4], positions.left_eye[2]])


fill(2)
strokeWeight(0.6)
stroke(2)
/* beginShape()  
    curveVertex(positions.left_eye[0][0], positions.left_eye[0][1])
    curveVertex(positions.left_eye[1][0], positions.left_eye[1][1])
    curveVertex(positions.left_eye[2][0], positions.left_eye[2][1])
    curveVertex(positions.left_eye[3][0], positions.left_eye[3][1])
    curveVertex(positions.left_eye[4][0], positions.left_eye[4][1])
    curveVertex(positions.left_eye[5][0], positions.left_eye[5][1])
  endShape(CLOSE)

  beginShape()   
   
    curveVertex(positions.right_eye[3][0], positions.right_eye[3][1]);
    curveVertex(positions.right_eye[4][0], positions.right_eye[4][1]);
    curveVertex(positions.right_eye[5][0], positions.right_eye[5][1]);  
    curveVertex(positions.right_eye[0][0], positions.right_eye[0][1]);
    curveVertex(positions.right_eye[1][0], positions.right_eye[1][1]);
    curveVertex(positions.right_eye[2][0], positions.right_eye[2][1]); 
  endShape(CLOSE) */


// lashes //
noStroke()
fill(10)
ellipse(right_eye_pos[0]*1.1,right_eye_pos[1]+0.15,(positions.right_eye[3][0]-positions.right_eye[0][0])*1.9,(positions.right_eye[4][1]-positions.right_eye[2][1])*4.2)
ellipse(left_eye_pos[0]*1.1,left_eye_pos[1]+0.15,(positions.left_eye[0][0]-positions.left_eye[3][0])*1.9,(positions.left_eye[5][1]-positions.left_eye[1][1])*4.2)

beginShape()
 vertex(positions.right_eye[2][0],positions.right_eye[2][1])
 vertex(positions.right_eye[3][0]*1.5,positions.right_eye[3][1]+0.3)
 vertex(positions.right_eye[5][0]*1.5,positions.right_eye[5][1]+0.4)
endShape(CLOSE)

beginShape()
 vertex(positions.left_eye[1][0],positions.left_eye[1][1])
 vertex(positions.left_eye[0][0]*1.5,positions.left_eye[0][1]+0.3)
 vertex(positions.left_eye[4][0]*1.5,positions.left_eye[4][1]+0.4)
endShape(CLOSE)

 // sclera //
fill(50)
ellipse(right_eye_pos[0]*1.1,right_eye_pos[1]+0.2,(positions.right_eye[3][0]-positions.right_eye[0][0])*1.8,(positions.right_eye[4][1]-positions.right_eye[2][1])*4)
ellipse(left_eye_pos[0]*1.1,left_eye_pos[1]+0.2,(positions.left_eye[0][0]-positions.left_eye[3][0])*1.8,(positions.left_eye[5][1]-positions.left_eye[1][1])*4)



/* beginShape()  
    curveVertex(positions.left_eye[0][0], positions.left_eye[0][1])
    vertex(positions.left_eye[1][0], positions.left_eye[1][1])
    vertex(positions.left_eye[2][0], positions.left_eye[2][1])
    vertex(positions.left_eye[3][0], positions.left_eye[3][1])
    vertex(positions.left_eye[4][0], positions.left_eye[4][1])
    vertex(positions.left_eye[5][0], positions.left_eye[5][1])
  endShape(CLOSE)

  beginShape()   
   
    curveVertex(positions.right_eye[3][0], positions.right_eye[3][1]);
    vertex(positions.right_eye[3][0], positions.right_eye[3][1]);
    vertex(positions.right_eye[4][0], positions.right_eye[4][1]);
    vertex(positions.right_eye[5][0], positions.right_eye[5][1]);  
    vertex(positions.right_eye[0][0], positions.right_eye[0][1]);
    vertex(positions.right_eye[1][0], positions.right_eye[1][1]);
    vertex(positions.right_eye[2][0], positions.right_eye[2][1]); 
  endShape(CLOSE)
 */


// iris //
  fill(255)
    stroke(220)
    strokeWeight(0.06)
         ellipse(left_eye_pos[0]*1.1, left_eye_pos[1]+0.1, (positions.left_eye[0][0]-positions.left_eye[3][0])*0.8,(positions.left_eye[0][0]-positions.left_eye[3][0])*0.8);
      ellipse(right_eye_pos[0]*1.1, right_eye_pos[1]+0.1, (positions.left_eye[0][0]-positions.left_eye[3][0])*0.8,(positions.left_eye[0][0]-positions.left_eye[3][0])*0.8);



////////////////////////////////   BROWS   /////////////////////////////////////////
strokeWeight(0.5)
stroke(1)
noFill();

//left
beginShape()
curveVertex(positions.left_eyebrow[4][0],positions.left_eyebrow[4][1])
curveVertex(positions.left_eyebrow[4][0],positions.left_eyebrow[4][1])
curveVertex(positions.left_eyebrow[3][0],positions.left_eyebrow[3][1])
curveVertex(positions.left_eyebrow[2][0],positions.left_eyebrow[2][1])
curveVertex(positions.left_eyebrow[1][0]*1,positions.left_eyebrow[1][1])
curveVertex(positions.left_eyebrow[0][0],positions.left_eyebrow[0][1])

endShape()
//right
beginShape()
curveVertex(positions.right_eyebrow[0][0]*1,positions.right_eyebrow[0][1])
curveVertex(positions.right_eyebrow[0][0]*1,positions.right_eyebrow[0][1])
curveVertex(positions.right_eyebrow[1][0],positions.right_eyebrow[1][1])
curveVertex(positions.right_eyebrow[2][0],positions.right_eyebrow[2][1])
curveVertex(positions.right_eyebrow[3][0],positions.right_eyebrow[3][1])
curveVertex(positions.right_eyebrow[4][0],positions.right_eyebrow[4][1])

endShape()








    ///////////////////////////// MOUTH  ////////////////////////////////////
fill(1)
noStroke()
    beginShape()
    //curveVertex(positions.top_lip[0][0]*1.2, positions.top_lip[0][1]);
    //curveVertex(positions.top_lip[1][0], positions.top_lip[1][1]);
    //curveVertex(positions.top_lip[2][0], positions.top_lip[2][1]);
    
    //curveVertex(positions.top_lip[4][0], positions.top_lip[4][1]);
    //curveVertex(positions.top_lip[5][0], positions.top_lip[5][1]);
    //curveVertex(positions.top_lip[6][0]*1.2, positions.top_lip[6][1]); 
    
   
    
    vertex(positions.top_lip[11][0], positions.top_lip[11][1]);
    vertex(positions.top_lip[10][0], positions.top_lip[10][1]);
    vertex(positions.top_lip[9][0], positions.top_lip[9][1]); 
     vertex(positions.top_lip[8][0], positions.top_lip[8][1]);
     vertex(positions.top_lip[7][0], positions.top_lip[7][1]);
    
   //endShape(CLOSE)


    //beginShape()
   
    curveVertex(positions.bottom_lip[1][0], positions.bottom_lip[1][1]*1);
    curveVertex(positions.bottom_lip[2][0], positions.bottom_lip[2][1]);
    curveVertex(positions.bottom_lip[3][0], positions.bottom_lip[3][1]);  
    curveVertex(positions.bottom_lip[4][0], positions.bottom_lip[4][1]);
    curveVertex(positions.bottom_lip[5][0], positions.bottom_lip[5][1]*1);
   
    //vertex(positions.bottom_lip[6][0], positions.bottom_lip[6][1]); 
    //vertex(positions.bottom_lip[7][0], positions.bottom_lip[7][1]);
  endShape(CLOSE)

  //teeth
fill(255)
  
//bottom
  beginShape() 
    curveVertex(positions.bottom_lip[1][0], positions.bottom_lip[1][1]+0.02);
    curveVertex(positions.bottom_lip[2][0], positions.bottom_lip[2][1]+0.02);
    curveVertex(positions.bottom_lip[3][0], positions.bottom_lip[3][1]+0.02);  
    curveVertex(positions.bottom_lip[4][0], positions.bottom_lip[4][1]+0.02);
    curveVertex(positions.bottom_lip[5][0], positions.bottom_lip[5][1]+0.02);
   //curveVertex(positions.top_lip[0][0]*1.2, positions.top_lip[0][1]);

    curveVertex(positions.bottom_lip[5][0], positions.bottom_lip[5][1]-0.05);
    curveVertex(positions.bottom_lip[4][0], positions.bottom_lip[4][1]-0.1);
    //curveVertex(positions.bottom_lip[3][0], positions.bottom_lip[3][1]-0.2);  
    curveVertex(positions.bottom_lip[2][0], positions.bottom_lip[2][1]-0.1);
    curveVertex(positions.bottom_lip[1][0], positions.bottom_lip[1][1]-0.05);
    //curveVertex(positions.top_lip[6][0]*1.2, positions.top_lip[6][1]); 
    endShape(CLOSE)

//top
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


//lip shadow
fill(180)
beginShape() 
    
    curveVertex(positions.bottom_lip[4][0], positions.bottom_lip[4][1]*1.2);
    curveVertex(positions.bottom_lip[3][0], positions.bottom_lip[3][1]*1.3);  
    curveVertex(positions.bottom_lip[2][0], positions.bottom_lip[2][1]*1.2);
    
  
    endShape(CLOSE)






      fill(255);
     // ellipse(left_eye_pos[0], left_eye_pos[1], 0.5, (positions.left_eye[2][1] - positions.left_eye[4][1]) * 7 + 0.9); //eyes
      //ellipse(right_eye_pos[0], right_eye_pos[1], 0.5, (positions.right_eye[2][1] - positions.right_eye[4][1]) * 7 + 0.9);
      fill(225);

fill(200)
      //ellipse(left_eye_pos[0], left_eye_pos[1], this.pupilsize, (positions.left_eye[2][1] - positions.left_eye[4][1]) * 7 + 0.9); //left pupil

      //ellipse(right_eye_pos[0], right_eye_pos[1], this.pupilsize, (positions.right_eye[2][1] - positions.right_eye[4][1]) * 7 + 0.9);// cat eyes




    

  /*   console.log()
    // head
    ellipseMode(CENTER);
    stroke(stroke_color);
    fill(this.mainColour);
    ellipse(segment_average(positions.chin)[0], 0, 3, 4);
    noStroke();


    // mouth
    fill(this.detailColour);
    ellipse(segment_average(positions.bottom_lip)[0], segment_average(positions.bottom_lip)[1], 1.36, 0.25 * this.mouth_size);

    // eyebrows
    fill( this.eyebrowColour);
    stroke( this.eyebrowColour);
    strokeWeight(0.08);
    this.draw_segment(positions.left_eyebrow);
    this.draw_segment(positions.right_eyebrow);

    // draw the chin segment using points
    fill(this.chinColour);
    stroke(this.chinColour);
    this.draw_segment(positions.chin);

    fill(100, 0, 100);
    stroke(100, 0, 100);
    this.draw_segment(positions.nose_bridge);
    this.draw_segment(positions.nose_tip);

    strokeWeight(0.03);

    fill(this.lipColour);
    stroke(this.lipColour);
    this.draw_segment(positions.top_lip);
    this.draw_segment(positions.bottom_lip);

    let left_eye_pos = segment_average(positions.left_eye);
    let right_eye_pos = segment_average(positions.right_eye);

    // eyes
    noStroke();
    let curEyeShift = 0.04 * this.eye_shift;
    if(this.num_eyes == 2) {
      fill(this.detailColour);
      ellipse(left_eye_pos[0], left_eye_pos[1], 0.5, 0.33);
      ellipse(right_eye_pos[0], right_eye_pos[1], 0.5, 0.33);

      // fill(this.mainColour);
      // ellipse(left_eye_pos[0] + curEyeShift, left_eye_pos[1], 0.18);
      // ellipse(right_eye_pos[0] + curEyeShift, right_eye_pos[1], 0.18);
    }
    else {
      let eyePosX = (left_eye_pos[0] + right_eye_pos[0]) / 2;
      let eyePosY = (left_eye_pos[1] + right_eye_pos[1]) / 2;

      fill(this.detailColour);
      ellipse(eyePosX, eyePosY, 0.45, 0.27);

      fill(this.mainColour);
      ellipse(eyePosX - 0.1 + curEyeShift, eyePosY, 0.18);
    }
   // fill(0)
   //ellipse(0,0, 0.5,0.5) center point
   //rect(-2,-2,4.5,4) sizing debug  */
  }

  // example of a function *inside* the face object.
  // this draws a segment, and do_loop will connect the ends if true
  this.draw_segment = function(segment, do_loop) {
    for(let i=0; i<segment.length; i++) {
        let px = segment[i][0];
        let py = segment[i][1];
        ellipse(px, py, 0.1);
        if(i < segment.length - 1) {
          let nx = segment[i+1][0];
          let ny = segment[i+1][1];
          line(px, py, nx, ny);
        }
        else if(do_loop) {
          let nx = segment[0][0];
          let ny = segment[0][1];
          line(px, py, nx, ny);
        }
    }
  };

  /* set internal properties based on list numbers 0-100 */
  this.setProperties = function(settings) {
    this.num_eyes = int(map(settings[0], 0, 100, 1, 2));
    this.eye_shift = map(settings[1], 0, 100, -2, 2);
    this.mouth_size = map(settings[2], 0, 100, 0.5, 8);
  }

  /* get internal properties as list of numbers 0-100 */
  this.getProperties = function() {
    let settings = new Array(3);
    settings[0] = map(this.num_eyes, 1, 2, 0, 100);
    settings[1] = map(this.eye_shift, -2, 2, 0, 100);
    settings[2] = map(this.mouth_size, 0.5, 8, 0, 100);
    return settings;
  }
}
