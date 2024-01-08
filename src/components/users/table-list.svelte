<script lang="ts">
  import { onMount } from 'svelte';

  import { PollService } from '../../services/poll.service';

  import { navigate } from 'svelte-routing';

  import type { TResponse } from '../../types/api.types';
  import type { CreatePollResponse } from '../../types/poll.type';

  let polls: CreatePollResponse[] = []; // Initialize as an empty array

  onMount(async () => {
    const fetchData = async () => {
      const pollData: TResponse<CreatePollResponse | CreatePollResponse[]> =
        await PollService.listPoll();
      if (pollData.data !== undefined) {
        if (Array.isArray(pollData.data)) {
          polls = pollData.data;
        } else {
          polls = [pollData.data];
        }
      }
      console.log('pollData', pollData);
    };

    fetchData();
  });
  let showDeleteModal = false;
  let selectedPollId: number;

  const handleEditClick = async (pollId: number) => {
    navigate(`/edit-poll/${pollId}`);
  };

  // const handleDeleteClick = async (index: number, pollId: number) => {
  //   try {
  //     await PollService.deletePoll(pollId);
  //     // const updatedPolls = [...polls];
  //     polls.splice(index, 1);
  //     // set(polls, updatedPolls);
  //     polls = [...polls];
  //   } catch (error) {
  //     console.error('Error deleting poll:', error);
  //   }
  // };
  const handleDeleteClick = async (index: number, pollId: number) => {
    selectedPollId = pollId;
    showDeleteModal = true;
  };

  const confirmDelete = async () => {
    try {
      await PollService.deletePoll(selectedPollId);
      polls = polls.filter((poll) => poll.id !== selectedPollId);
      closeDeleteModal();
    } catch (error) {
      console.error('Error deleting poll:', error);
    }
  };

  const closeDeleteModal = () => {
    showDeleteModal = false;
    selectedPollId = 0;
  };
  const handleActivateClick = async (pollId: number, isActive: boolean) => {
    try {
      // Toggle the activation status using the API or service
      isActive ? await PollService.deactivatePoll(pollId) : await PollService.activatePoll(pollId);

      // Update the polls list after successful status update
      const updatedPolls = polls.map((poll) => {
        if (poll.id === pollId) {
          return { ...poll, isActive: !isActive };
        }
        return poll;
      });

      // Update the polls array with the updated data
      polls = [...updatedPolls];
    } catch (error) {
      console.error('Error toggling poll status:', error);
    }
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
            {#each polls as poll, index}
              <tr
                class={poll.id % 1 === 0
                  ? 'even:bg-gray-100 dark:even:bg-slate-800'
                  : 'odd:bg-white dark:odd:bg-slate-900'}
              >
                <td
                  class=" px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  {#if poll.isActive}
                    <a href={`/users/poll-details/${poll.id}`}>
                      <div>{poll.title}</div>
                    </a>
                  {:else}
                    <div>{poll.title}</div>
                  {/if}
                </td>
                <td class="px-6 py-4 text-center whitespace-nowrap text-sm font-medium">
                  {#if poll.isActive}
                    <span class="text-green-500">Active</span>
                  {:else}
                    <span class="text-red-500">Inactive</span>
                  {/if}
                </td>
                <td class="w-80 px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                  <button
                    type="button"
                    class="w-40 py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 {poll.isActive
                      ? 'bg-red-500'
                      : 'bg-green-500'}"
                    on:click={() => handleActivateClick(poll.id, poll.isActive)}
                  >
                    {#if poll.isActive}Deactivate
                    {:else}Activate
                    {/if}</button
                  >
                  {#if poll.isActive === false}
                    <button
                      type="button"
                      class="w-40 py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      on:click={() => handleEditClick(poll.id)}>Edit</button
                    >
                  {/if}
                  <button
                    type="button"
                    class="w-40 py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    on:click={() => handleDeleteClick(index, poll.id)}>Delete</button
                  >
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  {#if showDeleteModal}
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

        <div
          class="w-96 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-96 mx-auto left-0 right-0"
        >
          <div class="p-4 sm:p-10">
            <div class="flex gap-x-4 md:gap-x-7">
              <span
                class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] sm:w-[62px] sm:h-[62px] rounded-full border-4 border-red-50 bg-red-100 text-red-500 dark:bg-red-700 dark:border-red-600 dark:text-red-100"
              >
                <svg
                  class="flex-shrink-0 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                  />
                </svg>
              </span>
              <div class="grow">
                <h3 class="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">Delete Poll</h3>
                <p class="text-gray-500">Are you sure to delete poll?</p>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              on:click={confirmDelete}
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Delete Poll
            </button>
            <button
              on:click={closeDeleteModal}
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
