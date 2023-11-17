<script>
  // @ts-nocheck

  const removeOption = () => {
    console.log('remove');
  };
  const addOption = () => {
    console.log('add');
  };
  const handleCreateClick = () => {
    console.log('create');
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
    value="question"
  />

  <h2 class="mt-2 mb-5 text-lg text-gray-900 font-bold">Options</h2>

  <div class="flex inline-flex">
    <input
      type="text"
      class="py-3 px-5 mr-2 mb-5 block w-full border-solid border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
      placeholder=""
      value=""
    />
    <button
      on:click={removeOption}
      type="button"
      class="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.875rem] w-[2.875rem] rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
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
  <button
    type="button"
    class="w-[10rem] mt-5 py-1 px-1 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
    on:click={addOption}
  >
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
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
