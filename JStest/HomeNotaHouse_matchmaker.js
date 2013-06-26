// THIS IS THE ALGORITHM THAT MATCHES AND SORTS BALTIMORE NEIGHBORHOODS ACCORDING TO USER INPUTS

//Global variable for storing the data (can be seen/edited anywhere)
var csaData = null;
//Call to read the json data, and on success populate csaData as an actual javascript object of the data
$.getJSON( "CSAdata_sales-crime.json", function(data){
	csaData = data;
});


//var matches = new Array();

// This function is called by the "submit" action in jstest.html
function findNeighborhood(pricevalues){

	// Show that we have the selected price value
	console.log(pricevalues);
	
	// make the findPriceValue function a variable
	var neighborhoodPrice = findPriceValue();
	
	//show that we have access to the data
	$("h1").html(neighborhoodPrice);
	//now compare/combine to your heart's content!

};


// This displays the neighborhood
function findPriceValue(pricevalues) {
	
	var Matches = new Array();
	// cycle through all neighborhoods
	for (i = 0; i < csaData.length; i++) {
		
		// Get all the median sales prices from all the neighborhoods
		var medianPrice = csaData[i].salepr10;
		
		// Check to see if they fit the price range from user input
		if ( 0 < medianPrice && medianPrice < 100000 ) {
			console.log('match made!');
		} else {
			console.log('no match!');
		}
	
	}

	return csaData[0].CSA2000 + ': ' + csaData[0].salepr00;
};




/*
// One big function to run all the matching and scoring
function  findNeighborhood (pricevalues) {
	
	var pricevalues = stores the housing price value selected by the user
	var crimevalues = stores the crime rate value selected by the user
	
	for every neighborhood_name in neighborhoods {
	
		// Checks if any of the neighborhood crime rates match the selected range
		if crime_rate == selectedCrime {
			crime_match == true
		} else {
			crime_match == false
		};
		
		// Check if any of the neighborhood house prices match the selected range
		if house_price {
			house_price == true
		} else {
			house_price == false
		};
		
		// Checks if any of the neighborhoods have both a price match and crime match
		if crime_rate, house_price == true {
			write.html("the perfect match! (or something)")
		};
		
		// Assign a score to each neighborhood. Thanks Rob!
		var hoodScore = SQRT( (price_desired - price_neigh)^2 + (crime_desired - crime_neigh)^2 )
	
	};
	
	// Display the results by writing HTML
	document.GetElementbyID("neighborhood_profile").innerHTML {
		// This puts whatever HTML element we need to display the results
		// I have no idea what I'm doing here. I want it to select three lowest scores.
		neighborhoods.hoodScore[0]
		neighobrhoods.hoodScore[1]
		neighborhoods.hoodScore[2]
	};

}

// Another function to create visualizations of trends, using D3. THIS IS NOT FINISHED YET
d3.json("csa2010.json", function(json) {

	// turns strings into number values
	json.forEach(function(d) {
        d.wordcount = +d.wordcount
    });

});
*/



// Comments by Anthony: You have two different sections to the algorithm, first just checking if a neighborhood is a match, and then a more precise way to measure and sort them. The second option is more powerful and might be the right thing to do from the beginning. With it, if there are many matches, you can return only the best, and if there are few matches still return the best, even if they are not perfect.

// Consider just having one loop through all of the neighborhoods in which you test if it the neighborhoods are within the ranges and assign true/false values in each based on if they are within the ranges. Then also assign a score to each one based on some combination* of the distance from the range for each metric (as you have done in the second half). Then we can sort that array and return the best options.

// *Think about how multiple metrics can be combined into a single score. What makes a better neighborhood, one metric that's very bad, or two that are ok. This is also something that will be easier to experiment with once we have some code written so we can actually test results very quickly. 