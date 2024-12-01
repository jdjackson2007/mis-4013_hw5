// Function to initialize a chart
function initComicChart(labels, data) {
    const ctx = document.getElementById('comicStats').getContext('2d');
    const comicChart = new Chart(ctx, {
        type: 'bar', // Bar chart
        data: {
            labels: labels, // Dynamic labels for the chart
            datasets: [{
                label: '# of Likes',
                data: data, // Dynamic data for the chart
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
                borderColor: 'rgba(54, 162, 235, 1)', // Border color
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Start the y-axis at zero
                }
            },
            plugins: {
                legend: {
                    display: true, // Display the legend
                    labels: {
                        color: '#333' // Legend text color
                    }
                }
            }
        }
    });
}

// Example data for Chart.js
const labels = ['Batman', 'Superman', 'Wonder Woman', 'Animal Man', 'The Question', 'Ambush Bug', 'Swamp Thing'];
const data = [12, 19, 3, 5, 2, 3, 7]; // Example likes data

// Initialize the chart with example data
initComicChart(labels, data);
