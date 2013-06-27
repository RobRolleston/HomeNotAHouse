// THIS IS THE ALGORITHM THAT MATCHES AND SORTS BALTIMORE NEIGHBORHOODS ACCORDING TO USER INPUTS

//Global variable for storing the data (can be seen/edited anywhere)
var csaData = null;
//Call to read the json data, and on success populate csaData as an actual javascript object of the data
$.getJSON( "CSAdata_sales-crime.json", function(data){
	csaData = data;
});



// This function is called by the "submit" action in jstest.html
function findNeighborhood(pricevalues){

	// Show that we have the selected price value
	console.log(pricevalues);
	
	// make the findPriceValue function a variable
	var neighborhoodPrice = findPriceValue(pricevalues);
	
	//show that we have access to the data
	$("ul").html("<li>" + neighborhoodPrice + "</li>");
	//now compare/combine to your heart's content!

};


// sets up a new array to put the new matches
var matchList = new Array();

// This determines if the neighborhood is a match for the inputted price range
function findPriceValue(pricevalues) {
	
	// cycle through all neighborhoods
	for (i = 0; i < csaData.length; i++) {
		
		// Get all the median sales prices from all the neighborhoods
		var medianPrice = csaData[i].salepr10;
		
		// Check to see if they fit the price range from user input
		if ( pricevalues[0] < medianPrice && medianPrice < pricevalues[1] ) {
			matchList.push(i);
		} else {
			console.log('no match!');
		}
	
	}
	
	var Matches = displayMatches(matchList);
	return Matches;
};

// Displays the sales price of each
function displayMatches(matchList) {
	
	for (i = 0; i < matchList.length; i++) {
		csaData[matchList[i]].salepr10;
	}
	
	//console.log(csaData[Matches[i]].salepr10)
}; 


