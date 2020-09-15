function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const choices = ["red", "blue", "death"]; // death hurts
// const choice = choices[randomInteger(0, 2)];

function grab() {
	return choices[randomInteger(0, 2)];
}

function multigrab(times) {
	for (let i = 0; i < times; i++) {
		console.log(grab());
	}
}

while (true) {
	if (prompt("Grab your Grabs") == "grab") {
		alert(grab());
	}
}
