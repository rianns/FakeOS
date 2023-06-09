// Start Button opening
// toggle startMenu div at startButton press

const startButtonSection = document.getElementById("startMenu");

const startButtonToggle = () => {
	if (startButtonSection.style.display === "none") {
		startButtonSection.style.display = "block";
	} else {
		startButtonSection.style.display = "none";
	}
};

document
	.getElementById("startButton")
	.addEventListener("click", startButtonToggle, false);

// Start Menu closing after an application is opened
const closeAfterAppOpen = (windowName) => {
	const appDiv = document.querySelector(windowName);
	const appDivComp = window.getComputedStyle(appDiv);
	if (appDivComp.display === "none") {
		appDiv.style.display = "block";
		startButtonSection.style.display = "none";
	}
};

// Closing applications with red button on top right of window
const closeApp = (openWin) => {
	const appDiv = document.querySelector(openWin);
	const appDivComp = window.getComputedStyle(appDiv);
	if (appDivComp.display !== "none") {
		appDiv.style.display = "none";
	}
};

// Maximise window

const maxWin = (maxWin) => {
	const appDiv = document.querySelector(maxWin);
	const appDivComp = window.getComputedStyle(appDiv);

	const ogWidth = appDivComp.width;
	const ogHeight = appDivComp.height;

	const testFullBrowser =
		appDivComp.top !== 0 &&
		appDivComp.right !== 0 &&
		appDivComp.bottom !== "35px" &&
		appDivComp.left !== 0;

	if (testFullBrowser) {
		appDiv.style.top = 0;
		appDiv.style.right = 0;
		appDiv.style.bottom = "35px";
		appDiv.style.left = 0;
	}

	document.onmouseup = () => {
		appDiv.style.width = ogWidth;
		appDiv.style.height = ogHeight;
		appDiv.style.top = "50px";
		appDiv.style.left = "440px";
	};
};

// Draggable windows
// selecting windows/area to drag
const dragWindows = (e) => {
	// set initial pos
	let currX = 0,
		currY = 0,
		nextX = 0,
		nextY = 0;

	// initial window position
	e.querySelector(".window-open").onmousedown = (el) => {
		el.preventDefault();
		nextX = el.clientX;
		nextY = el.clientY;

		document.onmouseup = atMoveStop;
		document.onmousemove = atMouseMove;
	};

	// window movement
	const atMouseMove = (el) => {
		el.preventDefault();

		currX = nextX - el.clientX;
		currY = nextY - el.clientY;

		nextX = el.clientX;
		nextY = el.clientY;

		e.style.top = e.offsetTop - currY + "px";
		e.style.left = e.offsetLeft - currX + "px";
	};

	// at movement end
	const atMoveStop = () => {
		document.onmouseup = null;
		document.onmousemove = null;
	};
};

// Window behaviour for each application
dragWindows(document.querySelector(".calculator"));
dragWindows(document.querySelector(".notepad"));
dragWindows(document.querySelector(".video-player"));

// Calculator

// Notepad

// Video Player

const videoSample = document.getElementById("videoSample");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");

playBtn.onclick = () => {
	videoSample.play();
};

pauseBtn.onclick = () => {
	videoSample.pause();
};

stopBtn.onclick = () => {
	videoSample.pause();
	videoSample.currentTime = 0;
};

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
