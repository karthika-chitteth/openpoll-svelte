<script lang="ts">
  import { navigate } from 'svelte-routing';
  import { writable } from 'svelte/store';
  const nameStore = writable('');
  export let id: string;
  console.log('uid', id);

  let name = '';
  function formSubmit(event: SubmitEvent) {
    event.preventDefault();
    nameStore.set(name);
    if (name != '') {
      navigate('/users/poll/' + id);
    }
  }
</script>

<main class="w-full max-w-md mx-auto mt-10">
  <div
    class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="p-4 sm:p-7">
      <div class="text-center">
        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Welcome to poll !!!</h1>
      </div>

      <div class="mt-5">
        <form on:submit={formSubmit}>
          <div class="grid gap-y-4">
            <div>
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label class="block text-sm mb-2 dark:text-white"> Name </label>
              <div class="relative">
                <input
                  type="text"
                  class="py-3 px-4 mb-5 block w-full border-solid border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Name"
                  bind:value={name}
                />
              </div>
            </div>

            <button
              type="submit"
              class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              continue
            </button>
            <p class="mt-5 mb-2 text-sm leading-2 text-gray-600 text-center">OR</p>
            <a href="users/poll" class=" mb-5 text-sm leading-4 text-gray-800 text-center">
              Continue as anonymous
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>

<style>
</style>
