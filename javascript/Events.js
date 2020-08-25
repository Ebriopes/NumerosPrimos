const input = document.getElementById('selPrime');
console.info(typeof(input.value))
input.addEventListener('keyup', event =>{
  if(event.keyCode === 13){
    event.preventDefault();
    document.getElementById('btn').click();
  }
});

setAmount = event => {
	let amount = +input.value;
	if(event.deltaY > 0) {
		input.value = amount--
	} else if(event.deltaY < 0){
		input.value = amount++
	}
}