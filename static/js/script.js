
const ctx = document.getElementById("myChart").getContext("2d"); // Get the 2D rendering context of the canvas
// Function to read and parse CSV data

// Function to read and parse CSV data
async function fetchCSVDataMain(url) {
  const response = await fetch(url);
  const data = await response.text();
  return parseCSV(data, 4, 5);
}
async function fetchCSVDataMain2(url) {
  const response = await fetch(url);
  const data = await response.text();
  return parseCSV(data, 4, 9);
}

async function fetchCSVDataMain4(url) {
  const response = await fetch(url);
  const data = await response.text();
  return parseCSV(data, 4, 10);
}
async function fetchCSVDataMain5(url) {
  const response = await fetch(url);
  const data = await response.text();
  return parseCSV(data, 4, 11);
}
async function fetchCSVDataMain3(url) {
  const response = await fetch(url);
  const data = await response.text();
  return parseCSV(data, 4, 14);
}
async function fetchCSVDataMain6(url) {
  const response = await fetch(url);
  const data = await response.text();
  return parseCSV(data, 4, 15);
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

// Mock data for three linear charts
// Chart configuration with axis labels
let graphData = {
  graph1: {                                      // GRAPH 1
    type: "line",
    data: {
      labels: [], // X-axis labels will be dynamically fetched
      datasets: [
        {
          label: "BRISTOR Sales",
          data: [], // Data will be dynamically fetched
          borderColor: "rgba(204, 0, 255, 0.742)",
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
            text: "Months", // Label for X-axis
            font: {
              size: 16,
            },
          },
        },
        y: {
          title: {
            display: true,
            text: "Sales Amount (mg)", // Label for Y-axis
            font: {
              size: 16,
            },
          },
        },
      },
    },
  },
  graph2: {                                      // GRAPH 2
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Demand Share",
          data: [],
          borderColor: "rgba(204, 0, 255, 0.742)",
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
            text: "Demand Share A", // Y-axis label
            font: {
              size: 16,
            },
          },
        },
      },
    },
  },
  graph3: {                                     // GRAPH 3
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Voice Share A",
          data: [],
          borderColor: "rgba(204, 0, 255, 0.742)",
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
            text: "Voice Share", // Y-axis label
            font: {
              size: 16,
            },
          },
        },
      },
    },
  },
  graph4: {                                      // GRAPH 4
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "New patients Share A",
          data: [],
          borderColor: "rgba(204, 0, 255, 0.742)",
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
            text: "Share of new patients A", // Y-axis label
            font: {
              size: 16,
            },
          },
        },
      },
    },
  },
  graph5: {                                      // GRAPH 5
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "New patients Share B",
          data: [],
          borderColor: "rgba(204, 0, 255, 0.742)",
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
            text: "Share of new patients B", // Y-axis label
            font: {
              size: 16,
            },
          },
        },
      },
    },
  },
  graph6: {                                      // GRAPH 6
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: "Demand Share B",
          data: [],
          borderColor: "rgba(204, 0, 255, 0.742)",
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
            text: "Demand Share B", // Y-axis label
            font: {
              size: 16,
            },
          },
        },
      },
    },
  },
};

// Messages for each graph
const graphMessages = {
  graph1: "Graph 1: BRISTOR Sales - This graph displays the sales of BRISTOR over time. It shows trends and fluctuations in the sales data.",
  graph2: "Graph 2: Demand Share - is the proportion of the total market's demand that is met by a specific company or product. It reflects the percentage of total sales in a market that comes from a particular company compared to its competitors.",
  graph3: "Graph 3: Voice Share - represents the percentage of people with a specific condition or disease 'A' who purchase (or are prescribed) the drug, relative to all products sold to that group.",
  graph4: "Graph 4: New Patient A This share indicates the proportion of people newly diagnosed with a specific disease who end up using a the drug, relative to the total new patients diagnosed with that disease.",
  graph5: "Graph 5: New Patient B This share indicates the proportion of people newly diagnosed with a specific disease who end up using a the drug, relative to the total new patients diagnosed with that disease.",
  graph6: "Graph 6: Voice Share - represents the percentage of people with a specific condition or disease 'B' who purchase (or are prescribed) the drug, relative to all products sold to that group.",
};

