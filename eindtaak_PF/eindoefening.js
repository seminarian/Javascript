
// variabelen
var aoWinkels = [{naam:"de fruitmand",adres:"steenstraat 34", post:8000,gemeente:"Brugge",tel:"050342218",manager:"Francine Lapoule"},
{naam:"Jos & Anneke",adres:"visserijstraat 1", post:8400,gemeente:"Oostende",tel:"059463689",manager:"Jos Leman"},
{naam:"groene vingers",adres:"hoogstraat 108", post:9000,gemeente:"Gent",tel:"091342218"},
{naam:"de buurtwinkel",adres:"die laene 22", post:2000,gemeente:"Antwerpen",tel:"0230342218",manager:"Bert Simoens"}]

var aGroenten = [["aardappelen",0.95,"kg"],
["avocado",2.69,"stuk"],
["bloemkool",1.93,"stuk"],
["brocoli",1.29,"stuk"],
["champignons",0.89,"250g"],
["chinese kool",1.59,"stuk"],
["groene kool",1.69,"stuk"],
["knolselder",1.29,"stuk"],
["komkommer",2.49,"stuk"],
["kropsla",1.69,"stuk"],
["paprika",0.89,"net"],
["prei",2.99,"bundel"],
["princessenbonen",1,"250g"],
["rapen",0.99,"bundel"],
["kropsla",1.69,"stuk"],
["rode kool",1.39,"stuk"],
["sla iceberg",1.49,"stuk"],
["spinazie vers",1.89,"300g"],
["sjalot",0.99,"500g"],
["spruiten",1.86,"kg"],
["trostomaat",2.99,"500g"],
["ui",0.89,"kg"],
["witloof 1ste keus",1.49,"700g"],
["wortelen",2.59,"kg"],
["courgetten",1.5,"stuk"]];
	var nGroenten = aGroenten.length;
// var Mandje = { groente : groenten[i][0], prijs : groenten[i][1], aantal : 0 }
	var Mandje = []

	for(i=0;i<nGroenten;i++) {
		var oRij = { groente : aGroenten[i][0], prijs : aGroenten[i][1], aantal : 0 }
		Mandje.push(oRij);
	}
	console.log("Mandje: " + Mandje);
	

	//TOON MANDJE
	function toonMandje() {
		var eLeeg = document.getElementById('leeg');
		eLeeg.style.display = "block";
		var nTeller = 0;
		var eTotaal = document.getElementById('totaal');
		var eWinkelMandje = document.getElementById('winkelmandje');
		var eDiv = document.getElementById('div');
		if (eDiv) {
			eWinkelMandje.removeChild(eDiv);
		}
		eDiv = document.createElement('div');
		eDiv.id = 'div';
		var eLijn = null;
		var sTekst = "<div class='titel'><div>Groente</div><div>Prijs</div><div>Aantal</div><div>Subtotaal</div><div>Wis</div></div>"
		for(i=0;i<nGroenten;i++) {
			if (Mandje[i]["aantal"] > 0) {
				eLijn = document.createElement("div");
				sTekst += "<div class='rij'><div>" + Mandje[i]["groente"] + "</div><div>" + Mandje[i]["prijs"] + "</div><div>" + Mandje[i]["aantal"] + "</div><div>" + (Mandje[i]["aantal"]*Mandje[i]["prijs"]).toFixed(2) + "</div><div><a href='#' class='remove' index='" + i + "'>WIS</a></div></div>";
				console.log(sTekst);
				eLijn.innerHTML = sTekst;
				nTeller++;
				eDiv.appendChild(eLijn);
				sTekst = "";
			}
		}

		if (nTeller > 0) {
			eWinkelMandje.insertBefore(eDiv,eTotaal);
			eLeeg.style.display = "none";
		}
		var eRemoves = document.querySelectorAll('a.remove');
		console.log('lengte removes' + eRemoves.length);
		for(i=0;i<eRemoves.length;i++) {
			eRemoves[i].addEventListener('click',function (e) {
				e.preventDefault();
				wis(this);
			})
			console.log('listener toegevoegd');
		}
	}

	function berekenTotaal() {
		var totaal = 0;
		for (i=0;i<nGroenten;i++) {
			if (Mandje[i]["aantal"] > 0) {
				totaal += parseFloat(Mandje[i]["aantal"] * Mandje[i]["prijs"]);
			}
		}
		return totaal;
	}
	function wis (element) {
			var eTotaal = document.getElementById("totNum");
		console.log(element);
		var nIndex = element.getAttribute("index");
		console.log("index: " + nIndex);
		Mandje[nIndex]["aantal"] = 0;
		console.log("gewist");
		toonMandje();
		eTotaal.innerHTML = berekenTotaal().toFixed(2);

	}

