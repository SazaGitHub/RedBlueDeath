function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const choices = ["red", "blue", "death"]; // death hurts
// const choice = choices[randomInteger(0, 2)];

function grab() {
	return choices[randomInteger(0, 2)];
}

function multigrab(times) {
	let grabs = [];
	for (let i = 0; i < times; i++) {
		grabs.push(grab());
	}
	return grabs;
}

while (true) {
	const answer = prompt("Grab your Grabs?");
	if (answer === "grab") {
		alert(grab());
	} else if (
		answer.startsWith("multigrab") &&
		answer.split(" ").length > 1 &&
		isNaN(Number(answer.split(" ")[1]))
	) {
		try {
			const grabs = multigrab(Number(answer.split(" ")[1]));
			let grabString = "";
			for (const i in grabs) {
				grabString += `${grabs[i]}\n`;
			}
			alert(grabString.trim());
		} catch {
			alert("You did it wrong,");
		}
	} else {
		alert("You did it wrong,");
	}
}
