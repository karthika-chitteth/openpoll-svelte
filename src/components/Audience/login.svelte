<script lang="ts">
  import { navigate } from 'svelte-routing';
  import { writable } from 'svelte/store';
  import { AudienceSchema } from '../../schema/auth/audience.schema';
  import * as yup from 'yup';
  const nameStore = writable('');
  export let id: string;
  let formData = {
    name: '',
  };
  let formErrors = { 
    name: ''
  };
  async function formSubmit(event: SubmitEvent) {
    event.preventDefault();
   try{
    formErrors = {
        name: ''
      };
    await AudienceSchema.validate( formData, { abortEarly: false });
    if (formData.name != '') {
      nameStore.set(formData.name);
      navigate('/users/poll/' + id);
    }    
   } 
   catch (error: any) {
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((err: yup.ValidationError) => {
          const propertyName = err.path?.toString() as string;
          formErrors = {
            ...formErrors,
            [propertyName]: err.message
          };
        });
      }
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
                name="name"
                bind:value={formData.name}
                class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm
                                    focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900
                                    dark:border-gray-700 dark:text-gray-400"
                placeholder="name"
              />
                <p class="text-xs text-red-600 mt-2" id="name-error">
                  {formErrors.name}
                </p>
              </div>
            </div>

            <button
              type="submit"
              class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              continue
            </button>
            <p class="mt-5 mb-2 text-sm leading-2 text-gray-600 text-center">OR</p>
            <a href="/users/poll/{id}" class=" mb-5 text-sm leading-4 text-gray-800 text-center">
              Continue as anonymous
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>

<style>
 .errormessage {
    padding: 0;
    margin: 0;
    color: red;
    display: block;
    font-size: 12px;
    line-height: 0.2;
  }

</style>
