const ctx = document.getElementById("myChart").getContext("2d"); // Get the 2D rendering context of the canvas
// Function to read and parse CSV data

// Function to read and parse CSV data
async function fetchCSVData(url) {
  const response = await fetch(url);
  const data = await response.text();
  return parseCSV(data);
}

// Function to parse CSV data
function parseCSV(data) {
  const rows = data.split('\n').slice(1).filter(row => row.trim() !== ""); // Remove header row and empty lines
  const labels = [];
  const values = [];

  rows.forEach(row => {
    const cols = row.split(','); // Split each row by comma
    labels.push(cols[4].trim()); // Assuming the first column is Date (adjust if needed)
    values.push(parseFloat(cols[5].trim())); // Assuming the second column is Value (adjust if needed)
  });

  return { labels, values };
}

// Mock data for three linear charts
// Chart configuration with axis labels
let graphData = {
  graph1: {                                       // GRAPH 1
    type: "line",
    data: {
      labels: [], // X-axis labels will be dynamically fetched
      datasets: [
        {
          label: "BRISTOR Sales",
          data: [], // Data will be dynamically fetched
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 2,
        },
      ],
    },
    options: {
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
            text: "Time Period", // Label for X-axis
            font: {
              size: 16,
            },
          },
        },
        y: {
          title: {
            display: true,
            text: "Sales Amount (mL)", // Label for Y-axis
            font: {
              size: 16,
            },
          },
        },
      },
    },
  },
  graph2: {                                       // GRAPH 2
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Revenue (in $1000)",
          data: [15, 25, 20, 30, 40],
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderWidth: 2,
        },
      ],
    },
    options: {
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
            text: "Months", // X-axis label
            font: {
              size: 16,
            },
          },
        },
        y: {
          title: {
            display: true,
            text: "Revenue Amount ($1000s)", // Y-axis label
            font: {
              size: 16,
            },
          },
        },
      },
    },
  },
  graph3: {                                      // GRAPH 3
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Expenses (in $1000)",
          data: [8, 12, 10, 15, 18],
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderWidth: 2,
        },
      ],
    },
    options: {
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
            text: "Months", // X-axis label
            font: {
              size: 16,
            },
          },
        },
        y: {
          title: {
            display: true,
            text: "Expense Amount ($1000s)", // Y-axis label
            font: {
              size: 16,
            },
          },
        },
      },
    },
  },
};

let chart;
// Fetch and update the chart with CSV data
fetchCSVData('../clean_data/BRISTOR_Zegoland_all_%.csv').then(csvData => {
  graphData.graph1.data.labels = csvData.labels;
  graphData.graph1.data.datasets[0].data = csvData.values;
  chart = new Chart(ctx, graphData.graph1); // Initialize the chart with Graph 1 data
});

// Function to update the description
function updateDescription(graphId) {
  document.getElementById("graphDescription").innerHTML = graphDescriptions[graphId];
}

// Function to handle button clicks
const buttons = document.querySelectorAll('.graph-btn'); // Select all the graph buttons

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const graphId = button.id.replace('btn-', ''); // Map the button ID to the graph data ID

    // Update button styles
    buttons.forEach(btn => btn.classList.remove('active')); // Remove 'active' class from all buttons
    button.classList.add('active'); // Add 'active' class to the clicked button
    console.log(graphId)
    // Update the chart
    chart.destroy(); // Destroy the existing chart
    chart = new Chart(ctx, graphData[graphId]); // Create a new chart with the selected data
    updateDescription(graphId)
  });
});
