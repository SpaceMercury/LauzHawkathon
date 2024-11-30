const ctx = document.getElementById("myChart").getContext("2d"); // Get the 2D rendering context of the canvas

// Mock data for three linear charts
const graphData = {
  graph1: { // Data for Graph 1 (Sales)
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Sales (in $1000)",
          data: [10, 20, 15, 25, 30],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 2,
        },
      ],
    },
  },
  graph2: { // Data for Graph 2 (Revenue)
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
  },
  graph3: { // Data for Graph 3 (Expenses)
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
  },
};

let chart = new Chart(ctx, graphData.graph1); // Initialize the chart with Graph 1 data

// Function to handle button clicks
const buttons = document.querySelectorAll('.graph-btn'); // Select all the graph buttons

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const graphId = button.id.replace('btn-', 'graph'); // Map the button ID to the graph data ID

    // Update button styles
    buttons.forEach(btn => btn.classList.remove('active')); // Remove 'active' class from all buttons
    button.classList.add('active'); // Add 'active' class to the clicked button

    // Update the chart
    chart.destroy(); // Destroy the existing chart
    chart = new Chart(ctx, graphData[graphId]); // Create a new chart with the selected data
  });
});
