// JavaScript Document




window.onload =  function(){


/*********************  js inactif **********************/
var eNoscript = document.getElementById('noScript');
eNoscript.style.display = 'none';






/****************** images list ***********************/
var aImgTable = [
				["../images/art/gerard_richter1.jpg","Gerhard Richter, Juni n° 527, 1983","Gerard Richter"],
				["../images/art/andrea_branzi.jpg","Andrea Branzi: design","Andrea Branzi"],
				["../images/art/eric_poitevin.jpg","Eric Poitevin, Sans titre, 2002","Eric Poitevin"],
				["../images/art/kendell_geers.jpg","Kendell Geers,  T.W. (I.N.R.I.), 1994","Kendell Geers"],
				["../images/art/julia_binfield1.jpg","Julia Binfield, Affiche Networks & system management Olivetti, 1993","Julia Binfield"]
				]
				



	var eAside = document.querySelector('aside');
	var eDrop = document.createElement('select');
	eAside.appendChild(eDrop);



/***************** dropDown invullen *******************/
	var eOption = document.createElement('option');	
	eOption.innerHTML = 'maak een keuze';
	eOption.value = '';
	eDrop.appendChild(eOption);
	
	for (var i = 0; i < aImgTable.length; i++) {
		var eOption = document.createElement('option');
		eOption.innerHTML = aImgTable[i][2] ;
		eOption.value = i  ;
		eDrop.appendChild(eOption);
		}
		

/**************** onchange actie ***********************/
	var ekader = document.getElementById('kader');
	var eP =  document.createElement('p');
	var eImg = document.createElement('img');	
		
	eDrop.addEventListener('change', function(e) {
	eP.innerHTML = aImgTable[eDrop.value][1];
	eImg.src = aImgTable[eDrop.value][0];
	eImg.alt = aImgTable[eDrop.value][2];
	
	ekader.appendChild(eP);		
	ekader.appendChild(eImg);		
	
	}
	)
	
	
	
	
		














}