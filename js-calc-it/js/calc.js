
//display number on click
var numX = [];
var opSign = [];
var result;
var allDigits = [];

var inputNum = document.getElementsByClassName("number");

var addition = function (numX) {
	return (Number(numX[0]) + Number(numX[1])); 
}

var calFunc = function (opSign) {
	return (opSign);
}

for (i=0; i<inputNum.length; i++) {
	inputNum[i].addEventListener('click', function(e){
		if (opSign.length < 1) {
			numX.push(this.value);
			var allDigits = [numX.join('')];
		} else {
			numX.push(this.value);
		}

		

		console.log(numX);
		console.log(allDigits);


		console.log(addition(numX));
	});
	
}






var inputOp = document.getElementsByClassName("operator");

for (j=0; j<inputOp.length; j++) {
	inputOp[j].addEventListener ('click', function(e) {
		opSign.push(this.value);
		console.log(opSign);
	})
}


// if (opSign === '+') {
// 	console.log(numX[0] + numX[1]);
// 	alert(numX[0] + numX[1]);
// }



// console.log(numX[0] + numX[1]);

// var equal = document.getElementsByClassName("eq");

// equal[0].addEventListener('click', function(e) {
// 	console.log(this.value);
// 	return this.value;
// 	console.log(numX[0] + numX[1]);
// });


