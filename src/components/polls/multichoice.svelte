<script lang="ts">
  import { onMount } from 'svelte';
  import { useLocation, navigate } from 'svelte-routing';
  import { PollService } from '../../services/poll.service';

  let question: string = '';
  let inputValues: string[] = [''];
  let errorMessage: string = '';
  export let isEdit: boolean = false;

  let id: number | null = null;
  let index = 0;

  function initializeValues(pollData: any) {
    if (pollData && pollData.questions && pollData.questions.length > 0) {
      question = pollData.questions[0]?.title || '';
      const options = pollData.questions[0]?.options || [];
      inputValues = options.map((option: { title: string }) => option.title);
    }
  }

  function handleInputChange(event: Event, index: number) {
    const target = event.target as HTMLInputElement;
    inputValues[index] = target.value;
  }

  const addOption = () => {
    inputValues = [...inputValues, ''];
  };

  const removeOption = (index: number) => {
    inputValues = inputValues.filter((_, i) => i !== index);
  };

  function areFieldsValid() {
    if (question.trim() === '') {
      errorMessage = 'Question field is empty';
      return false;
    }

    for (let i = 0; i < inputValues.length; i++) {
      if (inputValues[i].trim() === '') {
        errorMessage = `Option ${i + 1} field is empty`;
        return false;
      }
    }

    errorMessage = ''; // Reset error message if fields are valid
    return true;
  }

  const handleCreateClick = async () => {
    try {
      if (!areFieldsValid()) {
        console.log('Fields required');
        return;
      }

      const questions = [
        {
          title: question,
          questionType: 0,
          options: inputValues.map((label) => ({
            title: label
          }))
        }
      ];

      const data = {
        title: question,
        questions: questions.map((label) => ({
          title: label.title,
          questionType: label.questionType,
          options: label.options.map((label) => ({ title: label.title }))
        }))
      };

      let response;

      if (isEdit && id !== null) {
        response = await PollService.updatePoll(data, id);
      } else {
        response = await PollService.createPoll(data);
      }

      console.log(`Poll ${isEdit ? 'edited' : 'created'}:`, response);

      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating poll:', error);
      console.error(`Error ${isEdit ? 'editing' : 'creating'} poll:`, error);
    }
  };

  function getParamsFromUrl() {
    const path = window.location.pathname;
    const parts = path.split('/');
    const idFromPath = parts[parts.length - 1];

    return Number(idFromPath);
  }

  onMount(async () => {
    id = await getParamsFromUrl();

    if (isEdit && id !== null) {
      try {
        const response = await PollService.getPolls(id);

        const pollData = response;
        initializeValues(pollData);
      } catch (error) {
        console.error('Error fetching poll:', error);
      }
    }
  });
</script>

<div class="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
  <h2 class="mt-2 mb-5 text-lg text-gray-900 font-bold">Question</h2>
  <input
    type="text"
    class="py-3 px-4 mb-5 block w-full border-solid border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
    placeholder="Add question here..."
    bind:value={question}
  />

  <h2 class="mt-2 mb-5 text-lg text-gray-900 font-bold">Options</h2>
  {#each inputValues as value, index (index)}
    <div class="flex inline-flex">
      <input
        type="text"
        class="py-3 px-5 mr-2 mb-5 block w-full border-solid border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        placeholder={`Option ${index + 1}`}
        bind:value={inputValues[index]}
        on:input={(event) => handleInputChange(event, index)}
      />

      <button
        type="button"
        class="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.875rem] w-[2.875rem] rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        on:click={() => removeOption(index)}
      >
        <svg
          class="w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"
          />
        </svg>
      </button>
    </div>
  {/each}

  <button
    type="button"
    class="w-[10rem] mt-5 py-1 px-1 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
    on:click={addOption}
  >
    <svg
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 24 24"
      height="30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
    </svg>
    Add options
  </button>
  {#if errorMessage}
    <div class="text-red-500 mt-3">{errorMessage}</div>
  {/if}
  <div class="flex justify-end">
    <button
      type="button"
      class="w-[15rem] h-[3rem] mt-5 py-1 px-1 inline-flex justify-center relative flex items-end items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      on:click={handleCreateClick}
    >
      {isEdit ? 'Edit Poll' : 'Create Poll'}
    </button>
  </div>
</div>
