const inputText = document.querySelector("#inputText");
const inputBtn = document.querySelector("#inputBtn");

const errorDisplay = document.querySelector("#errorDisplay");

const countryFlagImage = document.querySelector("#countryFlagImage");
const countryName = document.querySelector("#countryName");
const countryCapital = document.querySelector("#countryCapital");

const timezoneText = document.querySelector("#timezoneText");
const currencyText = document.querySelector("#currencyText");
const countryCodeText = document.querySelector("#countryCodeText");
const populationText = document.querySelector("#populationText");
const landAreaText = document.querySelector("#landAreaText");
const wikipediaLink = document.querySelector("#wikipediaLink");
const googleLink = document.querySelector("#googleLink");



const countryCodeMap =  {
    "ANDORRA": "AD",
    "UNITED ARAB EMIRATES": "AE",
    "AFGHANISTAN": "AF",
    "ANTIGUA AND BARBUDA": "AG",
    "ANGUILLA": "AI",
    "ALBANIA": "AL",
    "ARMENIA": "AM",
    "NETHERLANDS ANTILLES": "AN",
    "ANGOLA": "AO",
    "ANTARCTICA": "AQ",
    "ARGENTINA": "AR",
    "AMERICAN SAMOA": "AS",
    "AUSTRIA": "AT",
    "AUSTRALIA": "AU",
    "ARUBA": "AW",
    "ÅLAND ISLANDS": "AX",
    "ALAND ISLANDS": "AX",
    "AZERBAIJAN": "AZ",
    "BOSNIA AND HERZEGOVINA": "BA",
    "BARBADOS": "BB",
    "BANGLADESH": "BD",
    "BELGIUM": "BE",
    "BURKINA FASO": "BF",
    "BULGARIA": "BG",
    "BAHRAIN": "BH",
    "BURUNDI": "BI",
    "BENIN": "BJ",
    "SAINT BARTHÉLEMY": "BL",
    "SAINT BARTHELEMY": "BL",
    "BERMUDA": "BM",
    "BRUNEI": "BN",
    "BOLIVIA": "BO",
    "BONAIRE, SAINT EUSTATIUS, AND SABA": "BQ",
    "BRAZIL": "BR",
    "BAHAMAS": "BS",
    "BHUTAN": "BT",
    "BOUVET ISLAND": "BV",
    "BOTSWANA": "BW",
    "BELARUS": "BY",
    "BELIZE": "BZ",
    "CANADA": "CA",
    "COCOS (KEELING) ISLANDS": "CC",
    "DR CONGO": "CD",
    "CENTRAL AFRICAN REPUBLIC": "CF",
    "REPUBLIC OF THE CONGO": "CG",
    "SWITZERLAND": "CH",
    "IVORY COAST": "CI",
    "COOK ISLANDS": "CK",
    "CHILE": "CL",
    "CAMEROON": "CM",
    "CHINA": "CN",
    "COLOMBIA": "CO",
    "COSTA RICA": "CR",
    "SERBIA AND MONTENEGRO": "CS",
    "CUBA": "CU",
    "REPUBLIC OF CABO VERDE": "CV",
    "CURAÇAO": "CW",
    "CURACAO": "CW",
    "CHRISTMAS ISLAND": "CX",
    "CYPRUS": "CY",
    "CZECH REPUBLIC": "CZ",
    "GERMANY": "DE",
    "DJIBOUTI": "DJ",
    "DENMARK": "DK",
    "DOMINICA": "DM",
    "DOMINICAN REPUBLIC": "DO",
    "ALGERIA": "DZ",
    "ECUADOR": "EC",
    "ESTONIA": "EE",
    "EGYPT": "EG",
    "WESTERN SAHARA": "EH",
    "ERITREA": "ER",
    "SPAIN": "ES",
    "ETHIOPIA": "ET",
    "FINLAND": "FI",
    "FIJI": "FJ",
    "FALKLAND ISLANDS": "FK",
    "MICRONESIA": "FM",
    "FAROE ISLANDS": "FO",
    "FRANCE": "FR",
    "GABON": "GA",
    "UNITED KINGDOM": "GB",
    "GRENADA": "GD",
    "GEORGIA": "GE",
    "FRENCH GUIANA": "GF",
    "GUERNSEY": "GG",
    "GHANA": "GH",
    "GIBRALTAR": "GI",
    "GREENLAND": "GL",
    "THE GAMBIA": "GM",
    "GUINEA": "GN",
    "GUADELOUPE": "GP",
    "EQUATORIAL GUINEA": "GQ",
    "GREECE": "GR",
    "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS": "GS",
    "GUATEMALA": "GT",
    "GUAM": "GU",
    "GUINEA-BISSAU": "GW",
    "GUYANA": "GY",
    "HONG KONG S.A.R": "HK",
    "HONG KONG": "HK",
    "HEARD ISLAND AND MCDONALD ISLANDS": "HM",
    "HONDURAS": "HN",
    "CROATIA": "HR",
    "HAITI": "HT",
    "HUNGARY": "HU",
    "INDONESIA": "ID",
    "IRELAND": "IE",
    "ISRAEL": "IL",
    "ISLE OF MAN": "IM",
    "INDIA": "IN",
    "BRITISH INDIAN OCEAN TERRITORY": "IO",
    "IRAQ": "IQ",
    "IRAN": "IR",
    "ICELAND": "IS",
    "ITALY": "IT",
    "JERSEY": "JE",
    "JAMAICA": "JM",
    "HASHEMITE KINGDOM OF JORDAN": "JO",
    "JAPAN": "JP",
    "KENYA": "KE",
    "KYRGYZSTAN": "KG",
    "CAMBODIA": "KH",
    "KIRIBATI": "KI",
    "COMOROS": "KM",
    "ST KITTS AND NEVIS": "KN",
    "NORTH KOREA": "KP",
    "REPUBLIC OF KOREA": "KR",
    "SOUTH KOREA": "KR",
    "KOREA": "KR",
    "KUWAIT": "KW",
    "CAYMAN ISLANDS": "KY",
    "KAZAKHSTAN": "KZ",
    "LAOS": "LA",
    "LEBANON": "LB",
    "SAINT LUCIA": "LC",
    "LIECHTENSTEIN": "LI",
    "SRI LANKA": "LK",
    "LIBERIA": "LR",
    "LESOTHO": "LS",
    "REPUBLIC OF LITHUANIA": "LT",
    "LUXEMBOURG": "LU",
    "LATVIA": "LV",
    "LIBYA": "LY",
    "MOROCCO": "MA",
    "MONACO": "MC",
    "REPUBLIC OF MOLDOVA": "MD",
    "MONTENEGRO": "ME",
    "SAINT MARTIN": "MF",
    "MADAGASCAR": "MG",
    "MARSHALL ISLANDS": "MH",
    "NORTH MACEDONIA": "MK",
    "MALI": "ML",
    "MYANMAR": "MM",
    "MONGOLIA": "MN",
    "MACAO S.A.R": "MO",
    "MACAO": "MO",
    "NORTHERN MARIANA ISLANDS": "MP",
    "MARTINIQUE": "MQ",
    "MAURITANIA": "MR",
    "MONTSERRAT": "MS",
    "MALTA": "MT",
    "MAURITIUS": "MU",
    "MALDIVES": "MV",
    "MALAWI": "MW",
    "MEXICO": "MX",
    "MALAYSIA": "MY",
    "MOZAMBIQUE": "MZ",
    "NAMIBIA": "NA",
    "NEW CALEDONIA": "NC",
    "NIGER": "NE",
    "NORFOLK ISLAND": "NF",
    "NIGERIA": "NG",
    "NICARAGUA": "NI",
    "NETHERLANDS": "NL",
    "NORWAY": "NO",
    "NEPAL": "NP",
    "REPUBLIC OF NAURU": "NR",
    "NIUE": "NU",
    "NEW ZEALAND": "NZ",
    "OMAN": "OM",
    "PANAMA": "PA",
    "PERU": "PE",
    "FRENCH POLYNESIA": "PF",
    "PAPUA NEW GUINEA": "PG",
    "PHILIPPINES": "PH",
    "PAKISTAN": "PK",
    "POLAND": "PL",
    "SAINT PIERRE AND MIQUELON": "PM",
    "PITCAIRN ISLANDS": "PN",
    "PUERTO RICO": "PR",
    "PALESTINE": "PS",
    "PORTUGAL": "PT",
    "PALAU": "PW",
    "PARAGUAY": "PY",
    "QATAR": "QA",
    "RÉUNION": "RE",
    "REUNION": "RE",
    "ROMANIA": "RO",
    "SERBIA": "RS",
    "RUSSIA": "RU",
    "RWANDA": "RW",
    "SAUDI ARABIA": "SA",
    "SOLOMON ISLANDS": "SB",
    "SEYCHELLES": "SC",
    "SUDAN": "SD",
    "SWEDEN": "SE",
    "SINGAPORE": "SG",
    "SAINT HELENA": "SH",
    "SLOVENIA": "SI",
    "SVALBARD AND JAN MAYEN": "SJ",
    "SLOVAKIA": "SK",
    "SIERRA LEONE": "SL",
    "SAN MARINO": "SM",
    "SENEGAL": "SN",
    "SOMALIA": "SO",
    "SURINAME": "SR",
    "REPUBLIC OF SOUTH SUDAN": "SS",
    "SOUTH SUDAN": "SS",
    "SÃO TOMÉ AND PRÍNCIPE": "ST",
    "SAO TOME AND PRINCIPE": "ST",
    "EL SALVADOR": "SV",
    "SINT MAARTEN": "SX",
    "SYRIA": "SY",
    "ESWATINI": "SZ",
    "TURKS AND CAICOS ISLANDS": "TC",
    "CHAD": "TD",
    "FRENCH SOUTHERN TERRITORIES": "TF",
    "TOGO": "TG",
    "THAILAND": "TH",
    "TAJIKISTAN": "TJ",
    "TOKELAU": "TK",
    "TIMOR-LESTE": "TL",
    "TIMOR LESTE": "TL",
    "TURKMENISTAN": "TM",
    "TUNISIA": "TN",
    "TONGA": "TO",
    "TURKEY": "TR",
    "TRINIDAD AND TOBAGO": "TT",
    "TUVALU": "TV",
    "TAIWAN ROC": "TW",
    "TANZANIA": "TZ",
    "UKRAINE": "UA",
    "UGANDA": "UG",
    "U.S. MINOR OUTLYING ISLANDS": "UM",
    "UNITED STATES OF AMERICA": "US",
    "UNITED STATES": "US",
    "US": "US",
    "U.S.A.": "US",
    "USA": "US",
    "URUGUAY": "UY",
    "UZBEKISTAN": "UZ",
    "VATICAN CITY": "VA",
    "ST VINCENT AND GRENADINES": "VC",
    "VENEZUELA": "VE",
    "BRITISH VIRGIN ISLANDS": "VG",
    "U.S. VIRGIN ISLANDS": "VI",
    "VIETNAM": "VN",
    "VANUATU": "VU",
    "WALLIS AND FUTUNA": "WF",
    "SAMOA": "WS",
    "REPUBLIC OF KOSOVO": "XK",
    "YEMEN": "YE",
    "MAYOTTE": "YT",
    "REPUBLIC OF SOUTH AFRICA": "ZA",
    "ZAMBIA": "ZM",
    "ZIMBABWE": "ZW"
}
const countryCodeArray = Object.keys(countryCodeMap);



