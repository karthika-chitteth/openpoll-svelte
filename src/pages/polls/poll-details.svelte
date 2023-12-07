<script lang="ts">
  import PollDetailsContent from '../../components/polls/poll-details-content.svelte';
  import TopBar from '../../components/top-bar.svelte';
  export let id: string;
  let token = '';

  const storedData = localStorage.getItem('openpoll_user');
  if (storedData) {
    const data = JSON.parse(storedData);
    token = data.token;
    console.log('token', data);
  }
</script>

{#if token !== null}
  <TopBar />
  <PollDetailsContent {id} />
{:else}
  <TopBar />
  <div class="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
    <h1 class="mt-5 bg-red-500 text-sm text-white rounded-md p-4">Not accessible</h1>
  </div>
{/if}
