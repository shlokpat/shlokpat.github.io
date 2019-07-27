const typedText = document.querySelector(".typed-text");

const textArray = ["Student", "Engineer", "Athlete", "Tech enthusiast", "Learner" ];
const typingSpeed = 175;
const erasingSpeed = 75;
const newTextWait = 1500;
let textArrayIndex = 0;
let charIndex = 0;


function type() {
	
	if (charIndex < textArray[textArrayIndex].length) { //if the word has not been fully typed
		typedText.textContent += textArray[textArrayIndex].charAt(charIndex); //add the character at the index to the word
		charIndex++; //increase the char index
		setTimeout(type, typingSpeed); //keep doing it till word typed out 
	}
	
	else { // if the word has been typed, 
		setTimeout(erase, newTextWait);
	}
}

function erase() {
	if (charIndex > 0) {
		typedText.textContent = textArray[textArrayIndex].substring(0,charIndex-1); 
		charIndex--;
		setTimeout(erase, erasingSpeed);
	}
	
	else {
		textArrayIndex++;
		if (textArrayIndex >= textArray.length) {
			textArrayIndex = 0;
		}
		setTimeout(type, typingSpeed);
	}
	
}



document.addEventListener("DOMContentLoaded", function() {
	type();
});