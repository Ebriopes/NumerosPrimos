const input = document.getElementById('selPrime');
let coll = document.getElementsByClassName("collapsible");

input.addEventListener('keyup', event =>{
  if(event.keyCode === 13){
    event.preventDefault();
    document.getElementById('btn').click();
  }
});

collapse = (element) => {
	let content = element.nextElementSibling;
	if (content.style.maxHeight) {
		content.style.maxHeight = "";
	} else {
		content.style.maxHeight = content.scrollHeight + "px";
	}
}

setAmount = event => {
	let amount = +input.value;
	if(event.deltaY > 0) {
		input.value = amount--
	} else if(event.deltaY < 0){
		input.value = amount++
	}
}