var cancion = "";
var leftx = 0;
var lefty = 0;
var rightx = 0;
var righty = 0;
var puntuacionizquierda = 0;
var puntuacionderecha = 0;
function setup(){
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelocargado);
poseNet.on ('pose', gotPoses);
}
function draw(){
image(video,0,0,600,500);
fill('#009EFF');
stroke('#009EFF');
circle(rightx,righty,20);
if(righty>0&&righty<=100){
document.getElementById("velocidad").innerHTML = "velocidad = 0.5x";
cancion.rate(0.5);
}else if(righty>100&&righty<=200){
document.getElementById("velocidad").innerHTML = "velocidad = 1x";
cancion.rate(1);
}else if(righty>200&&righty<=300){
document.getElementById("velocidad").innerHTML="velociadad = 1.5x";
cancion.rate(1.5);
}else if(righty>300&&righty<=400){
document.getElementById("velocidad").innerHTML="velocidad = 2x";
cancion.rate(2);
}else if(righty>400&&right<=500){
document.getElementById("velocidad").innerHTML="velocidad = 2.5x";
cancion.rate(2.5)
}
if(puntuacionizquierda>0.2){
circle(leftx,lefty,20);
InNumberlefty = Number(lefty);
remover_decimales = floor(InNumberlefty)
volumen = remover_decimales/500;
document.getElementById("volumen").innerHTML = "volumen ="+volumen
cancion.setVolume(volumen);
}
}
function preload(){
cancion = loadSound("music.mp3");
}
function play(){
cancion.play();
cancion.setVolumeU(1);
cancion.rate(1);
}
function modelocargado(){
console.log("modelo ya cargado")
}
function gotPoses(results){
if(results.length>0){
console.log(results)
puntuacionizquierda = results[0].pose.keypoints[9].score;
leftx = results[0].pose.leftWrist.x;
lefty = results[0].pose.leftWrist.y;
rightx = results[0].pose.rightWrist.x;
righty = results[0].pose.rightWrist.y;
}
}