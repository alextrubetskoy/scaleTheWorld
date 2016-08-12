//--------------------------------------------
// VARIOUS JSON DATA
//--------------------------------------------

// 1. Age pyramid

// 2. Country populations (13 July 2016)
var countryPops = {
    "China": 1382323332,
    "India": 1326801576,
    "United States": 324118787,
    "Indonesia": 260581100,
    "Brazil": 209567920,
    "Pakistan": 192826502,
    "Nigeria": 186987563,
    "Bangladesh": 162910864,
    "Russia": 143439832,
    "Mexico": 128632004,
    "Japan": 126323715,
    "Philippines": 102250133,
    "Ethiopia": 101853268,
    "Vietnam": 94444200,
    "Egypt": 93383574,
    "Germany": 80682351,
    "Iran": 80043146,
    "DR Congo": 79722624,
    "Turkey": 79622062,
    "Thailand": 68146609,
    "United Kingdom": 65111143,
    "France": 64668129,
    "Italy": 59801004,
    "Tanzania": 55155473,
    "South Africa": 54978907,
    "Myanmar": 54363426,
    "South Korea": 50503933,
    "Colombia": 48654392,
    "Kenya": 47251449,
    "Spain": 46064604,
    "Ukraine": 44624373,
    "Argentina": 43847277,
    "Sudan": 41175541,
    "Algeria": 40375954,
    "Uganda": 40322768,
    "Poland": 38593161,
    "Iraq": 37547686,
    "Canada": 36286378,
    "Morocco": 34817065,
    "Afghanistan": 33369945,
    "Saudi Arabia": 32157974,
    "Peru": 31774225,
    "Venezuela": 31518855,
    "Malaysia": 30751602,
    "Uzbekistan": 30300446,
    "Nepal": 28850717,
    "Mozambique": 28751362,
    "Ghana": 28033375,
    "Yemen": 27477600,
    "Angola": 25830958,
    "North Korea": 25281327,
    "Madagascar": 24915822,
    "Australia": 24309330,
    "Cameroon": 23924407,
    "Taiwan": 23395600,
    "Côte d'Ivoire": 23254184,
    "Sri Lanka": 20810816,
    "Niger": 20715285,
    "Romania": 19372734,
    "Burkina Faso": 18633725,
    "Syria": 18563595,
    "Mali": 18134835,
    "Chile": 18131850,
    "Kazakhstan": 17855384,
    "Malawi": 17749826,
    "Netherlands": 16979729,
    "Zambia": 16717332,
    "Guatemala": 16672956,
    "Ecuador": 16385450,
    "Zimbabwe": 15966810,
    "Cambodia": 15827241,
    "Senegal": 15589485,
    "Chad": 14496739,
    "Guinea": 12947122,
    "South Sudan": 12733427,
    "Rwanda": 11882766,
    "Burundi": 11552561,
    "Cuba": 11392889,
    "Tunisia": 11375220,
    "Belgium": 11371928,
    "Benin": 11166658,
    "Somalia": 11079013,
    "Greece": 10919459,
    "Bolivia": 10888402,
    "Haiti": 10848175,
    "Dominican Republic": 10648613,
    "Czech Republic": 10548058,
    "Portugal": 10304434,
    "Azerbaijan": 9868447,
    "Sweden": 9851852,
    "Hungary": 9821318,
    "Belarus": 9481521,
    "United Arab Emirates": 9266971,
    "Serbia": 8812705,
    "Tajikistan": 8669464,
    "Austria": 8569633,
    "Switzerland": 8379477,
    "Israel": 8192463,
    "Honduras": 8189501,
    "Papua New Guinea": 7776115,
    "Jordan": 7747800,
    "Togo": 7496833,
    "Hong Kong": 7346248,
    "Bulgaria": 7097796,
    "Laos": 6918367,
    "Paraguay": 6725430,
    "Sierra Leone": 6592102,
    "Libya": 6330159,
    "Nicaragua": 6150035,
    "El Salvador": 6146419,
    "Kyrgyzstan": 6033769,
    "Lebanon": 5988153,
    "Singapore": 5696506,
    "Denmark": 5690750,
    "Finland": 5523904,
    "Turkmenistan": 5438670,
    "Slovakia": 5429418,
    "Eritrea": 5351680,
    "Norway": 5271958,
    "Central African Republic": 4998493,
    "Costa Rica": 4857218,
    "State of Palestine": 4797239,
    "Congo": 4740992,
    "Ireland": 4713993,
    "Oman": 4654471,
    "Liberia": 4615222,
    "New Zealand": 4565185,
    "Croatia": 4225001,
    "Mauritania": 4166463,
    "Moldova": 4062862,
    "Kuwait": 4007146,
    "Panama": 3990406,
    "Georgia": 3979781,
    "Bosnia and Herzegovina": 3802134,
    "Puerto Rico": 3680772,
    "Uruguay": 3444071,
    "Armenia": 3026048,
    "Mongolia": 3006444,
    "Albania": 2903700,
    "Lithuania": 2850030,
    "Jamaica": 2803362,
    "Namibia": 2513981,
    "Botswana": 2303820,
    "Qatar": 2291368,
    "Lesotho": 2160309,
    "Macedonia": 2081012,
    "Slovenia": 2069362,
    "Gambia": 2054986,
    "Latvia": 1955742,
    "Guinea-Bissau": 1888429,
    "Gabon": 1763142,
    "Bahrain": 1396829,
    "Trinidad and Tobago": 1364973,
    "Estonia": 1309104,
    "Swaziland": 1304063,
    "Mauritius": 1277459,
    "Timor-Leste": 1211245,
    "Cyprus": 1176598,
    "Djibouti": 899598,
    "Fiji": 897537,
    "Equatorial Guinea": 869587,
    "Réunion": 867214,
    "Comoros": 807118,
    "Bhutan": 784103,
    "Guyana": 770610,
    "Montenegro": 626101,
    "Macao": 597126,
    "Solomon Islands": 594934,
    "Western Sahara": 584206,
    "Luxembourg": 576243,
    "Suriname": 547610,
    "Cabo Verde": 526993,
    "Guadeloupe": 470547,
    "Brunei": 428874,
    "Malta": 419615,
    "Martinique": 396364,
    "Bahamas": 392718,
    "Maldives": 369812,
    "Belize": 366942,
    "Iceland": 331778,
    "French Polynesia": 285735,
    "Barbados": 285006,
    "French Guiana": 275688,
    "Vanuatu": 270470,
    "New Caledonia": 266431,
    "Mayotte": 246496,
    "Samoa": 194523,
    "Sao Tome and Principe": 194390,
    "Saint Lucia": 186383,
    "Guam": 172094,
    "Channel Islands": 164466,
    "Curaçao": 158635,
    "Kiribati": 114405,
    "St. Vincent & Grenadines": 109644,
    "Grenada": 107327,
    "Tonga": 106915,
    "United States Virgin Islands": 106415,
    "Micronesia": 104966,
    "Aruba": 104263,
    "Seychelles": 97026,
    "Antigua and Barbuda": 92738,
    "Isle of Man": 88421,
    "Dominica": 73016,
    "Andorra": 69165,
    "Bermuda": 61662,
    "Cayman Islands": 60764,
    "Greenland": 56196,
    "Saint Kitts and Nevis": 56183,
    "American Samoa": 55602,
    "Northern Mariana Islands": 55389,
    "Marshall Islands": 53069,
    "Faeroe Islands": 48239,
    "Sint Maarten": 39538,
    "Monaco": 37863,
    "Liechtenstein": 37776,
    "Turks and Caicos Islands": 34904,
    "Gibraltar": 32373,
    "San Marino": 31950,
    "British Virgin Islands": 30659,
    "Caribbean Netherlands": 25328,
    "Palau": 21501,
    "Cook Islands": 20948,
    "Anguilla": 14763,
    "Wallis and Futuna": 13112,
    "Nauru": 10263,
    "Tuvalu": 9943,
    "Saint Pierre and Miquelon": 6301,
    "Montserrat": 5154,
    "Saint Helena": 3956,
    "Falkland Islands": 2912,
    "Niue": 1612,
    "Tokelau": 1276
  };

