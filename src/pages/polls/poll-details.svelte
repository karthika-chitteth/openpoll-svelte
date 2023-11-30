<script>
  import PollDetailsContent from '../../components/polls/poll-details-content.svelte';
  import TopBar from '../../components/top-bar.svelte';

  const token = localStorage.getItem('value');
</script>

{#if token !== null}
  <TopBar />
  <PollDetailsContent />
{:else}
  <TopBar />
  <div class="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
    <h1 class="mt-5 bg-red-500 text-sm text-white rounded-md p-4">Not accessible</h1>
  </div>
{/if}
