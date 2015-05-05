
//display number on click
var number1 = ;
var number2 = ;
var opSign = ;
var result = ;


var inputNum = document.getElementsByClassName("number");

for (i=0; i<inputNum.length; i++) {
	inputNum[i].addEventListener('click', function(e){
		console.log(this.value);
	})
}



var inputOp = document.getElementsByClassName("operator");

for (j=0; j<inputOp.length; j++) {
	inputOp[j].addEventListener ('click', function(e) {
		console.log(this.value);
	})
}


var equal = document.getElementsByClassName("eq");

equal[0].addEventListener('click', function(e) {
	console.log(this.value);
});

