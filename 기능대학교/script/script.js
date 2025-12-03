function solution() {
	const meunItems = document.querySelectorAll(".menu");
	console.log('meunItems >> ', meunItems)

	meunItems.forEach(function(item) {
		item.addEventListener("mouseover", function() {
			const subMenu = item.querySelector(".sub-menu");
			subMenu.style.opacity = '1';
			subMenu.style.transform = 'translateY(0)';
		})

		item.addEventListener("mouseleave", function() {
			const subMenu = item.querySelector(".sub-menu");
			subMenu.style.opacity = '0';  
			subMenu.style.transform = 'translateY(-10px)'; 
		})
	})

	const slides = document.querySelectorAll(".slide");
	let idx = 0;

	slides[0].style.opacity = '1';  

	function slideZoom() {
		slides[idx].style.opacity = '0';  
		slides[idx].querySelector('img').style.transform = 'scale(0.8)'; 
		
		idx = (idx + 1) % slides.length;
		
		slides[idx].style.opacity = '1';  
		slides[idx].querySelector('img').style.transform = 'scale(1)'; 
	}

	setInterval(slideZoom, 3000);

	const modalTrigger = document.querySelector(".modal-trigger");
	const modalItem = document.querySelector(".modal");
	const buttonItem = document.querySelector(".modal-cancel");

	console.log(modalTrigger)
	console.log(modalItem)
	console.log(buttonItem)

	modalTrigger.addEventListener("click", () => {
		modalItem.style.opacity = "1";
	}) 

	buttonItem.addEventListener("click", () => {
		modalItem.style.opacity = "0";
	})
}


document.addEventListener("DOMContentLoaded", solution);