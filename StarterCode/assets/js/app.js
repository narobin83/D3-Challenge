// @TODO: YOUR CODE HERE!

function makeResponsive() {
    var svgArea = d3.select("#scatter").select("svg");

    if (!svgArea.empty()) {
        svgArea.remove();
        // loadChart()
      }

    var svgWidth = window.innerWidth;
    var svgHeight = window.innerHeight;

    
}