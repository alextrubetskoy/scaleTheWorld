var counter, force, h, looper, node, nodes, vis, w, radius, imgXY, n;

// Set svg dimensions
w = 900;

h = 500;

// Make bubble radius proportional to number of bubbles;
// more bubbles gives a smaller radius
radius = (h / 7) / Math.sqrt(n/3.14);

// Set image according to weird equation
imgXY =   5.641025638 * Math.pow(10,-8) * Math.pow(n, 5)
        - 1.743589743 * Math.pow(10,-5) * Math.pow(n, 4)
        + 2.085547785 * Math.pow(10,-3) * Math.pow(n, 3)
        - 1.231701631 * Math.pow(10,-1) * Math.pow(n, 2)
        + 3.881137528 * n
        - 48.4;

data = []
nodes = [];
data.people = [people];
data.nodes = [nodes];

// Tooltip
var div = d3.select("body")
  .append("div")	
  .attr("class", "tooltip")
  .style("opacity", 0);

node = void 0;

vis = d3.select("#vis").classed("svg-container", true).append("svg")
        .attr("preserveAspectRatio", "xMinYMin meet").attr("viewBox", "0 0 900 500").classed("svg-content-responsive", true);

vis.append("defs").append("clipPath").attr("id", "clip").append("circle").attr({
  cx: 30,
  cy: 30,
  r: radius
});

force = d3.layout.force().nodes(people).links([]).size([w, h]);

force.charge((radius * radius) / -4.5);

counter = 0;

looper = setInterval(function() {
  var groups;
  counter++;
  if (counter >= 100) {
    clearInterval(looper);
  }
  nodes.push({
    size: 1000
  });
  force.start();
  groups = vis.selectAll("g").data(people).enter().append("g").attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  }).call(force.drag);
  
  var tooltip = groups
  .on("mouseover", function(d) {
    div.transition()		
      .duration(200)		
      .style("opacity", .9);		
    div.html(d.country.name + "<br/>"  + d.sex + ", age " + d.age + "<br/> lives on $" + d.income + " a day")
      .style("left", (d3.event.pageX) + "px")		
      .style("top", (d3.event.pageY) + "px");	
  })
  .on("mouseout", function(d) {	
    div.transition()		
    .duration(500)		
    .style("opacity", 0);	
  });
  
  groups.append("image").attr({
    'xlink:href': function(d){return 'Faces/' + d.country.name + '/' + d.sex + '/' + d.age + '.png';},
    x: imgXY,
    y: imgXY,
    width: 2.5 * radius,
    height: 2.5 * radius
  }).style({
    'clip-path': 'url(#clip)'
  });
  return groups.append("svg:circle").attr({
    cx: 30,
    cy: 30,
    r: radius,
    width: 2 * radius,
    height: 2 * radius,
    fill: 'transparent'
  }).style({
    border: "solid",
    stroke: "grey",
    'stroke-width': "2px"
  });
}, 100);

var damper = 0.102

groupBubbles();

function groupBubbles() {
  //hideYears();

  force.on('tick', function (e) {
    nodes.each(moveToCenter(e.alpha))
      .attr('cx', function (d) { return d.x; })
      .attr('cy', function (d) { return d.y; });
  });

  force.start();
}

function moveToCenter(alpha) {
  return function (d) {
      d.x = d.x + (center.x - d.x) * damper * alpha;
      d.y = d.y + (center.y - d.y) * damper * alpha;
  };
}
  
function splitBubbles() {
  showYears();

  force.on('tick', function (e) {
    bubbles.each(moveToYears(e.alpha))
      .attr('cx', function (d) { return d.x; })
      .attr('cy', function (d) { return d.y; });
  });

  force.start();
}

/*
 * Sets up the layout buttons to allow for toggling between view modes.
 */
function setupButtons() {
  d3.select('#toolbar')
    .selectAll('.button')
    .on('click', function () {
      // Remove active class from all buttons
      d3.selectAll('.button').classed('active', false);
      // Find the button just clicked
      var button = d3.select(this);

      // Set it as the active button
      button.classed('active', true);

      // Get the id of the button
      var buttonId = button.attr('id');

      // Toggle the bubble chart based on
      // the currently clicked button.
      myBubbleChart.toggleDisplay(buttonId);
    });
}
setupButtons();