// @TODO: YOUR CODE HERE!

function makeResponsive() {
    var svgArea = d3.select("#scatter").select("svg");

    if (!svgArea.empty()) {
        svgArea.remove();
        // loadChart()
      }

    var svgWidth = window.innerWidth;
    var svgHeight = window.innerHeight;

    var margin = {
        top: 50,
        bottom: 50,
        right: 50,
        left: 50
      };

    var height = svgHeight - margin.top - margin.bottom;
    var width = svgWidth - margin.left - margin.right;

    var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

    var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);
    
    
}