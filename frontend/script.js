const ctx = document.getElementById("myChart").getContext("2d"); // Get the 2D rendering context of the canvas

// Mock data for three linear charts
const graphData = {
  graph1: { // Data for Graph 1 (Sales)
    type: "line", // Define the chart type as line
    data: {
      labels: ["January", "February", "March", "April", "May"], // Labels for the X-axis
      datasets: [
        {
          label: "Sales (in $1000)", // Label for the dataset
          data: [10, 20, 15, 25, 30], // Y-axis data for the graph
          borderColor: "rgba(75, 192, 192, 1)", // Color of the line
          backgroundColor: "rgba(75, 192, 192, 0.2)", // Background color below the line
          borderWidth: 2, // Line width
        },
      ],
    },
  },
  graph2: { // Data for Graph 2 (Revenue)
    type: "line", // Define the chart type as line
    data: {
      labels: ["January", "February", "March", "April", "May"], // Labels for the X-axis
      datasets: [
        {
          label: "Revenue (in $1000)", // Label for the dataset
          data: [15, 25, 20, 30, 40], // Y-axis data for the graph
          borderColor: "rgba(54, 162, 235, 1)", // Color of the line
          backgroundColor: "rgba(54, 162, 235, 0.2)", // Background color below the line
          borderWidth: 2, // Line width
        },
      ],
    },
  },
  graph3: { // Data for Graph 3 (Expenses)
    type: "line", // Define the chart type as line
    data: {
      labels: ["January", "February", "March", "April", "May"], // Labels for the X-axis
      datasets: [
        {
          label: "Expenses (in $1000)", // Label for the dataset
          data: [8, 12, 10, 15, 18], // Y-axis data for the graph
          borderColor: "rgba(255, 99, 132, 1)", // Color of the line
          backgroundColor: "rgba(255, 99, 132, 0.2)", // Background color below the line
          borderWidth: 2, // Line width
        },
      ],
    },
  },
};

let chart = new Chart(ctx, graphData.graph1); // Initialize the chart with Graph 1 data

// Function to handle button clicks
const buttons = document.querySelectorAll('.graph-btn'); // Select all the graph buttons

buttons.forEach(button => {
  button.addEventListener('click', () => { // Listen for clicks on each button
    const graphId = button.id.replace('btn-', 'graph'); // Map the button ID to the graph data ID
    const isActive = button.classList.contains('active'); // Check if the button is active

    if (isActive) { // If the button is active
      button.classList.remove('active'); // Remove the active class from the button
      chart.destroy(); // Destroy the existing chart
    } else { // If the button is not active
      button.classList.add('active'); // Add the active class to the button
      chart.destroy(); // Destroy the existing chart
      chart = new Chart(ctx, graphData[graphId]); // Create a new chart with the selected data
    }
  });
});
