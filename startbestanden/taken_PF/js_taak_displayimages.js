	var aData = [["Alle schermen tonen","Alle schermen verbergen","Toon afbeelding","Verberg afbeelding"],
	["Show all screens","Hide all screens","Show this screen","Hide this screen"]];
	var nTaalSelector = 0; // 0 voor NL, 1 voor EN
	console.log("testdddd");

// eventueel nog uit te breiden labelfunctie
// function setLabels() {
// 	var eHoofdKnop = document.getElementById('hoofdknop');
// 	eHoofdKnop.innerHTML = aData[nTaalSelector][1];


// }

window.onload = function () {
	// Nederlands = 0, Engels = 1
	// var bla - {
	// 	'nl' : ['g', 'ggfd'],
	// 	"fr" : []
	// }
	// 	bla['nl'][0]
	var eHoofdKnop = document.getElementById('hoofdknop');
	var eH = document.querySelector('article');
	var eTaalSelector = document.createElement("a");
	eTaalSelector.innerHTML = "ENGLISH";
	eTaalSelector.href = "";
	eH.insertBefore(eTaalSelector,eH.firstChild);
	eTaalSelector.addEventListener("click",function (e) {
		e.preventDefault();
		if (nTaalSelector == 0) {
			nTaalSelector = 1;
			eTaalSelector.innerHTML = "Nederlands";
		} else {
			nTaalSelector = 0;
			eTaalSelector.innerHTML = "English";
		}
		
	})


	console.log("test");
	var eAfbeeldingen = document.querySelectorAll('.screenshot');
	console.log(eAfbeeldingen);
	var nAantal = eAfbeeldingen.length;
	console.log("aantal " + nAantal);
	eHoofdKnop.onclick = function () {
		verbergSchermen(eAfbeeldingen, nAantal, eHoofdKnop);
	}

	for(i=0;i<nAantal;i++) {
		var eLink = document.createElement('a');
		eLink.innerHTML = aData[nTaalSelector][3];;
		eLink.setAttribute("href","");
		eLink.setAttribute("class","linkje");
		eAfbeeldingen[i].parentNode.appendChild(eLink);
		console.log("Link:" + eLink);
	}

	eLinks = document.querySelectorAll(".linkje");
	console.log("Elink lengte: " + eLinks.length);
	for(i=0;i<eLinks.length;i++) {
		eLinks[i].addEventListener("click",function(e) {
			e.preventDefault();
			console.log("In eventlisteneren");
			verbergAfbeelding(this.previousElementSibling);
		})
	} 


}

function verbergSchermen(eAfbeeldingen, nAantal, eHoofdKnop) {
		for(i=0;i<nAantal;i++) {
			verbergAfbeelding(eAfbeeldingen[i]);
		}
		eHoofdKnop.innerHTML = aData[nTaalSelector][0];
		eHoofdKnop.onclick = function () {
		toonSchermen(eAfbeeldingen, nAantal, eHoofdKnop);
	}
}

function toonSchermen(eAfbeeldingen, nAantal, eHoofdKnop) {
		for(i=0;i<nAantal;i++) {
			toonAfbeelding(eAfbeeldingen[i]);
		}
		eHoofdKnop.innerHTML = aData[nTaalSelector][1];
		eHoofdKnop.onclick = function () {
		verbergSchermen(eAfbeeldingen, nAantal, eHoofdKnop);
	}
}

function toonAfbeelding(eAfbeelding) {
	eAfbeelding.style.display = "inline";
	eAfbeelding.nextElementSibling.innerHTML = aData[nTaalSelector][3];

}

function verbergAfbeelding(eAfbeelding) {

	eAfbeelding.style.display = "none";
	eAfbeelding.nextElementSibling.innerHTML = aData[nTaalSelector][2];

}

