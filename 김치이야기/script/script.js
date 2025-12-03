function solution() {
	const menu = document.querySelectorAll(".smenu");

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
    
    // let idx = 0;
	// const slideItems = document.querySelectorAll(".slide");
	// const slidesContainer = document.querySelector(".slides");
	// const total = slideItems.length;

	// function applySlideTransform() {
	// 		for (let i = 0; i < total; i++) {
	// 			const item = slideItems[i];
	// 		    item.style.transform = `translateY(-${idx * 100}%)`;
	//             item.style.transition = 'transform 0.5s ease-in-out';
	// 		}
	// }

    // applySlideTransform();

	// function slidesWindow () {
	// 	idx = (idx + 1) % total;

	//     for (let i = 0; i < total; i++) {
	//         const item = slideItems[i];
	//         item.style.transform = `translateY(-${idx * 100}%)`;
	//         item.style.transition = 'transform 0.5s ease-in-out';
	//     }
	// }

	// setInterval(slidesWindow, 1000);
	
let idx = 0;

const slideItems = document.querySelectorAll(".slide");
const slidesContainer = document.querySelector(".slides");
const total = slideItems.length;

function applySlideTransform() {
    for (let i = 0; i < total; i++) {
        const item = slideItems[i];
        
        // absolute 배치인 경우 위치는 고정
        item.style.transform = 'translateY(0)';
        
        // 줌 효과 추가
        if (i === idx) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) scale(1)';
            item.style.zIndex = '10';
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(0) scale(0.8)';
            item.style.zIndex = '1';
        }
        
        item.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
    }
}

applySlideTransform();

function slidesWindow() {
    idx = (idx + 1) % total;
    applySlideTransform();
}

setInterval(slidesWindow, 1000);


	const modalOpenItem = document.querySelector(".notice-title");
    const modalItem = document.querySelector(".modal");
	modalOpenItem.addEventListener("click", function() {
		modalItem.style.display = "block";	
	})

	const cancelItem = document.querySelector(".modal-cancel");
	cancelItem.addEventListener("click", function() {
		modalItem.style.display = "none";
	})
}


document.addEventListener("DOMContentLoaded", solution)