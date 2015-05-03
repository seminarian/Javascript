// JavaScript Document


var edeKnop = document.querySelector('#deKnop');
var eKinderen = document.getElementById('kinderen');
var eMaandloon = document.querySelector('#maandloon');
var eoutput = document.querySelector('#output');


edeKnop.onclick = reken;


function reken(){

	var nKinderen = parseInt(eKinderen.value);
	var nMaandloon = parseInt(eMaandloon.value);
	
	
	
	if((nKinderen <= 0) || (nMaandloon <= 0)){
		alert ('aantal kinderen en maandloon mag niet =0 ');
		}
	
	var perKind = 25 ;
	var minLoon = 500;
	var maxLoon = 2000;
	var toeslag = 0;
	var kindergeld = 0;
	
	var toeslagFirstLev = 12.5;
	var toeslagSecondLev = 7.5;
	
	var FirstLev = 3;
	var SecondLev = 5;
	
	var basiskindergeld = perKind * nKinderen ;
	
	
	if(nKinderen>=FirstLev) {
		toeslag = toeslag + (toeslagFirstLev * ((nKinderen - FirstLev) + 1) );
			
		if(nKinderen>=SecondLev){
			toeslag = toeslag + (toeslagSecondLev * ((nKinderen - SecondLev) + 1) );
			}
		}
		
		
	if(nMaandloon < minLoon ) {
		toeslag = toeslag + (basiskindergeld*0.25);
		
		if(nMaandloon < minLoon ){
		toeslag = toeslag + (basiskindergeld* (-0.45));
			}
		
		}
	
	
	kindergeld = basiskindergeld + toeslag;
	
	if(kindergeld < basiskindergeld){
		kindergeld = basiskindergeld;
		}
		
	
		eoutput.innerHTML = ' kindergeld van deze moeder = ' + kindergeld;


}