// 3. Country income ranks (based on HDI)
var ranksDict = {
    "Norway": 1,
    "Australia": 2,
    "Switzerland": 3,
    "Denmark": 4,
    "Netherlands": 5,
    "Germany": 6,
    "Ireland": 6,
    "United States": 8,
    "Canada": 9,
    "New Zealand": 9,
    "Singapore": 11,
    "Hong Kong": 12,
    "Macau": 12,
    "Liechtenstein": 13,
    "Sweden": 14,
    "United Kingdom": 14,
    "Iceland": 16,
    "South Korea": 17,
    "Israel": 18,
    "Luxembourg": 19,
    "Japan": 20,
    "Belgium": 21,
    "France": 22,
    "Austria": 23,
    "Finland": 24,
    "Slovenia": 25,
    "Spain": 26,
    "Italy": 27,
    "Czech Republic": 28,
    "Greece": 29,
    "Estonia": 30,
    "Brunei": 31,
    "Cyprus": 32,
    "Qatar": 32,
    "Andorra": 34,
    "Slovakia": 35,
    "Poland": 36,
    "Lithuania": 37,
    "Malta": 37,
    "Saudi Arabia": 39,
    "Argentina": 40,
    "United Arab Emirates": 41,
    "Chile": 42,
    "Portugal": 43,
    "Hungary": 44,
    "Bahrain": 45,
    "Latvia": 46,
    "Croatia": 47,
    "Kuwait": 48,
    "Montenegro": 49,
    "Belarus": 50,
    "Russia": 50,
    "Oman": 52,
    "Romania": 52,
    "Uruguay": 52,
    "Bahamas": 55,
    "Kazakhstan": 56,
    "Barbados": 57,
    "Antigua and Barbuda": 58,
    "Bulgaria": 59,
    "Palau": 60,
    "Panama": 60,
    "Malaysia": 62,
    "Mauritius": 63,
    "Seychelles": 64,
    "Trinidad and Tobago": 64,
    "Serbia": 66,
    "Cuba": 67,
    "Lebanon": 67,
    "Costa Rica": 69,
    "Iran": 69,
    "Venezuela": 71,
    "Turkey": 72,
    "Sri Lanka": 73,
    "Mexico": 74,
    "Brazil": 75,
    "Georgia": 76,
    "Saint Kitts and Nevis": 77,
    "Azerbaijan": 78,
    "Grenada": 79,
    "Jordan": 80,
    "Macedonia": 81,
    "Ukraine": 81,
    "Algeria": 83,
    "Peru": 84,
    "Albania": 85,
    "Armenia": 85,
    "Bosnia and Herzegovina": 85,
    "Ecuador": 88,
    "Saint Lucia": 89,
    "China": 90,
    "Fiji": 90,
    "Mongolia": 90,
    "Thailand": 93,
    "Dominica": 94,
    "Libya": 94,
    "Tunisia": 96,
    "Colombia": 97,
    "Saint Vincent and the Grenadines": 97,
    "Jamaica": 99,
    "Tonga": 100,
    "Belize": 101,
    "Dominican Republic": 101,
    "Suriname": 103,
    "Maldives": 104,
    "Samoa": 105,
    "Botswana": 106,
    "Moldova": 107,
    "Egypt": 108,
    "Turkmenistan": 109,
    "Gabon": 110,
    "Indonesia": 110,
    "Paraguay": 112,
    "Palestine": 113,
    "Uzbekistan": 114,
    "Philippines": 115,
    "El Salvador": 116,
    "South Africa": 116,
    "Vietnam": 116,
    "Bolivia": 119,
    "Kyrgyzstan": 120,
    "Iraq": 121,
    "Cape Verde": 122,
    "Micronesia": 123,
    "Guyana": 124,
    "Nicaragua": 125,
    "Morocco": 126,
    "Namibia": 126,
    "Guatemala": 128,
    "Tajikistan": 129,
    "India": 130,
    "Honduras": 131,
    "Bhutan": 132,
    "Timor-Leste": 133,
    "Syria": 134,
    "Vanuatu": 134,
    "Congo": 136,
    "Kiribati": 137,
    "Equatorial Guinea": 138,
    "Zambia": 139,
    "Ghana": 140,
    "Laos": 141,
    "Bangladesh": 142,
    "Cambodia": 143,
    "Sao Tome and Principe": 143,
    "Kenya": 145,
    "Nepal": 145,
    "Pakistan": 147,
    "Myanmar": 148,
    "Angola": 149,
    "Swaziland": 150,
    "Tanzania": 151,
    "Nigeria": 152,
    "Cameroon": 153,
    "Madagascar": 154,
    "Zimbabwe": 155,
    "Mauritania": 156,
    "Solomon Islands": 156,
    "Papua New Guinea": 158,
    "Comoros": 159,
    "Yemen": 160,
    "Lesotho": 161,
    "Togo": 162,
    "Haiti": 163,
    "Rwanda": 163,
    "Uganda": 163,
    "Benin": 166,
    "Sudan": 167,
    "Djibouti": 168,
    "South Sudan": 169,
    "Senegal": 170,
    "Afghanistan": 171,
    "Côte d'Ivoire": 172,
    "Malawi": 173,
    "Ethiopia": 174,
    "Gambia": 175,
    "DR Congo": 176,
    "Liberia": 177,
    "Guinea-Bissau": 178,
    "Mali": 179,
    "Mozambique": 180,
    "Sierra Leone": 181,
    "Guinea": 182,
    "Burkina Faso": 183,
    "Burundi": 184,
    "Chad": 185,
    "Eritrea": 186,
    "Central African Republic": 187,
    "Niger": 188,
    "North Korea": 140,
    "Marshall Islands": 90,
    "Monaco": 1,
    "Nauru": 90,
    "San Marino": 20,
    "Somalia": 189,
    "Tuvalu": 100,
    "Taiwan": 30
  }
  
