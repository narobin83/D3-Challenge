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
    
    d3.csv("assets/data.csv").then(function(healthData) {
        console.log(healthData);

        healthData.forEach(function(data) {
          data.smokes = +data.smokes;
          data.age = +data.age;
        });

        var xLinearScale = d3.scaleLinear()
          .domain(d3.extent(healthData, d => d.age))
          .range([0, width]);
        
        var yLinearScale = d3.scaleLinear()
          .domain([8, d3.max(healthData, d => d.smokes)])
          .range([height, 0]);
        
        var xAxis = d3.axisBottom(xLinearScale);
        var yAxis = d3.axisLeft(yLinearScale);

        chartGroup.append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(xAxis);


    })
};