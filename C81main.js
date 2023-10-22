canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(400, 100, 16, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "green"
ctx.arc(200, 200, 99, 0, 2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", mymousedown)
function mymousedown(e) {
    console.log(e)
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.arc(mouse_x, mouse_y, 100, 0, 2 * Math.PI);
    ctx.stroke();
}

