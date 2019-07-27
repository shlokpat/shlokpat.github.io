function scrollAppear() {
	var paragraphText = document.querySelector(".scroll");
	var introPosition = paragraphText.getBoundingClientRect().top;
	var screenPosition = window.innerHeight;
	
	if(introPosition > screenPosition) {
		paragraphText.classList.add("scroll-appear");
	}
}

window.addEventListener("scroll", scrollAppear);