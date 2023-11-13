<script lang="ts">
  import * as yup from 'yup';
  import TextField from '../input/text-field.svelte';
  const schema = yup.object<TQuestionFormValues>().shape({
    type: yup.string().required(),
    title: yup.string().required(),
    questions: yup.array().of(yup.string().required())
  });

  type TQuestionFormValues = {
    type: string;
    title: string;
    questions: string[];
  };
  let values: TQuestionFormValues = {
    type: '0',
    title: '',
    questions: ['']
  };
  let errors: any = {};
  const validate = async () => {
    console.log(values);
    try {
      // `abortEarly: false` to get all the errors
      const validatedValue = await schema.validate(values, { abortEarly: false });
      console.log('===>', validatedValue);
      errors = {};
    } catch (err: any) {
      // errors = extractErrors(err);

      errors = err.inner.reduce((acc: any, err: any) => {
        console.log(acc, err);
        return { ...acc, [err.path]: err.message };
      }, {});
    }
  };

  const addQuestion = () => {
    // if we use push svelte cant recognize the
    // changes so we need to use the assignment operator and spread to add new item
    values.questions = [...values.questions, ''];
  };

  const removeQuestion = (index: number) => {
    values.questions.splice(index, 1);
    values.questions = [...values.questions];
  };
</script>

<form on:submit|preventDefault={validate}>
  <div class="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
    <select
      bind:value={values.type}
      class="max-w-sm py-3 px-4 pr-9 block w-full border-solid border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
    >
      <option value="0" selected>Multiple choice</option>
      <option value="1">Word cloud</option>
    </select>
    <div class="max-w-[85rem] w-full mx-auto px-4 mt-5 flex flex-col">
      <h2 class="mt-2 mb-5 text-lg text-gray-900 font-bold">Question</h2>
      <p class="mt-2 mb-5 text-sm leading-6 text-gray-600">
        Ask a question and let participants choose from a list of answers.
      </p>
      <!-- <input
        bind:value={values.title}
        type="text"
        class="py-3 px-4 mb-5 block w-full border-solid border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        placeholder="Add question here..."
      /> -->
      <TextField
        label="Question"
        type="text"
        placeholder="Add question here..."
        name="name"
        error={errors?.title}
        bind:value={values.title}
      />
      <h2 class="mt-2 mb-5 text-lg text-gray-900 font-bold">Options</h2>

      {#each values.questions as _, i}
        <div
          class={`flex align-middle justify-center items-end gap-5 mb-5 ${
            errors[`questions[\"${i}\"]`] && 'items-center'
          }`}
        >
          <TextField
            label="Option {i + 1}"
            type="text"
            className="w-full"
            placeholder="Add question here..."
            name="name"
            error={errors[`questions[\"${i}\"]`] && 'Required'}
            bind:value={values.questions[+i]}
          />
          <button
            type="button"
            on:click={() => removeQuestion(i)}
            class="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.875rem] w-[2.875rem] rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 disabled:bg-slate-300"
            disabled={values.questions.length <= 1}
            ><svg
              class="w-3.5 h-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              ><path
                d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"
              /></svg
            ></button
          >
        </div>
      {/each}

      <button
        type="button"
        class="w-[10rem] mt-5 py-1 px-1 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        on:click={addQuestion}
        ><svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" /></svg
        >Add options</button
      >
      <div class="flex justify-end">
        <button
          type="submit"
          class="w-[15rem] h-[3rem] mt-5 py-1 px-1 inline-flex justify-center relative flex items-end items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          >Create Poll</button
        >
      </div>
    </div>
  </div>
</form>
