<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';

  let myChart;

  onMount(() => {
    // const ctx = document.getElementById('myChart').getContext('2d');

    const canvas = document.getElementById('myChart');

    if (canvas instanceof HTMLCanvasElement) {
      const ctx = canvas.getContext('2d');
      // Now TypeScript knows that ctx is not null
      if (ctx) {
        myChart = new Chart(ctx, {
          type: 'bar', // Set the chart type (e.g., 'bar', 'line', 'pie', etc.)
          data: {
            // Set your chart data here
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }
            ]
          },
          options: {
            // Set chart options here
          }
        });
      }
    } else {
      // Handle the case where 'myChart' is not found in the DOM
    }
  });
</script>

<canvas id="myChart" width="400" height="400"></canvas>
