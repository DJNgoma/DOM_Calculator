var h1 = document.getElementById('headline');
var h2 = document.getElementById('currentValue');

var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var eight = document.getElementById('8');
var nine = document.getElementById('9');
var zero = document.getElementById('0');
var plus = document.getElementById('plus');
var equals = document.getElementById('equals');

var tempVal = "";
var tempSum = 0;

function bind(element, event, func){
	if(element.addEventListener){
		element.addEventListener(event, func);
	}else if(element.attachEvent){
		element.attachEvent('on' + event, func);
	}else{
		element["on" + event] = func;
	}
}

bind(h1, 'click', function(){alert('Unfortunately this doesn\'t do anything!!');});

bind(one, 'click', function(){
	tempVal+=1; 
	h2.innerHTML = "<strong>"+tempVal;
	tempSum += parseInt(tempVal);
});

bind(two, 'click', function(){
	tempVal+=2; 
	h2.innerHTML = "<strong>"+tempVal;
	tempSum += parseInt(tempVal);
});

bind(three, 'click', function(){
	tempVal+=3; 
	h2.innerHTML = "<strong>"+tempVal;
	tempSum += parseInt(tempVal);
});

bind(four, 'click', function(){
	tempVal+=4; 
	h2.innerHTML = "<strong>"+tempVal;
	tempSum += parseInt(tempVal);
});

bind(five, 'click', function(){
	tempVal+=5; 
	h2.innerHTML = "<strong>"+tempVal;
	tempSum += parseInt(tempVal);
});

bind(six, 'click', function(){
	tempVal+=6; 
	h2.innerHTML = "<strong>"+tempVal;
	tempSum += parseInt(tempVal);
});

bind(seven, 'click', function(){
	tempVal+=7; 
	h2.innerHTML = "<strong>"+tempVal;
	tempSum += parseInt(tempVal);
});

bind(eight, 'click', function(){
	tempVal+=8; 
	h2.innerHTML = "<strong>"+tempVal;
	tempSum += parseInt(tempVal);
});

bind(nine, 'click', function(){
	tempVal+=9; 
	h2.innerHTML = "<strong>"+tempVal;
	tempSum += parseInt(tempVal);
});

bind(zero, 'click', function(){
	tempVal+=0; 
	h2.innerHTML = "<strong>"+tempVal;
	tempSum += parseInt(tempVal);
});

bind(plus, 'click', function(){
	h2.innerHTML = "<strong>" + tempVal + " + ";
	tempVal="";
});

bind(equals, 'click', function(){
	h2.innerHTML = "<strong>" + tempSum;
	tempVal="";
	tempSum=0;
});