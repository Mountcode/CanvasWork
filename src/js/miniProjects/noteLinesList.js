import $ from 'jquery';
$(function(){})



const canvas = document.querySelector("canvas");
const CC = canvas.getContext("2d");

function clearCanvas (canvas){
    canvas.width = canvas.width;
}

canvas.width = 800;
canvas.height = 900;
let rowBlue = '#a9d0f5';
let rowRed = '#f05d5d';
let rowLightenBlue = '#efefef';

let horRowY = 50;
let skewRowX = 90;
let flipSkewRowX = 30;




function drawHorLines(){
    CC.beginPath()
    CC.lineWidth = 2;
    CC.strokeStyle = rowBlue;
    for(let i = 0; i < 20; i++){
        CC.moveTo(0,horRowY)
        CC.lineTo(800, horRowY)

        if(!(i%2)){
            horRowY = horRowY + 20
        }
        else{
            horRowY = horRowY + 40
        }
    }
    CC.stroke()
}

function drawSkewLines(){
    CC.beginPath()
    CC.lineWidth = 2;
    CC.strokeStyle = rowBlue;
    for(let i = 0; i < 20; i++){
        CC.moveTo(skewRowX, 0)
        CC.lineTo(skewRowX - 450, 900)
        skewRowX = skewRowX + 120
    }
    CC.stroke()
}

function drawFlipSkewLines(){
    CC.beginPath()
    CC.lineWidth = 2;
    CC.strokeStyle = rowLightenBlue;
    for(let i = 0; i < 20; i++){
        CC.moveTo(flipSkewRowX, 0)
        CC.lineTo(flipSkewRowX + 450, 900)
        flipSkewRowX = flipSkewRowX + 120
    }
    CC.stroke()
}

setTimeout(function(){
    CC.beginPath()
    CC.moveTo(750, 0)
    CC.lineTo(750, 900)
    CC.lineWidth = 2;
    CC.strokeStyle = rowRed;
    CC.stroke()
},20); 


drawHorLines()
drawSkewLines()
drawFlipSkewLines()




