// JavaScript Document


/********* language global variable **********/ 
var lang = 'NL';


/************* functies hide and show img + link text aanpassen volgens language **************/
	function hideImg(MyImg, MyLink) {
		MyImg.style.display = 'none';
		if (lang === 'NL') {
		MyLink.innerHTML = 'toon';	
			}
			else {
			MyLink.innerHTML = 'afficher';	
			}
		}
	
	function showImg(MyImg, MyLink) {
		MyImg.style.display = 'block';
 		if (lang === 'NL') {
			MyLink.innerHTML = 'verberg';
			}
			else {
			MyLink.innerHTML = 'cacher';		
			}
		}
		
		

window.onload =  function() {
	
		
	var butHideAll = document.getElementById('hoofdknop');
	var eImgs = document.querySelectorAll('.screenshot');


/********************* create toon-verberg links *************************/
		for( var i=0; eImgs.length > i; i++){
		var eA = document.createElement('a');
		eA.className ='LinksClass';
		eA.href ='';
		if (lang === 'NL') {
			eA.innerHTML = 'verberg';
			}
			else {
			eA.innerHTML = 'cacher';
			}
		eImgs[i].parentNode.appendChild(eA);
		}
	/************** set hoofdknop in juiste taal ************/ 
		if (lang === 'NL') {
	 	   butHideAll.innerHTML = 'alles verbergen';
		}
		   else {
		   butHideAll.innerHTML = 'cacher tout';   
		  }
		
				
			

/**************** click hoofdknop **********************/
	butHideAll.onclick = function(){
		if ((butHideAll.innerHTML === 'alles verbergen') || (butHideAll.innerHTML === 'cacher tout')) {
				for( var i=0; eImgs.length > i; i++){
				hideImg(eImgs[i], eImgs[i].nextElementSibling);
				if (lang === 'NL') {
					butHideAll.innerHTML = 'alles tonen';
					}	
				else {
					butHideAll.innerHTML = 'afficher tout';
					}
				}			
			}
			else {
				for( var i=0; eImgs.length > i; i++){
				showImg(eImgs[i], eImgs[i].nextElementSibling);
				if (lang === 'NL') {
					butHideAll.innerHTML = 'alles verbergen';		
					}
					else {
					butHideAll.innerHTML = 'cacher tout';			
					}
				
				}
			}
		}
			
		
/**************** click individuele knopen **********************/		
	var MyLinks = document.querySelectorAll('.LinksClass');
		for( var i=0; MyLinks.length > i; i++){
			MyLinks[i].addEventListener ( 'click', function(e) {
				e.preventDefault();
				
				if ((this.innerHTML === 'verberg') || (this.innerHTML === 'cacher') ) {
					hideImg(this.previousElementSibling, this);
					}	
				else{
					showImg(this.previousElementSibling, this);
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