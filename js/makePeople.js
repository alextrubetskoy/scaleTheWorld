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
}

// 2. WEIGHTED RANDOM
var rand = function(min, max) {
    return Math.random() * (max - min) + min;
};
 
var weightedRandom = function(list, weight) {
    var total_weight = weight.reduce(function (prev, cur, i, arr) {
        return prev + cur;
    });
     
    var random_num = rand(0, total_weight);
    var weight_sum = 0;
    //console.log(random_num)
     
    for (var i = 0; i < list.length; i++) {
        weight_sum += weight[i];
        weight_sum = +weight_sum.toFixed(2);
         
        if (random_num <= weight_sum) {
            return list[i];
        }
    }
};

// 3. GET RANDINT IN RANGE
function intInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//--------------------------------------------
// FUNCTIONS FOR GROUPING COUNTRIES
//--------------------------------------------
// 1. SIMILARITY BETWEEN COUNTRIES
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

// 2. MAKE AN ARRAY WHERE ADJACENT COUNTRIES HAVE HIGH SIMILARITY 
function highSimilarityArray(countries) {
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

// 3. RETURN IDENTICAL COUNTRY OBJECT, EXCEPT WITH A NEW POPULATION
function change_pop(c, new_pop) {
    return country(c.name, new_pop, c.continent, c.region, c.languageFamily,
                   c.languageGroup, c.hdi, c.medianAge);
}

// 4. GROUP THE COUNTRIES
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
    // If population doesn't reach threshold:
    return [current_group];
}

//--------------------------------------------
// FUNCTIONS FOR CREATING PEOPLE
//--------------------------------------------
// 1. SELECT COUNTRIES
function selectCountries(groupings) {
    var result = [];
    for (var i = 0; i < n; i++) {
        var list = groupings[i],
            weights = groupings[i].map(function(a) {return a.population;});
        var selectedCountry = weightedRandom(list, weights);
        result.push(selectedCountry);
    }
    return result;
}

// 2. MAKE SEXES
function makeSexes() {
    var result = [];
    for (var i = 0; i < n; i++) {
        if (i & 1) { // ODD
            result.push('male');
        }
        else { // EVEN
            result.push('female');
        }
    }
    if (Math.random() < 0.5) {
        result.unshift('male');
        result.pop();
    }
    return result;
};

// 3. MAKE AGES
function makeAges() {
    var popPyramid = [],
        ageAmtsLength = ageAmts.length,
        interval = Math.floor(7304 / n),
        intervalsArray = [0],
        result = [];
    // First make population pyramid array (7,304 values),
    for (var i = 0; i < ageAmtsLength; i++) {
        var pyramidStep = Array(ageAmts[i].amt).fill(ageAmts[i].age);
        var popPyramid = popPyramid.concat(pyramidStep);
    };
    // Then get age intervals, from which to choose randoms,
    for (var i = 1; i < n; i++) {
        var bound = popPyramid[i * interval];
        intervalsArray = intervalsArray.concat(bound, bound + 1);
    };
    intervalsArray = intervalsArray.concat(85);
    // Then choose ages.
    for (var i = 0; i < n; i++) {
        var age = intInRange(intervalsArray[(2 * i)], intervalsArray[2 * i + 1])
        result.push(age);
    };
    var result = shuffle(result);
    return result;
};

// 4. MAKE PEOPLE
function makePeople(ages) {
    var ageBank = ages,
    people = [];
    for (var i = 0; i < n; i++) {
        var person = {};
        person.id = i;
        person.country = selectedCountries[i];
        person.sex = sexes[i];
        if (person.id & 1) {
            person.age = ageBank.find(function(a) {
            return a < person.country.medianAge;
            });
        }
        else {
            person.age = ageBank.find(function(a) {
                return a > person.country.medianAge;
            });
        }
        if (typeof person.age == 'undefined') {
            person.age = ageBank[ageBank.length - 1];
        }
        var index = ageBank.indexOf(person.age);
        ageBank.splice(index, 1);
        people.push(person);
    }
  return people
};

//--------------------------------------------
// GROUP COUNTRIES AND MAKE PEOPLE
//--------------------------------------------
var worldPopulation = (function(){
    var sum = 0;
    Object.keys(countries).forEach(function(key, index){
        sum += parseFloat(countries[key].population)
        return sum;});
    return sum;
})();
var threshold = worldPopulation / n,
    hsa = highSimilarityArray(countries),
    groupings = group(hsa);

var selectedCountries = selectCountries(groupings);
selectedCountries.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
var sexes = makeSexes(),
    ages = makeAges(),
    people = makePeople(ages);
