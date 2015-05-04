// Javascript library
console.log("nuttig lib geladen");
/*************** DOM functies ****************/

function leegNode(objNode) {
	/* verwijdert alle inhoud/children van een Node
	@objNode: node, verplicht, de node die geleegd wordt
	*/
	while(objNode.hasChildNodes()) {
		objNode.removeChild(objNode.firstChild);
	}
}

/**************** Datum, tijd functies ***************/

//globale datum objecten te gebruiken in je pagina
var vandaag = new Date();
var huidigeDag = vandaag.getDate();
var huidigeWeekDag = vandaag.getDay();
var huidigeMaand = vandaag.getMonth();
var huidigJaar =  vandaag.getFullYear();
var verjaardag = new Date(2015,9,29);


function isSchrikkeljaar(jaar) {
	/* return boolean */
	eindwaarde = false;
	
	if (!isNaN(jaar)){
		
		if (jaar % 4 === 0){
				eindwaarde = true;
				if (jaar % 100 === 0){
					eindwaarde = false;
					if (jaar % 400 ===0){
						eindwaarde = true;
						}
					
					}					
			}
		}
	return eindwaarde;
}





function getVandaagStr() {
	//returnt een lokale datumtijdstring

	var strNu = "Momenteel: " + vandaag.toLocaleDateString() + ", ";
	strNu += vandaag.toLocaleTimeString();
	return strNu;

}

//--------------- datum arrays ------------------
//dagen volgens getDay() volgorde
var arrWeekdagen = new Array('zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag');

//vervang feb dagen voor een schrikkeljaar
var arrMaanden = new Array(['januari',31],['februari',28],['maart',31],['april',30],['mei',31],['juni',30],['juli',31],['augustus',31],['september',30],['oktober',31],['november',30],['december',31]);

/***** cookies *****/

function setCookie(naam, waarde, dagen){
	
	var verval = "";
	if (dagen){
		var vervalDatum = new Date(vandaag.getTime()+ dagen*24*60*60*1000);
		verval = vervalDatum.toUTCString();
		}
		
	document.cookie = naam + "=" + waarde + ";expires=" + verval;	
	
	}
	
	

function getCookie(naam){
	
	var zoek = naam + "=";
	if (document.cookie.length >0){
		
		var begin = document.cookie.indexOf(zoek);
		if (begin != -1) {
				begin += zoek.length;
				var einde = document.cookie.indexOf(";", begin)
				if (einde == -1){
					einde = document.cookie.length;
					}
				return document.cookie.substring(begin, einde);
			}
		}
	}
	

	
	
function clearCookie(naam){
	
	setCookie(naam,"", -1);
	
	}