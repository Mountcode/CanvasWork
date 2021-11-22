const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

let windowWidth = window.innerWidth,
	widnowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = widnowHeight;

const triangle = {
	radius: 50,
	centerX: canvas.width / 2,
	centerY: canvas.height / 2,
	angle: 0,
	angleSpeed: Math.PI * 0.5,
};

function animation(params) {
    const { update, render, clear } = params;
    let pTimestamp = 0;

    requestAnimationFrame(tick);

    function tick(timestamp) {
        requestAnimationFrame(tick);
		
        const diff = timestamp - pTimestamp;
        const fps = 30000 / diff;
        const secondPart = diff / 30000;
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
	update({ secondPart }) {
		triangle.angle += triangle.angleSpeed * secondPart;
	},

	clear() {
		context.beginPath();
		context.rect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "#ddd";
		context.fill();
	},

	render() {
		const dAngle = (Math.PI / 3) * 4;

		context.beginPath();
		context.moveTo(
			triangle.centerX + triangle.radius * Math.cos(triangle.angle),
			triangle.centerY + triangle.radius * Math.sin(triangle.angle)
		);
		context.lineTo(
			triangle.centerX + triangle.radius * Math.cos(triangle.angle + dAngle),
			triangle.centerY + triangle.radius * Math.sin(triangle.angle + dAngle)
		);
		context.lineTo(
			triangle.centerX +
				triangle.radius * Math.cos(triangle.angle + 2 * dAngle),
			triangle.centerY + triangle.radius * Math.sin(triangle.angle + 2 * dAngle)
		);
		context.closePath();
		context.fillStyle = "#efefef";
		context.fill();
	},
});