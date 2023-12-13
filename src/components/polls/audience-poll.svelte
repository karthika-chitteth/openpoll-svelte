<!-- <script>
  import { getQuestion, vote } from '../../services/poll.service';
  import { onMount } from 'svelte';
  import * as yup from 'yup';

  let id = undefined;
  let data = null;
  let formData = {
    pollId: 0,
    questionId: 0,
    questionType: 0,
    selectedOption: 0,
    voterName: ''
  };
  let formErrors = {
    selectedOption: null,
    voterName: null
  };

  onMount(async () => {
    const fetchData = async () => {
      try {
        const response = await getQuestion(String(id));
        if (response && response.data) {
          data = response.data;
          setFormData({
            pollId: data.id || 0,
            questionId: data.questions[0]?.id || 0,
            questionType: data.questions[0]?.questionType || 0,
            selectedOption: 0,
            voterName: ''
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  });

  async function handleSubmitClick() {
    try {
      await PollSchema.validate(formData, { abortEarly: false });
      const response = await vote({
        pollId: formData.pollId,
        questionId: formData.questionId,
        questionType: formData.questionType,
        answer1: formData.selectedOption,
        voterName: formData.voterName
      });
      localStorage.clear();
      // You can navigate using Svelte's router or use a store to manage navigation state
      console.log('Response:', response);
    } catch (error) {
      console.error(error);
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((err) => {
          const propertyName = err.path ? err.path.toString() : '';
          formErrors = { ...formErrors, [propertyName]: err.message };
        });
      } else {
        console.error(error);
      }
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const numberValue = parseFloat(value) || 0;
    formData = { ...formData, [name]: numberValue };
  }
</script>

{#if data}
  <div class="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
    <h2 class="mt-2 mb-5 text-lg text-gray-900 font-bold">
      {data.questions[0].title}
    </h2>

    <ul class="max-w-sm flex flex-col">
      {#each data.questions[0].options as option (option.id)}
        <li
          class="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px"
          key={option.id}
        >
          <div class="relative flex items-start w-full">
            <div class="flex items-center h-5">
              <input
                id={`option-${option.id}`}
                name="selectedOption"
                type="radio"
                value={option.id}
                checked={formData.selectedOption === option.id}
                on:change={handleChange}
                class="border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              />
            </div>
            <label
              for={`option-${option.id}`}
              class="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500"
            >
              {option.title}
            </label>
          </div>
        </li>
      {/each}
    </ul>

    <button
      type="button"
      class="w-[15rem] h-[3rem] mt-5 py-1 px-1 inline-flex justify-center relative items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      on:click={handleSubmitClick}
    >
      Submit
    </button>
    {#if formErrors.selectedOption}
      <div class="text-red-500">{formErrors.selectedOption}</div>
    {/if}
  </div>
{/if} -->
<p>a</p>