// 4. Mean incomes for big countries
var BCMeanIncomes = {
  "China": [
            int_in_range()],
  "India": 4,
  "United States": 52,
  "Indonesia": 6,
  "Brazil": 12,
  "Pakistan": 4,
  "Nigeria": 2,
  "Bangladesh": 3,
  "Russia": 18,
  "Mexico": 8,
  "Japan": 48
}

//--------------------------------------------
// BASIC FUNCTIONS
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

// 2. GET RANDINT IN RANGE
function int_in_range(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3. WEIGHTED RANDOM
var rand = function(min, max) {
    return Math.random() * (max - min) + min;
};
 
var getRandomItem = function(list, weight) {
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

// 4. TEST IF NEEDLE IN HAYSTACK
var contains = function(needle) {
    // Per spec, the way to identify NaN is that it is not equal to itself
    var findNaN = needle !== needle;
    var indexOf;

    if(!findNaN && typeof Array.prototype.indexOf === 'function') {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function(needle) {
            var i = -1, index = -1;

            for(i = 0; i < this.length; i++) {
                var item = this[i];

                if((findNaN && item !== item) || item === needle) {
                    index = i;
                    break;
                }
            }

            return index;
        };
    }

    return indexOf.call(this, needle) > -1;
};

// 5. RETURN UNIQUES ARRAY
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

// 6. FIND CLOSEST NUMBER
function getClosestNum(num, ar)
{
    var i = 0, closest, closestDiff, currentDiff;
    if(ar.length)
    {
        closest = ar[0];
        for(i;i<ar.length;i++)
        {           
            closestDiff = Math.abs(num - closest);
            currentDiff = Math.abs(num - ar[i]);
            if(currentDiff < closestDiff)
            {
                closest = ar[i];
            }
            closestDiff = null;
            currentDiff = null;
        }
        //returns first element that is closest to number
        return closest;
    }
    //no length
    return false;
}

// 7. CREATE FREQUENCY ARRAY
function getFreqs(arr) {
    var a = [], b = [], prev;
    
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    
    return [a, b];
}

//--------------------------------------------
// DEFINE FUNCTIONS FOR CREATING PEOPLE
//--------------------------------------------

// 1. GETTING GUARANTEED COUNTRIES
//   a. Set threshold
var threshold = Math.floor(7436089000 / n)
console.log(threshold)
//   b. Get guaranteed countries
function getGuaranteedCountries() {
  result = [];
  Object.keys(countryPops).forEach(function(key,index) {
    var peopleAmt = Math.round(countryPops[key] / threshold) * ((Math.floor(countryPops[key] / threshold) / Math.floor(countryPops[key] / threshold)) || 0);
    var countryPeople = Array(peopleAmt).fill(key);
    result = result.concat(countryPeople);
  });
  return result;
};

// 2. EXTRACTING BIG COUNTRIES
//   a. Get freq array
var freqs = getFreqs(guaranteedCountries); console.log(freqs);
//   b. Make new Big Countries array
function getBigCountries() {
  result = [];
  
}


// SEXES

// Function to make equal number of males and females

function makeSexes() {
  result = []
  coin = ["male", "female"]
  result = Array(Math.floor(n/2)).fill("male").concat(Array(Math.floor(n/2)).fill("female"))
  result = result.concat(coin[Math.round(Math.random())])
  return result
}

// AGES

// Function to make big population pyramid (7,304 values)
var popPyramid = [];
var ageAmtsLength = ageAmts.length;
for (var i = 0; i < ageAmtsLength; i++) {
  var pyramidStep = Array(ageAmts[i].amt).fill(ageAmts[i].age);
  var popPyramid = popPyramid.concat(pyramidStep);
};

// Function to make age interval bounds
function makeAgeInts() {
  var interval = Math.floor(7304 / n);
  var arr = [0];
  for (var i = 1; i < n; i++) {
    var bound = popPyramid[i * interval];
    arr = arr.concat(bound, bound + 1);
  };
  arr = arr.concat(85);
  return arr;
};

// Function to choose ages within intervals
function makeAges() {
  var arr = [];
  for (var i = 0; i < n; i++) {
    var age = int_in_range(ints[(2 * i)], ints[2 * i + 1])
    arr.push(age);
  };
  return arr;
};

// INCOMES

// Create dollars per day

var incomes = [
    int_in_range(1, 2),
    int_in_range(2, 3),
    int_in_range(3, 4),
    int_in_range(4, 5),
    int_in_range(5, 6),
    int_in_range(7, 8),
    int_in_range(9, 10),
    int_in_range(11, 17),
    int_in_range(18, 45),
    int_in_range(46, 150),
];

// Get countries
function getCountries() {
  var result = [];

  for (var i=0; i<populations.length; i++) {
    var pop = populations[i];
    var sum = 0.0;

    // First compute the sum of all populations for the slot
    for (var j=0; j<pop.length; j++) {
      var country = pop[j];
        sum += country;
    }

    // Now turn each population into a weight
    var weights = [];
    for (var j=0; j<pop.length; j++) {
      var country = pop[j];
        weights.push(country/sum);
    }

    var randomCountry = getRandomItem(slots[i], weights);
    result.push(randomCountry);
  }
  return result;
}

// Assign countries to people
// (create list of country objects, with ranks)
function countryRanks() {
    var countriesRanks = [];
    
    for (var i = 0; i < n; ++i){
        var country = countries[i]
        countriesRanks[i] =  {};
        countriesRanks[i].country    = country;
        countriesRanks[i].rank       = ranksDict[country];
    }
    return countriesRanks;
}

// (add country to income-sorted people)
function attachCountry(peopleList) {
    for (var i = 0; i < n; ++i){
        var person = peopleList[i];
        var cRank = cRanks[i];
        person.country = cRank.country;
    }
};

// Function for creating n people
function make_people() {
    var people = [];
    
    for (var i = 0; i < n; i++){
   people[i] =  {};
        people[i].sex       = sexes[i];
        people[i].age       = ages[i];
        people[i].income    = incomes[i];
    }
    return people;
}

//--------------------------------------------
// CREATING THE PEOPLE
//--------------------------------------------

// Getting the Guaranteed Countries
var guaranteedCountries = getGuaranteedCountries();
console.log(guaranteedCountries);

// Isolate Big Countries
var bigCountries = getBigCountries();
console.log(bigCountries)

function computerAlgorithm(n) {
  return n;
}


ints = makeAgeInts();

var sexes = makeSexes();
var ages = makeAges();

// Shuffle everything
shuffle(sexes);
shuffle(ages);
shuffle(incomes);

// Make people
var people = make_people();

// Add ID's
function add_ids(d) {    
   for (var i = 0; i < 10; ++i){ //n=10 here
        d[i].id       = i + 1;
   }
    return d;
};

add_ids(people);

console.log(people);

// (sort people by income ascending)
people.sort(function(a, b) {
    return parseFloat(a.income) - parseFloat(b.income);
});

// (sort countriesRanks by rank descending)
cRanks.sort(function(a, b) {
    return parseFloat(b.rank) - parseFloat(a.rank);
});

var cRanks = countryRanks()
console.log(cRanks)
attachCountry(people);