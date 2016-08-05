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

// 2. GENERATING COUNTRIES
function country(population, continent, region, languageFamily, languageGroup, hdi) {
    return {
        'population': population,
        'continent': continent,
        'region': region,
        'languageFamily': languageFamily,
        'languageGroup': languageGroup,
        'hdi': hdi
    };
};

// Populations from Wikipedia, 4 August 2016
// Regions from UN Geoscheme
var countries = {
    'China':            country(1377829482, 'AS', 'EAS', 'ST', 'Sinitic',           0.727),
    'India':            country(1292826248, 'AS', 'SAS', 'IE', 'Indo-Iranian',      0.609),
    'United States':    country(324153000,  'AM', 'NAM', 'IE', 'Germanic',          0.915),
    'Indonesia':        country(258705000,  'AS', 'SEA', 'AN', 'Malayo-Polynesian', 0.684),
    'Brazil':           country(206253049,  'AM', 'SAM', 'IE', 'Romance',           0.755),
    'Pakistan':         country(194484703,  'AS', 'SAS', 'IE', 'Indo-Iranian',      0.538),
    'Nigeria':          country(186988000,  'AF', 'WAF', 'NC', 'South Volta',       0.514),
    'Bangladesh':       country(161157122,  'AS', 'SAS', 'IE', 'Indo-Iranian',      0.570),
    'Russia':           country(146599183,  'EU', 'EEU', 'IE', 'Slavic',            0.798),
    'Japan':            country(126990000,  'AS', 'EAS', 'JA', 'Japonic',           0.891),
    'Mexico':           country(122273473,  'AM', 'CAM', 'IE', 'Romance',           0.756),
    'Philippines':      country(103399400,  'AS', 'SEA', 'AN', 'Malayo-Polynesian', 0.668),
    'Vietnam':          country(92700000,   'AS', 'SEA', 'AA', 'Vietic',            0.666),
    'Ethiopia':         country(92206005,   'AF', 'EAF', 'AF', 'Semitic',           0.442),
    'Egypt':            country(91345763,   'AF', 'NAF', 'AF', 'Semitic',           0.690),
    'DR Congo':         country(85026000,   'AF', 'MAF', 'NC', 'South Volta',       0.433),
    'Germany':          country(81770900,   'EU', 'WEU', 'IE', 'Germanic',          0.916),
    'Iran':             country(79433700,   'AS', 'SAS', 'IE', 'Indo-Iranian',      0.766),
    'Turkey':           country(78741053,   'AS', 'WAS', 'TU', 'Oghuz',             0.761),
    'France':           country(66730000,   'EU', 'WEU', 'IE', 'Romance',           0.888),
    'Thailand':         country(65343200,   'AS', 'SEA', 'TK', 'Tai',               0.726),
    'United Kingdom':   country(65110000,   'EU', 'NEU', 'IE', 'Germanic',          0.907),         
    'Italy':            country(60665551,   'EU', 'SEU', 'IE', 'Romance',           0.873),
    'South Africa':     country(55653654,   'AF', 'SAF', 'NC', 'South Volta',       0.666),
    'Myanmar':          country(51486253,   'AS', 'SEA', 'ST', 'Tibeto-Burman',     0.536),
    'South Korea':      country(50801405,   'AS', 'EAS', 'KO', 'Korean',            0.898),
    'Colombia':         country(48797866,   'AM', 'SAM', 'IE', 'Romance',           0.720),
    'Tanzania':         country(48775567,   'AF', 'EAF', 'NC', 'South Volta',       0.521),
    'Spain':            country(46438422,   'EU', 'SEU', 'IE', 'Romance',           0.876),
    'Kenya':            country(44156577,   'AF', 'EAF', 'NC', 'South Volta',       0.548)
};

var worldPopulation = (function(){
    var sum = 0;
    Object.keys(countries).forEach(function(key, index){
        sum += parseFloat(countries[key].population)
        return sum;});
    return sum;
})();

var threshold = worldPopulation / n

console.log(worldPopulation, threshold);

function similarity(country1, country2) {
    var c1 = countries[country1],
        c2 = countries[country2];
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

console.log(similarity('India', 'United States'), similarity('India', 'Nigeria'))

function highSimilarityArray(countries) {
    // Make an array where adjacent countries have high similarity
    var keys    = Object.keys(countries),
        keys    = shuffle(keys),
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
console.log(hsa)

console.log(similarity(hsa[hsa.length-1], hsa[hsa.length-2]));