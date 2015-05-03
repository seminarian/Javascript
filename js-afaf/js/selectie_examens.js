// JavaScript Document

//var eKnop = document.getElementById("goKnop");
var eKnop = document.querySelector('#goKnop');
eKnop.onclick = evalueer;



function evalueer() {

	//console.log("afaf");

	var ewis = document.getElementById("wiskunde");
	var eboe = document.getElementById("boekhouden");
	var einf = document.getElementById("informatica");


	var nwis = parseInt(ewis.value);
	var nboe = parseInt(eboe.value);
	var ninf = parseInt(einf.value);


	var tot = nwis + nboe + ninf

	var bericht = "";

	// console.log("totaal = " + tot);

	if (((nwis > 6) && ((ninf + nboe) > 12)) || (ninf = 10)) {
		bericht = "geslaagd ";
	} else {
		bericht = "niet geslaagd ";
	}

	//console.log(bericht);

	var mention = tot / 3
	if (mention < 7) {

		bericht += " met voldoende ";
	}






	else {	bericht += " met onderscheiding";}
	//	console.log(bericht);



	var eoutput = document.querySelector('#output');
	eoutput.innerHTML = bericht;



}