<script lang="ts">
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import { PollService } from '../../services/poll.service';

  export let id: string;
  let myChart: Chart;

  const getPollResult = async (id: string) => {
    if (id) {
      let PollResult = await PollService.pollResults(+id);

      if (PollResult && PollResult.data && PollResult.data.answers) {
        const answers = PollResult.data.answers[0];

        const titles = answers.multipleChoiceAnswers.map((answer) => answer.title);
        const totals = answers.multipleChoiceAnswers.map((answer) => answer.total);

        if (myChart) {
          myChart.data.labels = titles;
          myChart.data.datasets[0].data = totals;
          myChart.update();
        }
      }
    }
  };

  onMount(async () => {
    const canvas = document.getElementById('myChart');

    if (canvas instanceof HTMLCanvasElement) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: [],
            datasets: [
              {
                label: '# of Votes',
                data: [],

                barThickness: 50
              }
            ]
          },
          options: {
            scales: {
              y: {
                suggestedMin: 0,
                suggestedMax: 10
              }
            }
          }
        });

        await getPollResult(id);
      }
    } else {
      console.log('No result available');
    }
  });
</script>

<div class="max-w-[85rem] mx-auto px-4 sm:px-4 lg:px-4 mt-5">
  <canvas id="myChart" width="100" height="50"></canvas>
</div>
