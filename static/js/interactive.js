const ctx = document.getElementById("myChart").getContext("2d"); // Get the 2D rendering context of the canvas
// Function to read and parse CSV data

// Function to read and parse CSV data
async function fetchCSVDataMain(url) {
  const response = await fetch(url);
  const data = await response.text();
  return parseCSV(data, 4, 5);
}


// Sample data for the graph
const graphData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [{
    label: "Sales Amount (in mL)",
    data: [20, 40, 60, 80, 100],
    borderColor: "rgba(75, 192, 192, 1)", // Line color
    backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color
    borderWidth: 2,
    fill: true, // Fill the area below the line
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

// Initialize the chart with the data and options
new Chart(ctx, {
  type: 'line',
  data: graphData,
  options: chartOptions,
});

// Redirect to the main page when the button is clicked
document.getElementById("goToMainPage").addEventListener("click", function() {
  window.location.href = "/"; // Replace with the actual URL of the main page
});

  