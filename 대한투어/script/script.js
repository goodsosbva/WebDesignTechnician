function solution() {
	const slideItems = document.querySelectorAll(".slide");
	console.log(slideItems)

	slideItems.forEach(function (item, i) {
		item.style.opacity = i === 0 ? "1" : "0";
		item.style.transition = "3.5s";
	})

	let idx = 0;
	function slideHandler() {
		slideItems[idx].style.opacity = "0";
		slideItems[idx].querySelector("img").style.transform = "scale(0.9)";

		idx = (idx + 1) % 3;

		slideItems[idx].style.opacity = "1";
		slideItems[idx].querySelector("img").style.transform = "scale(1)";
	}

	setInterval(slideHandler, 1000)
}

document.addEventListener("DOMContentLoaded", solution);