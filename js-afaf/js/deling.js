// JavaScript Document


var eMyBut = document.querySelector("#deKnop");

eMyBut.onclick = evalueer;

function evalueer(){
	
	var eInp1 = document.querySelector("#getal1");
	var eInp2 = document.querySelector("#getal2");
	
	//use parseInt funct
	
	var nInp1 = eInp1.value;
	var nInp2 = eInp2.value; 
	
	console.log(nInp1);
	console.log(nInp2);
	
	var resultaat = '';
	
	if( nInp1 > nInp2) {
		if(nInp2 ==  0){
			alert('kan niet delen door 0');
			}
		else {
			resultaat = nInp1 / nInp2;
			}
		}
	else {
			if(nInp1 ==  0){
			alert('kan niet delen door 0');
			}
		else {
			resultaat = nInp2 / nInp1;
			}
		}
		
		var eOutput = document.querySelector("#output");
		eOutput.innerHTML = "uitkomst = " +  resultaat;
		
		
		
	
	}
	