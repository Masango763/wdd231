// 1. Date formatting: mon dd, year (e.g., "Apr 04, 2026")
const options = { month: 'short', day: '2-digit', year: 'numeric' };
const today = new Date().toLocaleDateString('en-US', options);

// 2. Template literal formatting
let volume = 5;
let volumeText = `<strong>Volume</strong>: ${volume} liters`;

// 3. Read input element value
// let quantity = document.querySelector('#q').value;

// 4. Output string with HTML tags to <aside>
// document.querySelector('aside').innerHTML = 'Welcome to <em>our</em> neighborhood!';

// 5. Assign function return value to an input field
function getCelsius(fahrenheit) {
    return Math.round(((fahrenheit - 32) * 5) / 9);
}
// document.querySelector('#temp').value = getCelsius(33);

// 6. Select all div elements
// const divs = document.querySelectorAll('div');

// 7. Filter city names array for entries starting with "C"
const citynames = ["Chicago", "New York", "Dallas", "Cleveland", "Denver", "Charleston"];
const filterC = citynames.filter(city => city.startsWith('C'));
