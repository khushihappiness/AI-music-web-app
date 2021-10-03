function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

music1="";
music2="";

function preload()
{
    music1=loadSound("Music1.mp3");
    music2=loadSound("music2.mp3");
}

function draw()
{
    image(video, 0, 0, 300, 300)
}