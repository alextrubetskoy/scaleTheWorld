// 3. WEIGHTED RANDOM
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

console.log(groupings);

function selectCountries(groupings) {
    var result = [];
    for (var i = 0; i < n; i++) {
        var list = groupings[i].map(function(a) {return a.name;}),
            weights = groupings[i].map(function(a) {return a.population;});
        var selectedCountry = weightedRandom(list, weights);
        result.push(selectedCountry);
    }
    return result;
}

var selectedCountries = selectCountries(groupings);
selectedCountries.sort();

function sexes() {
    var result = [];
    for (var i = 0; i < n; i++) {
        if (i & 1) {
            result.push('male');
        }
        else {
            result.push('female');
        }
    }
    if (Math.random() < 0.5) {
        result.unshift('male');
        result.pop();
    }
    return result;
};

var sexes = sexes();