//uses Levenshtein distance to calculate similarity between 2 strings
function similarity(s1, s2) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    const longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}
//Similarity helper function
function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
  
    let costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i == 0)
          costs[j] = j;
        else {
          if (j > 0) {
            let newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}



//API fetch request and update page
async function getInfo(e) {
    e.preventDefault(); 

    //show loading
    inputBtn.innerText = "Loading...";
    inputBtn.disabled = true;
    errorDisplay.classList.add("visually-hidden");
    
    //retrieves/guesses the correct country code 
    const text = inputText.value.toUpperCase();
    let countryCode = countryCodeMap[text];
    if (countryCode == undefined) {
        const closest = countryCodeArray.reduce((x, y) => similarity(y, text) > similarity(x, text) ? y : x , '')
        countryCode = countryCodeMap[closest];
        console.log(closest)
        errorDisplay.classList.remove("visually-hidden");
        errorDisplay.innerText = `Did you mean ${closest.charAt(0) + closest.slice(1).toLowerCase()}?`;
    }


    const url = `https://countries-cities.p.rapidapi.com/location/country/${countryCode}`;
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
    }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        //updates page info
        updateInfo(result);
    } catch (error) {
        //display error message
        errorDisplay.classList.remove("visually-hidden");
        errorDisplay.innerText = "Country not found!"
        console.error(error);
    } finally {
        //resets button to be enabled after loading
        inputBtn.innerText = "Load info";
        inputBtn.disabled = false;
    }
}
inputBtn.onclick = getInfo;

//updates page info
function updateInfo(result) {
    countryFlagImage.src = result.flag.file;
    countryName.innerText = result.name;
    countryCapital.innerText = result.capital.name;
    timezoneText.innerText = `Timezone: ${result.timezone.code}`;
    currencyText.innerText = `Currency: ${result.currency.code} (${result.currency.name})`;
    countryCodeText.innerText = `Country Code: +${result.phone_code}`;
    populationText.innerText = `Population: ${result.population}`;
    landAreaText.innerText = `Land Area: ${result.area_size}`;
    wikipediaLink.href = result.wiki_url;
    const queryName = result.name.replaceAll(' ', '+');
    googleLink.href = `https://www.google.com/search?q=${queryName}`;
}

