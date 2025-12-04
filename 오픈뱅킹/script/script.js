function solution() {
	let index = 0;
    const slides = document.querySelector(".slides");
    const total = document.querySelectorAll(".slide").length;
    console.log(slides, total)

    function moveSlide() {
        index = (index + 1) % 3;
        slides.style.transform = `translateX(-${index * 100}vw)`;
        slides.style.transition = "transform 0.8s ease";
    }

    setInterval(moveSlide, 3000);

    const noticeItem = document.querySelector(".notice-tab");
    const galleryItem = document.querySelector(".gallery-tab");

    console.log(noticeItem, galleryItem);

    noticeItem.addEventListener("click", function() {
    	const notice = document.querySelector(".notice");
    	const gallery = document.querySelector(".gallery");
    	
    	notice.style.opacity = "1";
    	gallery.style.opacity = "0";

    })

     galleryItem.addEventListener("click", function() {
    	const notice = document.querySelector(".notice");
    	const gallery = document.querySelector(".gallery");
    	
    	notice.style.opacity = "0";
    	gallery.style.opacity = "1";

    })
}

document.addEventListener("DOMContentLoaded", solution);