// THIS IS THE ALGORITHM THAT MATCHES AND SORTS BALTIMORE NEIGHBORHOODS ACCORDING TO USER INPUTS

//Global variable for storing the data (can be seen/edited anywhere)
var csaData = null;
//Call to read the json data, and on success populate csaData as an actual javascript object of the data
$.getJSON( "CSAdata_sales-crime.json", function(data){
	csaData = data;
	 console.log("CSA Data Loaded");
	
	// Sort csaData by sale price, ascending order, that way any returned matches will already be sorted
	csaData.sort(function(a, b) {
    	return a.salepr10 - b.salepr10;
	});
	console.log(csaData[0], csaData[1], csaData[2]);
	
}).fail(function() { console.log( "error loading CSA data" ); });


// This function is called by the "submit" action in jstest.html
function findNeighborhood(pricevalues, crimevalues){

	// Show that we have the selected price value
	console.log(pricevalues);
	
	// make the findPriceValue function a variable
	var neighborhoodPrice = findPriceValue(pricevalues, crimevalues);
	
	//show that we have access to the data
	$("ul").html(neighborhoodPrice);

};



// This determines if the neighborhood is a match for the inputted price range
function findPriceValue(pricevalues, crimevalues) {

	// sets up a new array to put the new matches
	var matchList = new Array();
	
	// cycle through all neighborhoods
	for (i = 0; i < csaData.length; i++) {
		
		// Get all the median sales prices from all the neighborhoods
		var medianPrice = csaData[i].salepr10;
		// Get all the crime rates from all the neighborhoods
		var crimeRate = csaData[i].crime10;
		
		// Check to see if they fit the price range from user input
		if ( pricevalues[0] < medianPrice && medianPrice < pricevalues[1] &&
		crimevalues[0] < crimeRate && crimeRate < crimevalues[1] ) {
			matchList.push(i);
		} else {
			console.log('no match!');
		}
	
	}
	
	var Matches = displayMatches(matchList);
	return Matches;
};

// This determines if the neighborhood is a match for the inputted crime rate range

// Displays the sales price of each
function displayMatches(matchList) {
	
	// sets up an empty string to append the indexed matches to
	var output = "";
	// cycles through the index in matchList
	for (i = 0; i < matchList.length; i++) {
		var matchNames = csaData[matchList[i]].CSA2000;
		var matchPrices = csaData[matchList[i]].salepr10;
		var matchCrime = csaData[matchList[i]].crime10;
		output += "<li>" + matchNames + "<br/>$" + matchPrices + "<br/>" + matchCrime + " incidents per 1,000 people</li>";
	}
	return output;
	
}; 




