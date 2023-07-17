let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

function w(x) {
    ctx.beginPath();
    ctx.moveTo(10, 10); 
    ctx.lineTo(10, 100);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(40, 55); 
    ctx.lineTo(40, 100);
    ctx.closePath();    
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(10, 100); 
    ctx.arcTo(70, 10, 120, 10, 25);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(40, 100); 
    ctx.arcTo(100, 10, 150, 10, 50);
    ctx.lineTo(x, 10);
    ctx.stroke();
}

function e(x) {
    ctx.beginPath();
    ctx.moveTo(115, 100);
    ctx.lineTo(55, 100);
    ctx.arcTo(110, 15, 160, 20, 50);
    ctx.lineTo(165, 18);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(84, 55);
    ctx.lineTo(81+(x/10), 55);
    ctx.stroke();
}

function l(x) {
    ctx.beginPath();
    ctx.moveTo(180, 17);
    ctx.lineTo(130, 100);
    ctx.lineTo(121+(x/10), 100);
    ctx.stroke();
}

function c() {
    ctx.beginPath();
    ctx.moveTo(230+x/10, 20);
        ctx.lineTo(195, 20);
    ctx.arcTo(170, 55, 185, 100, 20);
    ctx.lineTo(200, 100);
    ctx.lineTo(240-x/25, 100);
    ctx.stroke();
} 

function o(i) {
    ctx.beginPath();
    ctx.arc(230, 60, 25, 3.14, i*3.14);
    ctx.stroke();
}

function m(x) {
    ctx.beginPath();
    ctx.moveTo(340, 20); 
    ctx.lineTo(340, 110);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(310, 20); 
    ctx.lineTo(310, 65);
    ctx.closePath();    
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(340, 20); 
    ctx.arcTo(280, 110, 230, 110, 25);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(310, 20); 
    ctx.arcTo(240, 110, 190, 110, 50);
    ctx.lineTo(205-x/3, 110);
    ctx.stroke();
}

function e2() {
    ctx.moveTo(472+x/5, 20);
    ctx.lineTo(350, 20);
    ctx.lineTo(350, 108);
    ctx.lineTo(400, 108);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(350, 55);
    ctx.lineTo(400, 55);
    ctx.stroke();
}

function heart(x) {
    ctx.beginPath();
    ctx.moveTo(458, 25);
    ctx.lineTo(462+x/20, 25+x/20);
    ctx.stroke();
    ctx.moveTo(460, 25);
    ctx.arcTo(430, 55, 490, 108, 25);
    ctx.lineTo(433+(x/10), 55+(x/10));
    ctx.stroke();
    ctx.moveTo(522, 25);
    ctx.lineTo(518-x/20, 25+x/20);
    ctx.stroke();
    ctx.moveTo(520, 25);
    ctx.arcTo(550, 55, 490, 108, 25);
    ctx.lineTo(548-(x/10), 55+(x/10));
    ctx.stroke();
}

window.onload = function () { draw(); } 

x = 150;
i = 1;

function draw() { 
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    i += 0.05;
    x += 7.5;
    if (x == width-7.5) { ctx.strokeStyle = 'darkblue'; };
    ctx.strokeRect(0, 0, width, height);
    w(x);
    e(x);
    l(x);
    c();
    o(i);
    m(x);
    e2(x);
    heart(x);
    if (x >= width-10) {
        atEnd();
        return;
    }
    window.requestAnimationFrame(draw); 
}

function atEnd() {
    a = document.getElementById("a");
    a.style.display = "block";
    p.style.display = "block";
}
