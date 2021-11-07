const canvas = document.querySelector("canvas");
const CC = canvas.getContext("2d");

function clearCanvas (canvas){
    canvas.width = canvas.width;
}

canvas.width = 500;
canvas.height = 500;

function drawRect(x, y, widht, height, r){
    CC.beginPath()
    CC.moveTo(x + r, y)
    CC.lineTo(x + widht - r, y);
    CC.arc(
        x + widht - r,
        y + r,
        r,
        -Math.PI / 2, 0
    )
    CC.lineTo(x + widht, y + height - r)
    CC.arc(
        x + widht - r,
        y + height - r,
        r,
        0, Math.PI / 2
    );
    CC.lineTo(x + r, y + height);
    CC.arc(
        x + r,
        y + height - r,
        r,
        Math.PI / 2, Math.PI,
    );
    CC.lineTo(x, y + r);
    CC.arc(
        x + r,
        y + r,
        r,
        Math.PI, (Math.PI * 3) / 2
    );
    
    CC.closePath()
}

drawRect(100,100,300,300,40)
CC.stroke()
