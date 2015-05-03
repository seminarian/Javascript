// JavaScript Document


/********* language global variable **********/ 
var MySwitch = true;


var aLanguage = [['NL','alles verbergen', 'alles tonen', 'verberg', 'toon'],
				['FR', 'cacher tout', 'afficher tout', 'cacher', 'afficher']]


var currentLang = 1; 


/************* functies hide and show img + link text aanpassen volgens language **************/
	function hideImg(MyImg, MyLink) {
		MyImg.style.display = 'none';
		MyLink.innerHTML = aLanguage[currentLang][4];
		}
	
	function showImg(MyImg, MyLink) {
		MyImg.style.display = 'block';
		MyLink.innerHTML =  aLanguage[currentLang][3];	
		}
		
		

window.onload =  function() {
	
		
	var butAll = document.getElementById('hoofdknop');
	var eImgs = document.querySelectorAll('.screenshot');


/********************* create toon-verberg links *************************/
		for( var i=0; eImgs.length > i; i++){
		var eA = document.createElement('a');
		eA.className ='LinksClass';
		eA.href ='';
	    eA.innerHTML =  aLanguage[currentLang][3];
		eImgs[i].parentNode.appendChild(eA);
		}

/************** set hoofdknop in juiste taal ************/ 
	 	butAll.innerHTML = aLanguage[currentLang][1];

				
			

/**************** click hoofdknop **********************/
	butAll.onclick = switchAll;
	
	function switchAll(){
		if (MySwitch === false) {
				for( var i=0; eImgs.length > i; i++){
				showImg(eImgs[i], eImgs[i].nextElementSibling);
				butAll.innerHTML = aLanguage[currentLang][1];
				}	
				MySwitch = true;		
			}
			else {
				for( var i=0; eImgs.length > i; i++){
				hideImg(eImgs[i], eImgs[i].nextElementSibling);
				butAll.innerHTML  = aLanguage[currentLang][2];	
				}
				MySwitch = false;
			}
		}
			
		
/**************** click individuele knopen **********************/		
	var MyLinks = document.querySelectorAll('.LinksClass');
	
		for( var i=0; MyLinks.length > i; i++){
			MyLinks[i].addEventListener ( 'click', function(e) {
				e.preventDefault();
				
				
		if (this.previousElementSibling.style.display) {
				if ( this.previousElementSibling.style.display === 'block') {				
					hideImg(this.previousElementSibling, this);
					}	
				else{			
					showImg(this.previousElementSibling, this);				
				}
			}	
			else {
				hideImg(this.previousElementSibling, this);
				}
								
			}		
			)
		}
			
			
			












			
/******************* 2nd methode***********************/				
	/*for( var i=0; MyLinks.length > i; i++){
		MyLinks[i].onclick = function() {	
		this.previousElementSibling.style.display = 'none' ;
		return false;
		}
		}*/	
	
	}