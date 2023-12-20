<script lang="ts">
  import { onMount } from 'svelte';
  import { PollService } from '../../services/poll.service';
  import { PollSchema } from '../../schema/poll/poll.schema';
  import type { PollQuestionResponse } from '../../types/poll.type';
  import * as yup from 'yup';
  import { navigate } from 'svelte-routing';

  let data: PollQuestionResponse;
  export let id: string;
  let formData = {
    pollId: 0,
    questionId: 0,
    questionType: 0,
    selectedOption: 0,
    voterName: ''
  };

  onMount(async () => {
    fetchData();
  });
  let formErrors = {
    selectedOption: '',
    voterName: null
  };
  const fetchData = async () => {
    try {
      const response = await PollService.getQuestion(String(id));
      if (response && response.data) {
        data = response.data;
        updateFormData();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateFormData = () => {
    formData = {
      pollId: data.id || 0,
      questionId: data.questions[0]?.id || 0,
      questionType: data.questions[0]?.questionType || 0,
      selectedOption: 0,
      voterName: ''
    };
  };

  function handleChange(event: any) {
    const { name, value } = event.target;
    const numberValue = parseFloat(value) || 0;
    formData = { ...formData, [name]: numberValue };
  }

  async function handleSubmitClick() { 
  if(formData.selectedOption != 0){ 
    try {
      await PollSchema.validate(formData, { abortEarly: false });
      const response = await PollService.vote({
        pollId: formData.pollId,
        questionId: formData.questionId,
        questionType: formData.questionType,
        answer1: formData.selectedOption,
        voterName: formData.voterName
      });
      navigate('/users/success');
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((err) => {
          const propertyName = err.path ? err.path.toString() : '';
          formErrors = { ...formErrors, [propertyName]: err.message };
        });
      }
    }
  }
  else {
      formErrors.selectedOption ='*please select an option.';
    }
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
        >
          <div class="relative flex items-start w-full">
            <div class="flex items-center h-5">
              <input
                id={`option-${option.id}`}
                name="selectedOption"
                type="radio"
                value={option.id}
                bind:group={formData.selectedOption}
                class="border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                on:change={handleChange}
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
    {#if formErrors.selectedOption}
    <div class="text-red-500 errormessage">{formErrors.selectedOption}</div>
  {/if}
    <button
      type="button"
      class="w-[15rem] h-[3rem] mt-5 py-1 px-1 inline-flex justify-center relative items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      on:click={handleSubmitClick}
    >
      Submit
    </button>
  </div>
{/if}
<style>
   .errormessage {
    padding: 0;
    margin: 0;
    color: red;
    display: block;
    font-size: 12px;
  }
</style>
