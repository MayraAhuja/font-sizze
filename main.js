rightW=0;
leftW=0;
d=0;
difference=0;
function setup() {
    webcam=createCapture(video);
    webcam.size(500,350);
    webcam.postion(150,100);
    canvas=createCanvas(350,350);
    canvas.postion(700,100);
    ml=ml5.poseNet(webcam,modelLoaded);
    ml.on("pose",gotPoses)
}

function draw() {
    background("pink");
    textSize(d);
    fill("black");
    text("Mayra", 30 , 150);

}

function modelLoaded() {
    console.log("The model is loaded");
}

function gotPoses(arrayResults) {
    if (arrayResults.lenth>0) {
        console.log(arrayResults);
        rightW=arrayResults[0].pose.rightWrist.x;
        leftW=arrayResults[0].pose.leftWrist.x;
        difference=rightW-leftW;
        d=Math.floor(difference);
        
    }

}