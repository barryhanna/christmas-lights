const bulbs = Array.from(document.getElementsByTagName('ellipse'));

bulbs.forEach(bulb => {
	bulb.style.fill = getRandomColour();
});

function getRandomColour() {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	return `rgb(${r},${g},${b})`;
}