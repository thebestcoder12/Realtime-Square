function setup() {
    video = createCapture(VIDEO)
    video.size(500, 500)
    canvas = createCanvas(500, 500)
    canvas.position(500, 100)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("model is loaded ");
}
leftWristX=0;
rightWristX=0;
difference=0;
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;

        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background("red")
    textSize(difference);
    fill('#FFE787');
    text('Sid', 50, 400);
}