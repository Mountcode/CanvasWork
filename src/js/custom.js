import $ from 'jquery';
$(function(){})


const canvas = document.querySelector("canvas");
const CC = canvas.getContext("2d");

function clearCanvas (canvas){
    canvas.width = canvas.width;
}

canvas.width = 500;
canvas.height = 500;

const colors = ["#efefef","#dddddd","#666666"]

const degreesToRadians = (n) => (n / 360) * 2 * Math.PI;
const rediansToderees = (n) => (n / Math.PI) * 180;

CC.beginPath()
CC.arc(
    150,150,
    100,
    degreesToRadians(-45),degreesToRadians(45)
)
CC.lineWidth = 10;
CC.strokeStyle = colors[1];
CC.fillStyle = colors[2]
CC.stroke()
CC.fill()
