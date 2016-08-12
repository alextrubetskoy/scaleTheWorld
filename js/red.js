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

//-----------------------------------------------------
console.log(groupings);


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

var selectedCountries = selectCountries(groupings);
selectedCountries.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} ); 

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

var sexes = makeSexes();

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
    return result;
};

var ages = shuffle(makeAges());

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

var people = makePeople(ages);