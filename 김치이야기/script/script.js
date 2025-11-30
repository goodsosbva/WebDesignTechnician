function solution() {
	const menu = document.querySelectorAll(".smenu");
	console.log('menu >> ', menu)

	menu.forEach(function(item) {
		item.addEventListener("mouseover", function() {
			const smenu = item.querySelector(".submenus");
			smenu.style.display = 'block';
		})

		item.addEventListener("mouseleave", function() {
			const smenu = item.querySelector(".submenus");
			smenu.style.display = "none";
		})
	})
}


document.addEventListener("DOMContentLoaded", solution)