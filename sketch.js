var teapot;

function preload(){
	teapot =loadModel('teapot.obj');	
}
function setup(){

	var canvas= createCanvas(windowWidth,windowHeight/2,WEBGL);

	canvas.parent('processingZone');

}
function draw(){

	background(255,0,193);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.02);
	scale(50);
	fill(0,184,255);
	stroke(0,255,249);
	model(teapot);
	fill(255,0,193);
	cone(40,70)

}