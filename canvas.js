const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// console.log(ctx);

// ctx.fillStyle = "blue";
// ctx.fillRect(150, 150, 100, 50);

// ctx.beginPath();
// ctx.moveTo(20, 20);
// ctx.lineTo(300, 20);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(100, 100, 40, 0, 2 * Math.PI);
// ctx.fill();

// ctx.font = "20px Roboto";
// ctx.fillText("Hello Canvas!", 50, 150)

// canvas.addEventListener("click", (event) => {
//     ctx.fillRect(event.clientX, event.clientY, 100, 100);
// })

let x = 0;
let speed = 2
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, 50, 50, 50);
    x += speed;
    if (x + 50 >= canvas.width || x <= 0) {
        speed = -speed;
    }

    requestAnimationFrame(animate);
}

animate();



