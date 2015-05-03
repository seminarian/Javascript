// JavaScript Document



//***********************************************  Tests *********************
/********* DOM funct ***********/

/*function leegNode(objNode){
	/*** remove all childs ****/
/*	while (objNode.hasChildNodes()){
		objNode.removeChild(objNode.firstChild)
		}
	}
	*/
	
// globale datum objecten 
/*var vandaag = new Date();

function getVandaagStr(){
	// return een locale date string
	var strNu = "momenteel: " + vandaag.toLocaleDateString() + ", " ;
	strNu += vandaag.toLocaleTimeString();
	return strNu;
	}
	*/
//****************************************************************************	
	

	
	
	
//........ datum arrays .............
// dagen volgens getDay() volgorde 

var arrWeekdagen = new Array('zondag', 'maandag', 'dinsdag',  'woensdag', 'donderdag', 'vrijdag', 'zaterdag');

//vervang feb dagen voor een schrikkeljaar
var arrMaanden = new Array(['januari', 31], ['februari', 28], ['maart', 31], ['april', 30], ['mei', 31], ['juni', 30], ['juli', 31], ['augustus', 31], ['september', 30], ['october', 31], ['november', 30], ['december', 31]);


// globale date objecten te gebruiken in de pagina 
var vandaag = new Date();
var huidigeDag = vandaag.getDate();
var huidigeWeekDag = vandaag.getDay();
var huidigeMaand = vandaag.getMonth();
var huidigJaar =  vandaag.getFullYear();

function isSchrikkeljaar(jaar) {
	/* return boolean */
	eindwaarde = false;
	
	if (isNaN(jaar)){
		
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
	
	
	
	
	
function dagAanduiden(oDatum, CSS_Class){
	
//welk jaar, maand en dag om id te reconstrueeren

	var dDag = oDatum.getDate();
	var dMaand = oDatum.getMonth();
	var dJaar = oDatum.getFullYear();
	
	var strId = dJaar + "_"+ dMaand + "_" + dDag;
	var dCel = document.getElementById(strId);

	if(dCel){
		dCel.className = CSS_Class;
		}
		
	}
	

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
	
	

	
	


	
	
	
	
	
	
	
	
	
	
	
	
	



