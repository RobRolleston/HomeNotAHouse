
var csaData = null;
	//Call to read the json data, and on success populate csaData as an actual javascript object of the data
function parseCache () {	
	console.log("Passed hash value: " + location.hash);
	var idx = location.hash.indexOf("#");
	var matchList = location.hash.slice(idx+1).split(",");
	for (i=0; i<matchList.length; i++) {
		if (csaData != null) {
			console.log("Neighborhood #: " + matchList[i]  + " is " + csaData[matchList[i]].CSA2000);
		}
		else {
			//  Howe get the JSON file to load before doing this... ?
			console.log("Neighborhood #: " + matchList[i] );
		}
		var tabId = "#tab"+i+"Label";
		$(tabId).html(csaData[matchList[i]].CSA2000); 
	};
};
	
$.getJSON( "data/CSAdata_sales-crime.json", 
	function(data){
		csaData = data;
		console.log("CSA Data Loaded");
	
		// Sort csaData by sale price, ascending order, that way any returned matches will already be sorted
		csaData.sort(function(a, b) {
    		return a.salepr10 - b.salepr10;
			});
		//console.log(csaData[0], csaData[1], csaData[2]);
	
	})
	.fail(function() { console.log( "error loading CSA data" ); })
	.done(function() { parseCache();});


	

	
	