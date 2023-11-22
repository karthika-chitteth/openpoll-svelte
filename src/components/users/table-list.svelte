<script>
  import { onMount } from 'svelte';
  import { PollService } from '../../services/poll.service';

  let polls = [];

  onMount(async () => {
    const fetchData = async () => {
      const pollData = await PollService.listPoll();
      polls = pollData.data;
      console.log(polls);
    };

    fetchData();
  });

  const handleEditClick = async () => {
    // Handle edit click
  };

  const handleDeleteClick = async () => {
    // Handle delete click
  };

  const handleActivateClick = async () => {
    // Handle activate click
  };
</script>

<div class="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
  <h2
    class="block text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl dark:text-white"
  >
    Your Polls
  </h2>
  <div class="-m-1.5 overflow-x-auto mt-5">
    <div class="p-1.5 min-w-full inline-block align-middle mt-5">
      <div class="overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto">
          <thead>
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
              >
                Polls
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
              >
                Status
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {#each polls as poll}
              <tr
                class={poll.id % 2 === 0
                  ? 'even:bg-gray-100 dark:even:bg-slate-800'
                  : 'odd:bg-white dark:odd:bg-slate-900'}
              >
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  <a href={`/users/poll-details/${poll.id}`}>
                    <div>{poll.title}</div>
                  </a>
                </td>
                <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium">
                  {#if poll.isActive}
                    <span class="text-green-500">Active</span>
                  {:else}
                    <span class="text-red-500">Inactive</span>
                  {/if}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <button
                    type="button"
                    class="py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 {poll.isActive
                      ? 'bg-red-500'
                      : 'bg-green-500'}"
                    on:click={() => handleActivateClick()}
                  >
                    {#if poll.isActive}Deactivate {:else}Activate {/if}</button
                  >
                  <button
                    type="button"
                    class="py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    on:click={() => handleEditClick()}>Edit</button
                  >
                  <button
                    type="button"
                    class="py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    on:click={() => handleDeleteClick()}>Delete</button
                  >
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
