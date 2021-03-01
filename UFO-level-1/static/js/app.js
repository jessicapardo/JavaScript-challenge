// from data.js
let tableData = data;

// Check that data is being called
console.log(data);


let tbody = d3.select('tbody');
let button = d3.select('button');

populateTable(tableData);
button.on('click', handleClick);

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
// Funtion to filter table by date
function handleClick() {
    let date = d3.select('input').property('value');
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    d3.select('input').property('value', '');
    populateTable(filteredData);
};