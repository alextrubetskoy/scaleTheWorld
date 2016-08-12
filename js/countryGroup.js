//--------------------------------------------
// UTILITY FUNCTIONS
//--------------------------------------------

// 1. F-Y SHUFFLE
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex; 
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

//--------------------------------------------
// GROUP COUNTRIES
//--------------------------------------------

var worldPopulation = (function(){
    var sum = 0;
    Object.keys(countries).forEach(function(key, index){
        sum += parseFloat(countries[key].population)
        return sum;});
    return sum;
})();

var threshold = worldPopulation / n

function similarity(c1, c2) {
    // Calculate similarity between two countries.
    var score = 0;
    if (c1.continent == c2.continent) {         // Compare continent
        score += 0.5;}
    if (c1.region == c2.region) {               // ... region
        score += 0.5;}
    if (c1.languageFamily== c2.languageFamily) { // ... languageFamily
        score += 0.5;}
    if (c1.languageGroup == c2.languageGroup) { // ... languageGroup
        score += 0.5;}
    if (Math.abs(c1.hdi - c2.hdi) < 0.5) {      // ... hdi
        score += 1 - Math.abs(2 * (c1.hdi - c2.hdi));}
    return score;
};

//console.log(similarity(countries[1], countries[3]), similarity(countries[1], countries[12]))

function highSimilarityArray(countries) {
    // Make an array where adjacent countries have high similarity
    keys    = shuffle(countries),
    bank    = keys.slice(1, keys.length),
    result  = [keys[0]];
    for (var i = 0; i < keys.length - 1; i++) {
        var compareTo = result[i];
        var simArray = bank.sort(function compare(a, b) {
            if (similarity(compareTo, a) < similarity(compareTo, b)) {
                return 1;}
            if (similarity(compareTo, a) > similarity(compareTo, b)) {
                return -1;}
            else {
                return 0;}
        });
        var closestMatch = simArray[0];
        result.push(closestMatch);

        var index = bank.indexOf(closestMatch);
        bank.splice(index, 1);
    }
    return result;
}

var hsa = highSimilarityArray(countries);
console.log(hsa);

//console.log(similarity(hsa[hsa.length-1], hsa[hsa.length-2]));

function change_pop(c, new_pop) {
    /* Return an identical country object, except with a new population */
    return country(c.name, new_pop, c.continent, c.region, c.languageFamily,
                   c.languageGroup, c.hdi, c.medianAge);
}

function group(countries) {
    // Return an array of arrays wherein each element array has the same
    // or similar total population as every other. Countries may be split in
    // the grouping process.
    var current_group = [];
    pop_so_far = 0;
    for (var i = 0; i < countries.length; i++) {
        var country = countries[i];
        if (country.population + pop_so_far < threshold) {
            // add the country to the current group and continue looping
            current_group.push(country);
            pop_so_far += country.population;
        } else if (country.population + pop_so_far === threshold) {
            // add the country to the current group
            current_group.push(country);
            // recursively create the rest of the groups
            var rest_of_groups = group(countries.slice(i + 1));
            // prepend the current group
            rest_of_groups.unshift(current_group);
            return rest_of_groups;
        } else {
            // split the country across the current group and the next group
            pop_taken = threshold - pop_so_far;
            pop_remaining = country.population - pop_taken;
            // add the country with enough pop to fill the current group
            current_group.push(change_pop(country, pop_taken));
            var rest_of_countries = countries.slice(i + 1);
            // add the country with the remaining pop
            rest_of_countries.unshift(change_pop(country, pop_remaining));
            // recursively create the rest of the groups
            var rest_of_groups = group(rest_of_countries);
            // prepend the current group
            rest_of_groups.unshift(current_group);
            return rest_of_groups;
        }
    }
    /* this handles the case where the population does not reach the
     * threshold */
    return [current_group];
}

var groupings = group(hsa);