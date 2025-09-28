const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// console.log(ctx);

// ctx.fillStyle = "blue";
// ctx.fillRect(150, 150, 100, 50);

// ctx.beginPath();
// ctx.moveTo(20, 20);
// ctx.lineTo(250, 20);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(100, 100, 40, 0, 2 * Math.PI);
// ctx.fill();

// ctx.font = "20px Roboto";
// ctx.fillText("Hello Canvas!", 50, 150)

// canvas.addEventListener("click", (event) => {
//     ctx.fillRect(event.clientX, event.clientY, 100, 100);
// })

// let x = 0;
// let speed = 2
// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillRect(x, 50, 50, 50);
//     x += speed;
//     if (x + 50 >= canvas.width || x <= 0) {
//         speed = -speed;
//     }

//     requestAnimationFrame(animate);
// }

// animate();




// Draw and animate a bouncing ball
// let y = 50;
// let Speed = 3;
// function animation() {
//     ctx.beginPath();
//     ctx.fillStyle = "silver"
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.arc(250, y, 50, 0, Math.PI * 2);
//     ctx.fill();
//     y += Speed;
//     if (y + 50 > canvas.height || y - 50 < 0) {
//         Speed = -Speed;
//     }
//     requestAnimationFrame(animation);
// }

// animation();


ctx.beginPath();
ctx.moveTo(100, 250);
ctx.lineTo(250, 100);
ctx.lineTo(400, 250);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(100, 250);
ctx.lineTo(400, 250);
ctx.lineTo(400, 450);
ctx.lineTo(100, 450);
ctx.lineTo(100, 250);
ctx.stroke();

ctx.fillStyle = "#654321";
ctx.fillRect(230, 320, 40, 130);

ctx.fillStyle = "white"
ctx.fillRect(110, 260, 70, 80);

ctx.fillStyle = "white"
ctx.fillRect(320, 260, 70, 80);

// ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.lineTo(250, 10);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(400, 200);
// ctx.lineTo(250, 10);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.lineTo(400, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(200, 100);
// ctx.lineTo(400, 200);
// ctx.stroke();











  


