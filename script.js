// Array of country names
const countries = [
    "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola",
    "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
    "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde (Cape Verde)",
    "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Central African Republic", "Chad",
    "Chile", "China", "Colombia", "Comoros", "Congo (Democratic Republic)", "Congo (Republic)",
    "Costa Rica", "Croatia", "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (Swaziland)", "Ethiopia", "Faroe Islands",
    "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Gaza Strip",
    "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala",
    "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland",
    "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan",
    "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kosovo",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
    "Lithuania", "Luxembourg", "Macau", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova",
    "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru",
    "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia",
    "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay",
    "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Réunion", "Romania", "Russia",
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan",
    "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
    "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Virgin Islands",
    "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "West Bank", "Yemen", "Zambia", "Zimbabwe"
];

// Get reference to the element where country count will be displayed
const displayText = document.getElementById('count')

// Function to display the countries as boxes in the HTML
const displayCountries = (countries) => {
    const container = document.getElementById('countryList');// Get reference to the container where the country list will be placed

    container.innerHTML = ''; // Clear any existing content in the container

    // Loop through the countries array and create a box for each country
    for (const country of countries) {
        const countryBox = document.createElement('div');// Create a div element for each country
        countryBox.className = 'country-box';// Assign a class to the div so it can be styled
        countryBox.textContent = country; // Set the text content of the div to the current country name
        container.appendChild(countryBox);// Append the div element (countryBox) to the container
    }
}

// Function to handle the country search
const searchCountries = () => {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();// Get the search input and convert it to lowercase for case-insensitive comparison
    const filtered = countries.filter(function (country) { // Filter the countries array to match countries that include the input
        return country.toLowerCase().includes(input);
    });

    if (input === "") {    // If the input is empty, hide the count display
        displayText.style.display = "none";
    } else {
        const word = filtered.length === 1 ? "country" : "countries"; // Set the count message, 1 country matches then it returns the string "country" else return "countries"
        displayText.innerHTML = `${filtered.length} ${word} contain "${input}"`;
        displayText.style.display = "block";// Show the count message

    }

    displayCountries(filtered);// Call the displayCountries function to update the list with filtered countries

}

//document.getElementById('searchBtn').addEventListener('click', searchCountries);
document.getElementById('searchInput').addEventListener('input', searchCountries);

displayCountries(countries);//display all countries when the page loads