window.onload = function() {
		var eTotaal = document.getElementById("totNum");
	var eAantal = document.getElementById('aantal');
	var eMidden = document.getElementById('midden');
	var sErrorText = "";
	var ePerror = document.createElement('p');
	ePerror.className = "error";
	var nWinkels = aoWinkels.length;
	console.log("var aoWinkels: " + aoWinkels[0].adres + " aantal winkels: " + nWinkels);
	console.log("var aGroenten: " + aGroenten[0][0]);

	var eWinkel = document.getElementById("winkel");

	var eOption = "";
	// eWinkel.style.display = "none";

	//INVULLEN WINKELS DROPDOWN
	for (i=0;i<nWinkels;i++) {
		eOption = document.createElement('option');
		eOption.innerHTML = aoWinkels[i].naam;
		eOption.value = i;
		eOption.title = aoWinkels[i].adres + ", " + aoWinkels[i].post + " " + aoWinkels[i].gemeente;
		eWinkel.appendChild(eOption);

	}
	// eWinkel.addEventListener('change',function (e) {
	// 	verwerkWinkel(e,this);
	// });

	//INVULLEN GROENTEN DROPDOWN
	var eGroenten = document.getElementById("groente");

	for (i=0;i<nGroenten;i++) {
		eOption = document.createElement('option');
		eOption.innerHTML = aGroenten[i][0] + " (" + aGroenten[i][1] + " €/" + aGroenten[i][2] + ")";
		eOption.value = i;
		eGroenten.appendChild(eOption);
	}
	// eGroenten.addEventListener('change',function (e) {
	// 	verwerkGroenten(e,this);
	// });
	

	//BUTTON TOEVOEGEN
	var eButton = document.getElementById("toevoegen");

	eButton.addEventListener('click', function() {
		ePerror.style.display = "none";
		var validatie = valideer();
		if (validatie) {
			voegtoe();
			toonMandje();
			eTotaal.innerHTML = berekenTotaal().toFixed(2);
		} else {
			ePerror.innerHTML = sErrorText;
			eMidden.appendChild(ePerror);
			ePerror.style.display = "block";
		}
	})



	//VALIDATIE winkel geslecteerd, groente geslecteerd, aantal > 0
	function valideer () {
		sErrorText = "";
		if (eWinkel.selectedIndex == 0) {
			sErrorText += "Gelieve een winkel te selecteren.";
		} else {
			if (eGroenten.selectedIndex == 0) {
				sErrorText += "Gelieve een groente te selecteren.";
			} else {
				if (isNaN(eAantal.value) || eAantal.value <= 0) {
					sErrorText += "Gelieve een geldig aantal in te vullen.";
				} else {
					return true;
				}
			}
		}
	}

	function voegtoe () {
		var nIndex = eGroenten.options[eGroenten.selectedIndex].value;
		Mandje[nIndex]["aantal"] += parseInt(eAantal.value);
		console.log("toegevoegd");
	}



	// function verwerkWinkel(e,eSelect) {
	// 	var value = eSelect.options[eSelect.selectedIndex].value;
	// 	console.log("waarde nWinkel: " + value);
	// }

	// function verwerkGroenten(e,eSelect) {
	// 	var value = eSelect.options[eSelect.selectedIndex].value;
		
	// 	console.log("waarde nGroenten: " + value);
	// }
}