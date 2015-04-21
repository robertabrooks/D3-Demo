function RunSomeD3() {

	//Example 1
	apply_border_to_all_divs();

	//Example 2
	hide_all_notREalAnimals();

	//Example 3
	change_background_of_ID();

	//Example 4
	//change_background_of_first_image_in_each_div();

	//Example 5
	//make_all_2nd_svgs_in_a_div_have_smaller_width();

	//Example 6
/*
	add_attribute_to_all_non_animals();
	identify_elements_with_custom_attributes();
*/

	//Example 7
	//identify_every_other_svg();

}


function apply_border_to_all_divs(){
	//Can select all of any node type
	d3.selectAll("div")
		.style("border", "2px solid");
}

function hide_all_notREalAnimals(){
	//Can select all of any node
	d3.selectAll(".notRealAnimal")
		.attr("display", "none "); //And hide them
}

function change_background_of_ID(){
	//Can select the first instance of a node
	d3.select("#img4")
		.style("background-color", "red"); 
}

function change_background_of_first_image_in_each_div(){
	// Can select from within a selection.
	// This does the sub-selection for all of the parent selection
	// So... for all divs, get the first image node
	d3.selectAll("div")
		.select("svg")
		.style("background-color", "blue");
}

function make_all_2nd_svgs_in_a_div_have_smaller_width(){
	//Can use all CSS selections such as :nth-child()
	d3.selectAll("svg:nth-child(2)")
		.select("image")
		.attr("width", "50%")
}

function add_attribute_to_all_non_animals(){

		//Can store selections in variables.
		var svgs = d3.selectAll("svg");

		//You can set custom attributes on nodes
		d3.selectAll(".notRealAnimal")
			.attr("animal", "no");
}

function identify_elements_with_custom_attributes(){
	//Can store selections in variables.
	var svgs = d3.selectAll("svg");

	svgs.each(function (d, i){
			//Within functions you can select the current node using d3.select(this).
			var thisNode = d3.select(this);

			if(thisNode.attr("animal") == "no"){
				thisNode.style("background-color", "red");	
			} else {
				thisNode.style("background-color", "green");	
			}
		});
}

function identify_every_other_svg(){
	//Can store selections in variables.
	var svgs = d3.selectAll("svg");

	svgs.select(function(d, i) { return i & 1 ? this : null; })
			.style("background-color", "red");
}
