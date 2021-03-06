const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

let windowWidth = window.innerWidth,
	windowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;

const dot = {
	rand: 0,
	posY: windowWidth / 2,
	posX: windowHeight / 2,
	radius: 0,
	loopTime: 80,
	easeSpeed: 0.001,
	reverse: 0,
	backward: 0,
};


function animation(params) {
    const { update, render, clear } = params;
    let pTimestamp = 0;

    requestAnimationFrame(tick);
	
    function tick(timestamp) {
		if(timestamp < 8000){
			requestAnimationFrame(tick);
		}
		
        const diff = timestamp - pTimestamp;
        const fps = 35 / diff;
        const secondPart = diff / 6000;
        pTimestamp = timestamp;

		const params = {
            diff,
            timestamp,
            pTimestamp,
            fps,
            secondPart,
        };
		
        update(params);
        clear();
        render(params);
    }
}

animation({
	update({timestamp, secondPart }) {
		dot.rand = Math.random().toFixed(2);
		if(!dot.backward){
			dot.radius += 0.3
			dot.reverse++;
			console.log(dot.reverse);
			dot.backward = (dot.reverse > dot.loopTime) ? 1 : 0;
		}
		else if(dot.backward){
			dot.radius -= 0.3
			dot.reverse--;
			dot.backward = (dot.reverse == 1) ? 0 : 1;
		}
	},
	clear() {
		context.beginPath();
		context.rect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "#ddd";
		context.fill();
	},
	render() {
		context.beginPath();
		const degreesToRadians = (n) => (n / 360) * 2 * Math.PI;
		context.arc(
			dot.posY,dot.posX,
			dot.radius,
			degreesToRadians(0),degreesToRadians(360),
		)
		context.fillStyle = '#444';
		context.fill();
		context.closePath();
	},
});