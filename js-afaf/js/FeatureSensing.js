// JavaScript Document

window.onload = function(){
	
	
	var eNav = document.getElementById('nav');
//	eNav.innerHTML = 'Name ' + navigator.appName 
	eNav.innerHTML = 'Name :'+ navigator.appName + '<br>'+ 'code :' + navigator.appCodeName + '<br>' + "UserAgent :" + navigator.userAgent ;
	
	//IE11, Chrome, Firefox, and Safari return appName "Netscape".
	//Chrome, Firefox, IE, Safari, and Opera all return appCodeName "Mozilla".
	
	
	var eDiv = document.getElementById('container');
	var eUl = document.createElement('ul');
	eDiv.appendChild(eUl);
	
	
	var MyArray = [ 'document.images', 'document.layers', 'document.all', 'document.getElementById', 'document.querySelector', 'document.styleSheets', 
	'document.createElement', 'document.createNodeIterator', 'document.implementation.createDocument', 'window.walkTheDog', 
	'window.focus', 'window.ActiveXObject', 'window.XMLHttpRequest', 'window.localStorage', 'MyArray.push', 'MyArray.filter', 'Object.prototype', 
	'navigator.geolocation', 'document.documentElement.classList' ] 
	
	
	
	
	for (var i = 0; MyArray.length > i ; i++){
		
	var eLi = document.createElement('li');
	
		if(eval(MyArray[i])){	
			eLi.innerHTML = MyArray[i]  + ' <span style=\"color:green\"> Ja </span>';			
		}
		else {
			eLi.innerHTML = MyArray[i]  + ' <span style=\"color:red\"> Nee </span>';
		}
			
	eUl.appendChild(eLi);
	
	
	
	
	}
	
	}