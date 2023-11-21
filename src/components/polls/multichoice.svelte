<script lang="ts">
  import { PollService } from '../../services/poll.service';

  let options = [{ id: 1, title: '' }];
  let question: string = '';
  let inputValues: string[] = options.map((option) => option.title);

  let isEdit: boolean = false; // Set as per your logic
  let id: number | null = null; // Set as per your logic

  const handleInput = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index].title = value;
    options = updatedOptions;
  };

  const addOption = () => {
    const newId = options.length + 1;
    options = [...options, { id: newId, title: '' }];
    inputValues = [...inputValues, ''];
  };

  const removeOption = (index: number) => {
    if (options.length > 1) {
      options = options.filter((_, i) => i !== index);
    }
  };

  function updateOption(index: number, value: string) {
    const updatedOptions = [...options];
    updatedOptions[index].title = value;
    options = updatedOptions;
  }

  // const handleCreateClick = async () => {
  //   try {
  //     //       {
  //     //   "id": 0,
  //     //   "title": "string",
  //     //   "isActive": true,
  //     //   "date": "2023-11-21T06:59:35.114Z",
  //     //   "uniqueId": "string",
  //     //   "questions": [
  //     //     {
  //     //       "id": 0,
  //     //       "pollId": 0,
  //     //       "title": "string",
  //     //       "questionType": 0,
  //     //       "options": [
  //     //         {
  //     //           "id": 0,
  //     //           "title": "string",
  //     //           "questionId": 0
  //     //         }
  //     //       ]
  //     //     }
  //     //   ]
  //     // }

  //     const newPoll = {
  //       title: question,
  //       isActive: true,
  //       options: options.map((option) => ({ ...option, questionId: 1 }))
  //     };

  //     const response = await PollService.createPoll(newPoll);
  //     console.log('Poll created:', response);
  //   } catch (error) {
  //     console.error('Error creating poll:', error);
  //   }
  // };
  const handleCreateClick = async () => {
    try {
      const questions = [
        {
          id: 0,
          pollId: 0,
          title: question,
          questionType: 0,

          options: options.map((label) => ({
            id: 0,
            title: label,
            questionId: 0
          }))
        }
      ];

      const data = {
        // title: question,

        id: 0,
        title: 'string',
        isActive: true,
        date: '2023-11-21T06:59:35.114Z',
        uniqueId: 'string',

        questions: questions.map((label) => ({
          title: label.title,
          questionType: 0,
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

      // Resetting values after successful submission
      question = '';
      options = [];
      // Reset other necessary variables

      // Navigate to "/users" after successful submission
      // Use the appropriate navigation method for your app
      // navigate("/users");
    } catch (error) {
      console.error('Error creating poll:', error);
      console.error(`Error ${isEdit ? 'editing' : 'creating'} poll:`, error);
    }
  };
</script>

<div class="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
  <h2 class="mt-2 mb-5 text-lg text-gray-900 font-bold">Question</h2>
  <p class="mt-2 mb-5 text-sm leading-6 text-gray-600">
    Ask a question and let participants choose from a list of answers.
  </p>
  <input
    type="text"
    class="py-3 px-4 mb-5 block w-full border-solid border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
    placeholder="Add question here..."
    bind:value={question}
  />

  <h2 class="mt-2 mb-5 text-lg text-gray-900 font-bold">Options</h2>
  {#each options as option, index (option.id)}
    <div class="flex inline-flex">
      <input
        type="text"
        class="py-3 px-5 mr-2 mb-5 block w-full border-solid border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        placeholder={`Option ${option.id}`}
        value={inputValues[index]}
        on:input={(e) => {
          if (e.target instanceof HTMLInputElement) {
            handleInput(index, e.target.value);
          }
        }}
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
  <div class="flex justify-end">
    <button
      type="button"
      class="w-[15rem] h-[3rem] mt-5 py-1 px-1 inline-flex justify-center relative flex items-end items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      on:click={handleCreateClick}
    >
      Create Poll
    </button>
  </div>
</div>
