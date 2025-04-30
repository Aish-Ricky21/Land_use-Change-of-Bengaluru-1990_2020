const data = [
  { "CLASS NAME": "AGRICULTURAL DRY LAND", "LOSS": 267.9957, "GAIN": 72.0207, "change": -5.093686402, "UNCHANGED": 38.4741 },
  { "CLASS NAME": "HIGH DENSITY URBAN", "LOSS": 107.4285, "GAIN": 265.6296, "change": 2.525923265, "UNCHANGED": 62.631 },
  { "CLASS NAME": "LOW DENSITY URBAN", "LOSS": 156.9402, "GAIN": 203.4261, "change": 1.148744523, "UNCHANGED": 40.4667 },
  { "CLASS NAME": "SHRUB", "LOSS": 81.4023, "GAIN": 75.3219, "change": -0.279937018, "UNCHANGED": 21.7206 },
  { "CLASS NAME": "VEGETATION", "LOSS": 81.6381, "GAIN": 92.8467, "change": 0.574022861, "UNCHANGED": 19.5264 },
  { "CLASS NAME": "WATER BODIES", "LOSS": 21.7278, "GAIN": 7.8876, "change": -2.643176349, "UNCHANGED": 5.2362 }
];

// Populate Table
const tableHead = document.getElementById("table-head");
const tableBody = document.getElementById("data-table");

tableHead.innerHTML = `<tr>
  <th>Class Name</th>
  <th>Loss</th>
  <th>Gain</th>
  <th>Change</th>
  <th>Unchanged</th>
</tr>`;

tableBody.innerHTML = data.map(row => `
  <tr>
    <td>${row["CLASS NAME"]}</td>
    <td>${row.LOSS.toFixed(2)}</td>
    <td>${row.GAIN.toFixed(2)}</td>
    <td>${row.change.toFixed(2)}</td>
    <td>${row.UNCHANGED.toFixed(2)}</td>
  </tr>
`).join("");

// Bar Chart
Plotly.newPlot('barChart', [
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.GAIN),
    name: 'Gain',
    type: 'bar',
    marker: { color: 'green' }
  },
  {
    x: data.map(d => d["CLASS NAME"]),
    y: data.map(d => d.LOSS),
    name: 'Loss',
    type: 'bar',
    marker: { color: 'red' }
  }
],);

// Pie Chart
function updatePieChart(valueType) {
  const values = data.map(d => valueType === "Changed"
    ? Math.abs(d.GAIN - d.LOSS)
    : d.UNCHANGED);
  const labels = data.map(d => d["CLASS NAME"]);

  Plotly.newPlot('pieChart', [{
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4
  }],);
}

document.getElementById("valueTypeSelect").addEventListener("change", (e) => {
  updatePieChart(e.target.value);
});

// Initial render
updatePieChart("Changed");

// Dark mode toggle
document.getElementById("toggleDarkMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});












  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  