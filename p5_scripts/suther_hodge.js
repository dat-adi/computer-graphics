function setup(){
    createCanvas(700, 700);
    background(51);
}

function draw(){
    fill('red');
    rect(100, 200, 200, 200);
    stroke(0);
    triangle(303, 404, 202, 101, 303, 101);
    stroke(0);
    rect(400, 200, 200, 200);
    stroke(0);
    line(503, 200, 600, 400);
    stroke(0);
    const m1 = (404-101)/(303-202);
    const m2 = 0;
    const x2 = 600;
    const x1 = 401;
    const y2 = 200;
    const y1 = 404;
    triangle((m1*x1-m2*x2)/(m1-m2),y1-m1*x1+x1*(m1*x1-m2*x2+y2-y1/m1-m2),600,m1*600+(y1- m1*x1),600,200);
}