// Function to update the message
function updateMessage(graphId) {
  const messageElement = document.getElementById("graphMessage");
  messageElement.innerHTML = graphMessages[graphId]; // Set the message based on the selected graph
}

let chart;
// Fetch and update the chart with CSV data
fetchCSVDataMain('static/data/BRISTOR_Zegoland_all_%.csv').then(csvData => {
  graphData.graph1.data.labels = csvData.labels;
  graphData.graph1.data.datasets[0].data = csvData.values;
  //chart = new Chart(ctx, graphData.graph1); // Initialize the chart with Graph 1 data
});

fetchCSVDataMain2('static/data/BRISTOR_Zegoland_all_%.csv').then(csvData => {
  graphData.graph2.data.labels = csvData.labels;
  graphData.graph2.data.datasets[0].data = csvData.values;
  //chart = new Chart(ctx, graphData.graph1); // Initialize the chart with Graph 1 data
});

fetchCSVDataMain3('static/data/BRISTOR_Zegoland_all_%.csv').then(csvData => {
  graphData.graph3.data.labels = csvData.labels;
  graphData.graph3.data.datasets[0].data = csvData.values;
  //chart = new Chart(ctx, graphData.graph1); // Initialize the chart with Graph 1 data
});

fetchCSVDataMain4('static/data/BRISTOR_Zegoland_all_%.csv').then(csvData => {
  graphData.graph4.data.labels = csvData.labels;
  graphData.graph4.data.datasets[0].data = csvData.values;
  //chart = new Chart(ctx, graphData.graph1); // Initialize the chart with Graph 1 data
});

fetchCSVDataMain5('static/data/BRISTOR_Zegoland_all_%.csv').then(csvData => {
  graphData.graph5.data.labels = csvData.labels;
  graphData.graph5.data.datasets[0].data = csvData.values;
  //chart = new Chart(ctx, graphData.graph1); // Initialize the chart with Graph 1 data
});

fetchCSVDataMain6('static/data/BRISTOR_Zegoland_all_%.csv').then(csvData => {
  graphData.graph6.data.labels = csvData.labels;
  graphData.graph6.data.datasets[0].data = csvData.values;
  //chart = new Chart(ctx, graphData.graph1); // Initialize the chart with Graph 1 data
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

    // Update button styles (for active effect)
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Destroy current chart and create a new one
    if (chart) {
      chart.destroy();
    }
    chart = new Chart(ctx, graphData[graphId]); // Create chart for the selected graph

    // Update the graph's message
    updateMessage(graphId); // Update the message below the graph

    function updateMessageGlow(graphId) {
      const messageBox = document.getElementById("graphMessage"); // Select the message box
    
      // Remove any existing glow classes
      messageBox.classList.remove("graph1", "graph2", "graph3", "graph4", "graph5", "graph6");
    
      // Add the class corresponding to the selected graph
      if (graphId === "graph1") {
        messageBox.classList.add("graph1"); // Purple glow for Graph 1
      } else if (graphId === "graph2") {
        messageBox.classList.add("graph2"); // Purple glow for Graph 2
      } else if (graphId === "graph3") {
        messageBox.classList.add("graph3"); // Purple glow for Graph 3
      } else if (graphId === "graph4") {
        messageBox.classList.add("graph4"); // Purple glow for Graph 4
      } else if (graphId === "graph5") {
        messageBox.classList.add("graph5"); // Purple glow for Graph 5
      } else if (graphId === "graph6") {
        messageBox.classList.add("graph6"); // Purple glow for Graph 6
      }
      
    }
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const graphId = button.id.replace('btn-', ''); // Map button ID to graph ID
    
        // Update button styles (for active effect)
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    
        // Destroy current chart and create a new one
        if (chart) {
          chart.destroy();
        }
        chart = new Chart(ctx, graphData[graphId]); // Create chart for the selected graph
    
        // Update the graph's message and glow
        updateMessage(graphId); // Update the message below the graph
        updateMessageGlow(graphId); // Dynamically apply the glow
      });
    });
    
  });
});
