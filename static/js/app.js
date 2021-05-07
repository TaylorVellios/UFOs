// importing data from data.js
const tableData = data;

//reference the html table using d3 -- d3.select will look for any "tbody" tags in the html file
var tbody = d3.select("tbody");

function buildtable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((v) => {
            let cell = tbody.append("td");
            cell.text(v);
        })
    });
}