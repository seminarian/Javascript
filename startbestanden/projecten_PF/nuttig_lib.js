// Javascript library

/*************** DOM functies ****************/

function leegNode(objNode) {
	/* verwijdert alle inhoud/children van een Node
	@objNode: node, verplicht, de node die geleegd wordt
	*/
	while(objNode.hasChildNodes()) {
		objNode.removeChild(objNode.firstChild);
	}
}