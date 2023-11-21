<!-- <script>
  import { onMount } from 'svelte';
  //   import { activatePoll, deactivatePoll, deletePoll, listPoll } from '../../services/poll.service';
  import { PollService } from '../../services/poll.service';
  import { CreatePollResponse } from '../../models/response/polls/polls.response';
  import { navigate } from 'svelte-routing';

  let polls = [];

  onMount(async () => {
    const fetchData = async () => {
      const pollData = await PollService.listPoll();

      if (pollData && Array.isArray(pollData.data)) {
        setPolls(pollData.data);
      }
    };

    fetchData();
  });

  const handleEditClick = async (id) => {
    navigate('/users/edit-poll/' + id);
  };

  const handleDeleteClick = async (id) => {
    const response = await PollService.deletePoll(id);
    console.log('Poll deleted:', response);

    if (response.message === 'Success') {
      const updatedPollData = await PollService.listPoll();
      if (updatedPollData && Array.isArray(updatedPollData.data)) {
        setPolls(updatedPollData.data);
      }
    }
  };

  const handleActivateClick = async (id, isActivate) => {
    const actiivatePoll = isActivate
      ? await PollService.deactivatePoll(id)
      : await PollService.activatePoll(id);

    if (!isActivate) {
      navigate(`/users/poll-details/${id}`, { state: { actiivatePoll } });
      console.log('actiivatePoll', actiivatePoll);
    }
    if (actiivatePoll.message === 'Success') {
      const updatedPollData = await PollService.listPoll();
      if (updatedPollData && Array.isArray(updatedPollData.data)) {
        setPolls(updatedPollData.data);
      }
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
            {#each polls as poll, index (poll.id)}
              <tr
                class={index % 2 === 0
                  ? 'odd:bg-gray-100 dark:even:bg-slate-800'
                  : 'odd:bg-white dark:odd:bg-slate-900'}
              >
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  {#if poll.isActive}
                    <a href={`/users/poll-details/${poll.id}`}>
                      {#each poll.questions as question, questionIndex (question.id)}
                        <div key={questionIndex}>{question.title}</div>
                      {/each}
                    </a>
                  {:else}
                    {#each poll.questions as question, questionIndex (question.id)}
                      <div key={questionIndex}>{question.title}</div>
                    {/each}
                  {/if}
                </td>
                <td
                  class={`px-6 py-4 text-center whitespace-nowrap text-sm font-medium ${
                    poll.isActive ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {poll.isActive ? 'Active' : 'Inactive'}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <button
                    type="button"
                    class={`py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold ${
                      poll.isActive ? 'bg-red-500' : 'bg-green-500'
                    } text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800`}
                    on:click={() => handleActivateClick(poll.id, poll.isActive)}
                  >
                    {poll.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                  <button
                    type="button"
                    class="py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    on:click={() => handleEditClick(poll.id)}
                  >
                    {'Edit'}
                  </button>
                  <button
                    type="button"
                    class="py-2 px-3 mx-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    on:click={() => handleDeleteClick(poll.id)}
                  >
                    {'Delete'}
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div> -->
