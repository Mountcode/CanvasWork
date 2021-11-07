const canvas = document.querySelector("canvas");
const CC = canvas.getContext("2d");

function clearCanvas (canvas){
    canvas.width = canvas.width;
}

canvas.width = 500;
canvas.height = 500;

main();

async function main(){
    const image = await loadImage("/src/img/logo.png");
}

function loadImage(src) {
    return new Promise((resolve) =>{
        const image = new Image();
        image.src = src;
        image.onload = () => resolve(image);
    })
}


