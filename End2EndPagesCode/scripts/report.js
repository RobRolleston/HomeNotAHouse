
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
		// Insert Neighberhood name into tab
		var tabId = "#tabHeader_"+(i+1);
		$(tabId).html(csaData[matchList[i]].CSA2000); 
		//Insert Neighbborhood name into tab content
		
		//AMM: Writes the neighborhood name into the title spot
		var pageId = "#tabpage_"+(i+1);
		$(pageId+">.name>h2").html(csaData[matchList[i]].CSA2000);
		
		//AMM: Writes the crime rate into its corresponding slot on the tab
		var crimeRateItem = csaData[matchList[i]].crime10 + "<br/>incidents per<br/>1,000 people";
		$(pageId+">.crimeRate>p").html(crimeRateItem);
		
		//AMM: Writes the median house price into its corresponding slot on the tab
		var housePriceItem = "Median House Price: $" + csaData[matchList[i]].salepr10;
		$(pageId+">.homevalues>p").html(housePriceItem);
		
		//AMM: Writes neighborhood description into its corresponding slot on the tab
		$(pageId+">.description>p").html(csaData[matchList[i]].description);
		
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


	

	
	