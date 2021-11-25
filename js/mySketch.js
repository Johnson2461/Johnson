function setup() {
	createCanvas(700, 700)
	
	strokeWeight(15);
	
	button = createButton('Toggle');
  button.mousePressed(togglebtn);
	button.position(width/2, 50);
}

toggle = true

r1 = 100
r2 = 40

function togglebtn() {
  toggle = !toggle
}

function draw() {
	background(255,255,125);

	eye(width/2 - 150, height/2 - 100);
	eye(width/2 + 150, height/2 - 100);

	line(width/2 - 150, height/2 + 200, width/2 + 150, height/2 + 200)
}

function eye(x,y){
	v1 = createVector(toggle ? width/2 : x, toggle ? height/2 : y)
	v2 = createVector(0, 0)

	v2.set(mouseX, mouseY)
	v2.sub(v1)
	v2.limit(r1 - r2);
	
	circle(x, y, r1 * 2);
	circle(x + v2.x, y + v2.y, r2 * 2);
} 