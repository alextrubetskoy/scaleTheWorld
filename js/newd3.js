function bubbleVis() {
    // Define dimensions of visualization.
    var width = 900,
        height = 500;
    
    // [Tooltip will go here.]
    var tooltip = floatingTooltip('gates_tooltip', 150);

    // Define where the bubbles will go.
    // depending on what mode is selected.
    var center = {x: width / 2, y: height / 2};
    
    var sexesCenters = {
        'male': {x: width / 3, y: height / 2},
        'female': {x: 2 * width / 3, y: height / 2}
    };

    // Define locations for titles ("Male", "Female").
    var sexesTitleXpos = {
        'male': width / 3,
        'female': 2 * width / 3
    };
    
    // Damper for moving nodes.
    var damper = 0.102;
    
    // svg is the canvas, bubbles is the visual
    // and nodes is the data.
    var svg = null,
        bubbles = null,
        nodes = [];
    
    // "Charge" for each node; negative charge repels.
    // Bigger circles need more negative charges to prevent overlap.
    function charge(d) {
        return -Math.pow(d.radius, 2.0) / 5.5;
    }
    
    // Configuring force.
    var force = d3.layout.force()
        .size([width, height])
        .charge(charge)
        .gravity(-0.01)
        .friction(0.9);
    
    // Image append will go here.
    
    // This creates the data nodes.
    function createNodes(rawData) {
        //map() converts JSON into nodes.
        var myNodes = rawData.map(function(d){
            return {
                id:         d.id,
                radius:     (height / 7) / Math.sqrt(n/3.14),
                country:    d.country.name,
                sex:        d.sex,
                age:        d.age,
                income:     d.income,
                x:          Math.random() * 900,
                y:          Math.random() * 800
            };
        });
        
        return myNodes;
    }
    
    // Entry point into bubbles. I don't entirely understand this yet.
    var chart = function chart(selector, rawData) {
        nodes = createNodes(rawData);
        force.nodes(nodes);
        
        // Create svg element inside selector.
        svg = d3.select(selector)
            .append('svg')
            .attr('width', width)
            .attr('height', height);
        
        // ('Divs' [DOM elements] will represent nodes data?)
        bubbles = svg.selectAll('.bubble')
            .data(nodes, function(d) {return d.id; });
            
        // Create circle elements, each with a class 'bubble'.
        // One circle.bubble for each node.
        bubbles.enter().append('circle')
            .classed('bubble', true)
            .attr('r', 0)
            .attr('fill', 'transparent')
            .attr('stroke', 'grey')
            .attr('stroke-width', '2px')
            .on('mouseover', showDetails)
            .on('mouseout', hideDetails);
            
        // Fancy transition to make bubbles appear.
        bubbles.transition()
            .duration(2000)
            .attr('r', function (d) { return d.radius; });
            
        // Initial layout is one big group.
        groupBubbles();
    };
    
    // This function sets the visualization into 'single group' mode.
    // The sexes labels hide and nodes are all moved to the center.
    function groupBubbles() {
        hideSexes();
        
        force.on('tick', function(e) {
            bubbles.each(moveToCenter(e.alpha))
                .attr('cx', function(d) {return d.x; })
                .attr('cy', function(d) {return d.y; });
        });
        
        force.start();
    }
    
    // This is a helper function for 'single group' mode,
    // which moves everything to the center. alpha is a default parameter.
    function moveToCenter(alpha) {
        return function(d) {
            d.x = d.x + (center.x - d.x) * damper * alpha;
            d.y = d.y + (center.y - d.y) * damper * alpha;
        };
    }
    
    // Setting the visualization into 'split by sexes' mode.
    // Sexes labels appear and nodes move to sexes centers.
    function splitBySexes() {
        showSexes();
        
        force.on('tick', function(e) {
            bubbles.each(moveToSexes(e.alpha))
                .attr('cx', function(d) {return d.x; })
                .attr('cy', function(d) {return d.y; });
        });
        
        force.start();
    }
    
    // This is a helper function for 'split by sexes' mode.
    // It changes the position of each node so that they
    // go to the centers for each sex.
    function moveToSexes(alpha) {
        return function(d) {
            var target = sexesCenters[d.sex];
            d.x = d.x + (target.x - d.x) * damper * alpha;
            d.y = d.y + (target.y - d.y) * damper * alpha;
        };
    }
    
    // Function to hide sexes labels.
    function hideSexes() {
        svg.selectAll('.sex').remove();
    }
    
    // Function to show sexes labels.
    function showSexes() {
        var sexesData = d3.keys(sexesTitleXpos);
        var sexes = svg.selectAll('.sex')
            .data(sexesData);
            
        sexes.enter().append('text')
            .attr('class', 'sex')
            .attr('x', function(d) {return sexesTitleXpos[d]; })
            .attr('y', 40)
            .attr('text-anchor', 'middle')
            .text(function(d){return d; });
    }
    
    // When you mouse over a person's bubble, this function
    // displays their details in a tooltip.
    function showDetails(d) {
        // Changes the person's bubble outline to show you're hovering over it.
        d3.select(this).attr('stroke', 'yellow');
        
        var content = '<span class="name">Country: </span><span class="value">' +
                  d.country +
                  '</span><br/>' +
                  '<span class="name">Sex: </span><span class="value">' +
                  d.sex +
                  '</span><br/>' +
                  '<span class="name">Age: </span><span class="value">' +
                  d.age +
                  '</span>';
                  
        tooltip.showTooltip(content, d3.event);
    }
    
    // Function to hide tooltip.
    function hideDetails(d) {
        d3.select(this).attr('stroke', 'grey');
        tooltip.hideTooltip();
    }
    
    // Function to allow toggling display mode.
    // displayName is expected to be a string and either 'sex' or 'all'.
    chart.toggleDisplay = function(displayName) {
        if (displayName === 'sex') {
            splitBySexes();
        } else {
            groupBubbles();
        }
    };
    
    // Return the chart function
    return chart;
}

/*
 * Code to initialize visualization and some helper functions.
 */

var myBubbleVis = bubbleVis(),
    data = people;
    
// This makes the vis display in the #vis div.
myBubbleVis('#vis', data);

// Sets up the buttons.
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
        myBubbleVis.toggleDisplay(buttonId);
    });
}

// Set up the buttons.
setupButtons();