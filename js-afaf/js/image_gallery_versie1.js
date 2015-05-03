// JavaScript Document
var versie = " versie 1.0";



window.onload = function() {
	
	var eKop = document.querySelector('h1');
	eKop.innerHTML  = eKop.innerHTML + versie ;
	

	var eAarray = document.querySelectorAll('aside a');
	var eImg = document.querySelector('#plaatshouder');
	
		
	console.log(eImg.src );
	console.log('links ' + eAarray.length );

	
/*	//Onclick
	for (var i=0; i<eAarray.length; i++){	
		eAarray[i].onclick = deactivate;
		}
  	function deactivate() {
			console.log('deactivate');
			}


	//EventListener
	for (var i=0; i<eAarray.length; i++){	
		eAarray[i].addEventListener ('mouseover', deactivate);
		}
	function deactivate() {
			console.log('deactivate');
			}
*/


	for (var i=0; i<eAarray.length; i++){	
		eAarray[i].addEventListener ('click', function(e) {
			e.preventDefault();
			toonFoto(this, eImg);			
			}	
		);
		}



	
	}
	

	
function toonFoto(eLink, eImg)	{

	eImg.src = eLink.href;
	var sInfo = eLink.getAttribute('title');
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
	
	
	
	
	