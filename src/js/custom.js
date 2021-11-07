const canvas = document.querySelector("canvas");
const CC = canvas.getContext("2d");

function clearCanvas (canvas){
    canvas.width = canvas.width;
}

canvas.width = 500;
canvas.height = 500;

requestAnimationFrame(tick);


function tick(timestamp){
    requestAnimationFrame(tick)
    
    
}