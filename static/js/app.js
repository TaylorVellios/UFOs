// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
};

// 1. Create a variable to keep track of all the filters as an object.
var filters = {
  datetime: '',
  city: '',
  state: '',
  country: '',
  shape: ''
};


// 3. Use this function to update the filters. 
function updateFilters(filt) {

  // 4a. Save the element that was changed as a variable.
  // why would i bother to do that

  // 4b. Save the value that was changed as a variable.
  let value = d3.select(filt).property('value');
  console.log(value);
    // 4c. Save the id of the filter that was changed as a variable.
  let elem = d3.select(filt).property('id');
  console.log(elem);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
  if (filters[elem] != value) {
    filters[elem] = value;
  };
  console.log(filters);
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  };
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {

    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([k,v]) => {
      if (v != "") {
        console.log(k, v)

        filteredData = filteredData.filter(row => row[k] === v);
      };
    });
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  };
  
  // 2. Attach an event to listen for changes to each filter
  // no, if the challenge deviates from the module content this much then there is no reason that my solution can't deviate from the prompts
  // did it in html, each filter box hits the filter function to supply it with the appropriate input
  
  // Build the table when the page loads
  buildTable(tableData);

function reset(){
  Object.entries(filters).forEach(([k,v]) => {
    document.getElementById(k).value = ""
    filters[k] = ''
  });
  buildTable(tableData);
};