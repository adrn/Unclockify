var ra = $("tr:contains(Right ascension) td")[0];
var dec = $("tr:contains(Declination) td")[0];

// Parse right ascension
var breakRA = ra.innerHTML.replace(/\s/g, '&nbsp;').split('&nbsp;');

var h = parseFloat(breakRA[0].split('<sup>')[0]),
    m = parseFloat(breakRA[1].split('<sup>')[0]),
    s = parseFloat(breakRA[2].split('<sup>')[0]);

var raDeg = h;
if (!isNaN(m)) {
    raDeg += m/60.;
}

if (!isNaN(s)) {
    raDeg += s/3600.;
}
raDeg *= 15.; // convert hours to degrees

// Parse Declination
var breakDec = dec.innerHTML.replace(/\s/g, '&nbsp;').split('&nbsp;');

var d = parseFloat(breakDec[0].split('<sup>')[0]),
    m = parseFloat(breakDec[1].split('<sup>')[0]),
    s = parseFloat(breakDec[2].split('<sup>')[0]);

var decDeg = d;
if (!isNaN(m)) {
    decDeg += m/60.;
}

if (!isNaN(s)) {
    decDeg += s/3600.;
}

$(ra).html(raDeg.toFixed(6));
$(dec).html(decDeg.toFixed(6));
