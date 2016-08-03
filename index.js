
/*
1.Write the following JavaScript in your index.js file

2.Create a function that will be called when the user clicks 
on the button element you added to your HTML.

3.This function should grab the values entered by the user from 
the input element and the select eloement.

The function should then calculate the weight of the user on the
 selected planet, and show the weight to the user in the p element you
 added to your HTML
*/

 var button = document.getElementsByTagName("button");


function weightCalculate() {
	var yourWeight = document.getElementById("weight_value").value;
	var yourPlanet = document.getElementById("planet_value").value;
	var onPlanet = yourWeight * yourPlanet;
	console.log(onPlanet);
	//var planetName = document.getElementById("planet_value").innerHTML;
	document.getElementById("userValue").innerHTML = "You would weigh " + onPlanet + " Pounds";
	return onPlanet;
};

