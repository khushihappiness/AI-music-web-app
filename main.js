function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet model is loaded');
}

music1="";
music2="";
leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;

function preload()
{
    music1=loadSound("Music1.mp3");
    music2=loadSound("music2.mp3");
}

function draw()
{
    image(video, 0, 0, 300, 300)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        console.log("Left wrist X = " + leftWristX + "Left wrist Y = " + leftWristY)

        righttWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("Right wrist X = " + rightWristX + "Right wrist Y = " + rightWristY)
    }
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);//predefined function to control the speed, within the range: 1 to 2.5
}