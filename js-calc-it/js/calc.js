


//only works in console.log
//only single digit and + works at the moment
//will use num.join to put multiple digits together using a conditional statement

// var numX = [];
var num1 = [];
var num2 = [];
var opSign = [];
var result;


var inputNum = document.getElementsByClassName("number");


var addition = function (num1, num2) {
return (Number(num1[0]) + Number(num2[0])); 
};

var subtract = function(num1, num2) {
 return(Number(num1[0]) - Number(num2[0])); 
};

var multiply = function(num1, num2) {
 return(Number(num1[0]) * Number(num2[0])); 
};

var division = function(num1, num2) {
  return(Number(num1[0]) / Number(num2[0])); 
};


var calFunc = function (opSign) {
	return (opSign);
}



for (i=0; i<inputNum.length; i++) {
	inputNum[i].addEventListener('click', function(e){
	if (opSign.length < 1) {
		num1.push(this.value);
		console.log(num1);
	} else {
		num2.push(this.value);
		console.log(num2);
	}

	});
}


var inputOp = document.getElementsByClassName("operator");

for (j=0; j<inputOp.length; j++) {
	inputOp[j].addEventListener ('click', function(e) {

	if (opSign.length < 1) {
	opSign.push(this.value);
	console.log(opSign);
	}
		
	
	})
}


var equal = document.getElementsByClassName("eq");

equal[0].addEventListener('click', function(e) {
	console.log(this.value);
	console.log(addition(num1, num2));
});



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

// for (i=0; i<inputNum.length; i++) {
// 	inputNum[i].addEventListener('click', function(e){
// 		// if (opSign.length < 1) {
// 			numX.push(this.value);
// 		// 	var allDigits = [numX.join('')];
// 		// } else {
// 		// 	numX.push(this.value);
// 		// }

		

// 		// console.log(numX);
// 		// console.log(allDigits);


// 		// console.log(addition(numX));
// 	});
	
// }

