var supportedWebsites = [
    {
		"name" : "Insider",
		"domains" : ["https://www.insider.com/", "https://www.businessinsider.com/"],
		"classesToRemove" : ["tp-modal", "tp-active", "tp-backdrop" ],
		"overflowHidden" : true
	},
	{
		"name" : "Le Journal de Montréal",
		"domains" : ["https://www.journaldemontreal.com/"],
		"classesToRemove" : ["popup-adblocker"],
		"overflowHidden" : true
	},
	{
		"name" : "Le Journal de Québec",
		"domains" : ["https://www.journaldequebec.com/"],
		"classesToRemove" : ["popup-adblocker"],
		"overflowHidden" : true
	},
	{
		"name" : "Météomédia",
		"domains" : ["https://www.meteomedia.com/"],
		"classesToRemove" : ["fc-ab-root"],
		"overflowHidden" : false
	},
	{
		"name" : "The Weather Network",
		"domains" : ["https://www.theweathernetwork.com/"],
		"classesToRemove" : ["fc-ab-root"],
		"overflowHidden" : false
	},
	{
		"name" : "TVA Sports",
		"domains" : ["https://www.tvasports.ca/"],
		"classesToRemove" : ["popup-adblocker"],
		"overflowHidden" : true
	},
	{
		"name" : "TVA Nouvelles",
		"domains" : ["https://www.tvanouvelles.ca/"],
		"classesToRemove" : ["popup-adblocker"],
		"overflowHidden" : true
	}
];

document.body.onload = function() {
	for(var i = 0; i < supportedWebsites.length; i++) {
		var website = supportedWebsites[i];
		for(var j = 0; j < website.domains.length; j++) {
			if(window.location.href.startsWith(website.domains[j])) {
				website.classesToRemove.forEach(classToRemove => {
					var elementsToRemove = document.getElementsByClassName(classToRemove);
					for(var k = 0; k < elementsToRemove.length; k++) {
						elementsToRemove[k].style.display = "none";
					}
				});
				if(website.overflowHidden) document.body.style.setProperty("overflow", "visible", "important");
				return;
			}
		}
	}
}
	
	