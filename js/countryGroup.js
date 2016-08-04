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
    'China':        country(1377829482, 'AS', 'EAS', 'ST', 'Sinitic',           0.727),
    'India':        country(1292826248, 'AS', 'SAS', 'IE', 'Indo-Iranian',      0.609),
    'United States':country(324153000,  'NA', 'NAM', 'IE', 'Germanic',          0.915),
    'Indonesia':    country(258705000,  'AS', 'SEA', 'AN', 'Malayo-Polynesian', 0.684),
    'Brazil':       country(206253049,  'SA', 'SAM', 'IE', 'Romance',           0.755),
    'Pakistan':     country(194484703,  'AS', 'SAS', 'IE', 'Indo-Iranian',      0.538),
    'Nigeria':      country(186988000,  'AF', 'WAF', 'NC', 'South Volta',       0.514),
    'Bangladesh':   country(161157122,  'AS', 'SAS', 'IE', 'Indo-Iranian',      0.570),
    'Russia':       country(146599183,  'EU', 'EEU', 'IE', 'Slavic',            0.798),
    'Japan':        country(126990000,  'AS', 'EAS', 'JA', 'Japonic',           0.891),
    'Mexico':       country(122273473,  'NA', 'CAM', 'IE', 'Romance',           0.756),
    'Philippines':  country(103399400,  'AS', 'SEA', 'AN', 'Malayo-Polynesian', 0.668),
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
    // Calculate similarity between two countries.
    var score = 0;
    // Compare continent
    var c1 = country1.continent,
        c2 = country2.continent;
    if (c1 == c2) {
        score += 0.5;}
    else {};
    // ... region
    var r1 = country1.region,
        r2 = country2.region;
    if (r1 == r2) {
        score += 0.5;}
    else {};
    // ... languageFamily
    var lf1 = country1.languageFamily,
        lf2 = country2.languageFamily;
    if (lf1==lf2) {
        score += 0.5;}
    else{};
    // ... languageGroup
    var lg1 = country1.languageGroup,
        lg2 = country2.languageGroup;
    if (lg1 == lg2) {
        score += 0.5;}
    else {};
    // ... hdi
    var hdi1 = country1.hdi,
        hdi2 = country2.hdi;
    if (Math.abs(hdi1 - hdi2) < 0.5) {
        score += 1 - Math.abs(2 * (hdi1 - hdi2));
    }
    else {};
    return score;
};

console.log(similarity(countries.Brazil, countries.Russia), similarity(countries.Brazil, countries.Nigeria))

function highSimilarityArray(countries) {
    // Make an array where adjacent countries have high similarity
    array = []
    
}