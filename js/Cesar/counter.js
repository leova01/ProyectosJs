const stats = document.querySelector('.status-ex');
const text = document.getElementById('text');
const char = document.getElementById('char');
const words = document.getElementById('words');
const lines = document.getElementById('lines');
const symbols = document.getElementById('symbols');
function count() {
	if (text.value.length === 0) { // can be easily done using CSS, check CSS for that
		stats.style.display = "none";
		console.log("No hay nada escrito");
	}
	else {
		console.log("empezaste a escribir");
		stats.style.display = "block";
		char.innerHTML = text.value.length + " Caracteres" 
		words.innerHTML = text.value.trim().split(/\s+/).length + " Palabras"; 
		lines.innerHTML = text.value.split("\n").length + " Lineas"; 
		symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " Simbolos"
	}
}
text.addEventListener("input", count);
