<script>
  import { onMount } from 'svelte';
  import { useLocation } from 'svelte-routing';
  import { PollService } from '../../services/poll.service';
  import QRCodeGenerator from '../polls/QRCodeGenerator.svelte';
  import { writable } from 'svelte/store';
  export let id;
  console.log(id);

  // let pollTitle = location.state?.actiivatePoll.data?.title;
  // let { id } = useParams();

  let poll = writable({});

  const getPollDetails = async (id) => {
    if (id) {
      const pollData = await PollService.getPolls(+id);
      poll.set(pollData);
      console.log('poll', poll);
    }
  };

  onMount(() => {
    getPollDetails(id);
  });
</script>

<div class="max-w-[85rem] mx-auto px-4 sm:px-4 lg:px-4 mt-5">
  <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center mt-5">
    <div class="lg:col-span-12">
      <h1
        class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white mb-5"
      >
        {$poll && $poll.title ? $poll.title : ''}
      </h1>
      <a class="mt-5 text-lg text-blue-500 dark:text-blue-100" href={`/poll/${$poll?.uniqueId}`}>
        <!--  -->
        Poll here
      </a>

      <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <p
          class="py-2 px-3 mb-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          Live
        </p>
      </div>
    </div>

    <div class="lg:col-span-12 mt-10 lg:mt-0">
      <QRCodeGenerator />
    </div>
    <a
      class="py-2 px-3 my-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      href={`/poll/result/${id}`}
    >
      Result
    </a>
  </div>
</div>
