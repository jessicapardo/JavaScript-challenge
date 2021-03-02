// from data.js
let tableData = data;

// Check that data is being called
console.log(data);


let tbody = d3.select('tbody');
let button = d3.select('#filter-btn');
let resetTable=d3.select('#reset-btn');

populateTable(tableData);
button.on('click', handleClick);
resetTable.on('click', handleClick);

// =============================================
// Function to poulate Table
function populateTable(data) {
    tbody.html("");

    data.forEach(dataRow => {
        let row = tbody.append('tr');

        Object.values(dataRow).forEach(val => {
            let cell = row.append('td');

            cell.text(val);
        });
    });
};

// =============================================
// Funtion to filter table data
function handleClick() {
    let inputDate = d3.select('input').property('value');
    let inputCity = d3.select('#city').property('value').toLowerCase();
    let inputState = d3.select('#state').property('value').toLowerCase();
    let inputCountry = d3.select('#country').property('value').toLowerCase();
    let inputShape = d3.select('#shape').property('value').toLowerCase();
    let filteredData = tableData;

    if (inputDate) {
        filteredData = filteredData.filter(row => row.datetime === inputDate);
    };
    if (inputCity) {
        filteredData = filteredData.filter(row => row.city === inputCity);
    };if (inputState) {
        filteredData = filteredData.filter(row => row.state === inputState);
    };if (inputCountry) {
        filteredData = filteredData.filter(row => row.country === inputCountry);
    };if (inputShape) {
        filteredData = filteredData.filter(row => row.shape === inputShape);
    };

    d3.select('input').property('value', '');
    d3.select('#city').property('value', '');
    d3.select('#state').property('value', '');
    d3.select('#country').property('value', '');
    d3.select('#shape').property('value', '');
    populateTable(filteredData);
};
