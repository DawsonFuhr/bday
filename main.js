function setup()
{
    canvas = createCanvas(480, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    
    
}



function take_snapshot() {
    save('student_name.png');
}

function draw_shape()
{
    
  

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      
    

    var rand = getRandomInt(3);


    image(video, 0, 0, 640, 480);

    if (rand == 0) {
        circle(30, 30, 20);
        describe('white circle with black outline in mid of gray canvas');
    }
   
    if (rand == 1) {
        ellipse(56, 46, 55, 55);
        describe('white ellipse with black outline in middle of a gray canvas');
    }

if (rand == 2) {
    rect(30, 20, 55, 55);
    describe('white rect with black outline in mid-right of canvas');
}




}