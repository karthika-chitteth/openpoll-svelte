<script lang="ts">
  import { onMount } from 'svelte';
  import { PollService } from '../../services/poll.service';
  import QRCodeGenerator from '../polls/QRCodeGenerator.svelte';
  import { writable } from 'svelte/store';
  import type { TPoll } from '../../types/poll.type';
  export let id: string;

  let poll = writable<TPoll>({});
  // let poll = writable({});
  const getPollDetails = async (id: string) => {
    if (id) {
      let pollData: TPoll = await PollService.getPolls(+id);
      // if (pollData.length > 0) {
      poll.set(pollData);
      console.log('poll', pollData);
      // }
    }
  };

  onMount(() => {
    getPollDetails(id);
  });

  const handleCopy = async () => {
    try {
      const inputElement = document.getElementById('poll-url-input') as HTMLInputElement;
      if (inputElement) {
        const copyText = inputElement.value;
        await navigator.clipboard.writeText(copyText);
        console.log('Copied to clipboard:', copyText);
      } else {
        console.error('Input element not found');
      }
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };
</script>

<div class="max-w-[85rem] mx-auto px-4 sm:px-4 lg:px-4 mt-5">
  <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center mt-5">
    <div class="lg:col-span-12">
      <h1
        class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white mb-5"
      >
        {$poll && $poll.title ? $poll.title : ''}
      </h1>

      <div>
        <a
          class="inline-flex items-center gap-x-1 text-sm text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-500"
          href={'/dashboard/'}
        >
          <svg
            class="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to dashboard
        </a>
      </div>
      <div class="my-3 max-w-lg w-full inline-flex gap-x-2">
        <input
          type="text"
          class="w-full"
          id="poll-url-input"
          value={window.location.origin + `/poll/${$poll?.uniqueId}`}
        />
        <button
          class="copybtn js-clipboard py-3 px-4 group inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          on:click={handleCopy}
        >
          Copy
          <span class="border-s ps-3.5 dark:border-gray-700">
            <svg
              class="js-clipboard-default w-4 h-4 group-hover:rotate-6 transition"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            </svg>

            <svg
              class="js-clipboard-success hidden w-4 h-4 text-blue-600 rotate-6"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        </button>
      </div>
      <div>
        <a class="mt-5 text-lg text-blue-500 dark:text-blue-100" href={`/poll/${$poll?.uniqueId}`}>
          <!--  -->
          Poll here
        </a>
      </div>

      <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <p
          class="py-2 px-3 mb-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          Live
        </p>
      </div>
    </div>

    <div class="lg:col-span-12 mt-10 lg:mt-0">
      {#if $poll && $poll.uniqueId}
        <QRCodeGenerator uniqueId={$poll.uniqueId} />
      {:else}
        <p>Loading...</p>
      {/if}
    </div>

    <a
      class="py-2 px-3 my-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      href={`/poll/result/${id}`}
    >
      Result
    </a>
  </div>
</div>
