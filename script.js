// Start Button opening
// toggle startMenu div at startButton press

const startButtonToggle = () => {
	const startButtonSection = document.getElementById("startMenu");
	if (startButtonSection.style.display === "none") {
		startButtonSection.style.display = "block";
	} else {
		startButtonSection.style.display = "none";
	}
};

document
	.getElementById("startButton")
	.addEventListener("click", startButtonToggle, false);

// DESKTOP TIME

const currentTime = () => {
	const date = new Date();
	let hh = date.getHours();
	let mm = date.getMinutes();
	// let ss = date.getSeconds();
	let ampm = "AM";

	// settin if AM or PM
	if (hh > 12) {
		hh -= 12;
		ampm = "PM";
	}

	//adding 0 before single digit times
	mm = mm < 10 ? "0" + mm : mm;
	// ss = ss < 10 ? "0" + ss : ss;

	const clock = `${hh}:${mm} ${ampm}`;

	document.getElementById("desktopTime").innerHTML = clock;
	setTimeout(() => {
		currentTime();
	}, 1000);
};

currentTime();
