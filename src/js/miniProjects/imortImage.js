const canvas = document.querySelector("canvas");
const CC = canvas.getContext("2d");

function clearCanvas (canvas){
    canvas.width = canvas.width;
}

canvas.width = 500;
canvas.height = 500;

main();

async function main(){
    const image = await loadImage("../img/last.png");
    CC.drawImage(image, 0, 0, canvas.width, canvas.height)
    console.log( {image} );
}

function loadImage(src) {
    return new Promise((resolve) =>{
        const image = new Image();
        image.src = src;
        image.onload = () => resolve(image);
    })
}


