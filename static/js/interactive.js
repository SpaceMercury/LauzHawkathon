const ctx = document.getElementById("myChart").getContext("2d"); // Get the 2D rendering context of the canvas
// Function to read and parse CSV data

// Function to read and parse CSV data
async function fetchCSVDataMain(url) {
  const response = await fetch(url);
  const data = await response.text();
  return parseCSV(data, 0, 1);
}

function parseCSV(data, x, y) {
  const rows = data.split('\n').slice(1).filter(row => row.trim() !== ""); // Remove header row and empty lines
  const labels = [];
  const values = [];

  rows.forEach(row => {
    const cols = row.split(','); // Split each row by comma
    labels.push(cols[x].trim()); // Assuming the first column is Date (adjust if needed)
    values.push(parseFloat(cols[y].trim())); // Assuming the second column is Value (adjust if needed)
  });

  return { labels, values };
}


// Sample data for the graph
let graphData = {
  labels: [],
  datasets: [{
    label: "Sales Amount (in mL)",
    data: [],
    borderColor: "rgba(204, 0, 255, 0.742)", // Line color
    backgroundColor: "rgba(54, 162, 235, 0.2)", // Fill color
    borderWidth: 2,
    fill: false, // Fill the area below the line
  }],
};

// Chart options for customization
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Months",
        font: {
          family: 'Quicksand', // Font for axis title
          size: 16,
          weight: 'bold',
        },
      },
    },
    y: {
      title: {
        display: true,
        text: "Sales Amount (mL)",
        font: {
          family: 'Quicksand', // Font for axis title
          size: 16,
          weight: 'bold',
        },
      },
    },
  },
};

let chart;
// Fetch and update the chart with CSV data
fetchCSVDataMain('static/data/output.csv').then(csvData => {
  graphData.labels = csvData.labels;
  graphData.datasets[0].data = csvData.values;
  chart = new Chart(ctx, {
  type: 'line',
  data: graphData,
  options: chartOptions,
}); // Initialize the chart with Graph 1 data
});


// Initialize the chart with the data and options


// Redirect to the main page when the button is clicked
document.getElementById("goToMainPage").addEventListener("click", function() {
  window.location.href = "/"; // Replace with the actual URL of the main page
});

  