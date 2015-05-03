// JavaScript Document
var versie = " versie 2.0";



window.onload = function() {
	

/*********************  js inactif **********************/
	var eNoScript = document.getElementById('noscript');
	eNoScript.style.display = "none";

/*********************  images js file not correctly loaded **********************/
	if ( typeof aModernArt == "undefined"){
	throw new Error("array niet gevonden");	
		}
	else {
	console.log('test' + aModernArt[0][0]);
	}
	


	var eKop = document.querySelector('h1');
	eKop.innerHTML  = eKop.innerHTML + versie ;

	var eImg = document.querySelector('#plaatshouder');
	
	var eKeuzelijst = maakKeuzelijst(aModernArt);
	var eSidebar = document.querySelector('aside');
	eSidebar.appendChild(eKeuzelijst);
	
	
	eKeuzelijst.addEventListener("change", function(e){
		var waarde = this.value;
		console.log('waarde' + waarde)
		if (waarde != "" && waarde != null){
			toonFoto(waarde, eImg);
			}
		})
	}
	

/*********************  create & fill dropdown **********************/
function maakKeuzelijst(a){
	
	var nArt = a.length;
	var eSelect = document.createElement('select');
	var eOption = document.createElement('option');
	
	eSelect.id = "keuzelijst";
	eOption.innerHTML = "maak een keuze";
	eOption.setAttribute("value", "");
	
	eSelect.appendChild(eOption);
	for (var i=0; i<nArt; i++){
		
		var eOption = document.createElement('option');
		eOption.innerHTML = a[i][2];
		eOption.value = i;
		eSelect.appendChild(eOption);
		}
	return eSelect;
		}
	
		

	
function toonFoto(nIndex, eImg)	{


	//eIndex : link elem
	//eImg : plaatshouder img
	//aModernArt array global

	aArt  = aModernArt[nIndex];
	sPad = aArt[0];		//source
	sInfo = aArt[1];	//info
	sNaam = aArt[2];	//naam
	
	eImg.src = "../images/art/" + sPad;
	var eInfo = document.getElementById('info');

	
	if (eInfo){
		eInfo.innerHTML = sInfo;
		}
	else {
	var eInfo = document.createElement('p');
	eInfo.id = "info";
	eInfo.innerHTML = sInfo;
	//eImg.parentNode.appendChild(eInfo);
	eImg.parentNode.insertBefore(eInfo, eImg.parentNode.firstChild);
	
	}
	
	
	}
	
	
	
	
	