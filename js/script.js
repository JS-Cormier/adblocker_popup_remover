var supportedWebsites = [
	{
		"name" : "Le Journal de Montréal",
		"domain" : "https://www.journaldemontreal.com/",
		"classesToRemove" : ["popup-adblocker"],
		"overflowHidden" : true
	},
	{
		"name" : "Le Journal de Québec",
		"domain" : "https://www.journaldequebec.com/",
		"classesToRemove" : ["popup-adblocker"],
		"overflowHidden" : true
	},
	{
		"name" : "TVA Sports",
		"domain" : "https://www.tvasports.ca/",
		"classesToRemove" : ["popup-adblocker"],
		"overflowHidden" : true
	},
	{
		"name" : "TVA Nouvelles",
		"domain" : "https://www.tvanouvelles.ca/",
		"classesToRemove" : ["popup-adblocker"],
		"overflowHidden" : true
	}
];

document.body.onload = function() {
	for(var i = 0; i < supportedWebsites.length; i++) {
		var website = supportedWebsites[i];
		if(window.location.href.startsWith(website.domain)) {
			website.classesToRemove.forEach(classToRemove => {
				var elementsToRemove = document.getElementsByClassName(classToRemove);
				for(var i = 0; i < elementsToRemove.length; i++) {
					elementsToRemove[i].style.display = "none";
				}
			});
			if(website.overflowHidden) document.body.style.overflow = "visible";
			break;
		}
	}
}
	
	