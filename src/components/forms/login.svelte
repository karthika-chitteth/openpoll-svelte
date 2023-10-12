<script lang="ts">
  import * as yup from 'yup';
  import { supabase } from '../../supabaseClient';
  import type { SignupFormValue } from '../../types/form.types';
  import { navigate } from 'svelte-routing';
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  });
  let formErrors = [];
  let values: SignupFormValue = {
    email: '',
    password: ''
  };
  let errors = {};

  const validate = async () => {
    try {
      // `abortEarly: false` to get all the errors
      await schema.validate(values, { abortEarly: false });
      errors = {};
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password
      });
      if (!error) {
        navigate('/user/', { replace: true });
      }
    } catch (err: any) {
      // errors = extractErrors(err);
      const errors = err.inner.reduce((acc: any, err: any) => {
        return { ...acc, [err.path]: err.message };
      }, {});
      console.log(errors);
    }
  };
</script>

<main class="w-full max-w-md mx-auto mt-10">
  <div
    class=" bg-gray-200 border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="p-4 sm:p-7">
      <div class="text-center">
        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign In</h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Dont have an account?
          <a
            class="text-blue-600 decoration-2 hover:underline font-medium"
            href="../examples/html/signin.html"
          >
            Sign up now
          </a>
        </p>
      </div>

      <div class="mt-5">
        <div
          class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600"
        >
          Or
        </div>

        <form on:submit|preventDefault={validate}>
          <div class="grid gap-y-4">
            <div>
              <label for="email" class="block text-sm mb-2 dark:text-white">Email address</label>
              <div class="relative">
                <input
                  type="email"
                  name="email"
                  bind:value={values.email}
                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="example@opentrends.net"
                />
                <div
                  class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
                />
              </div>
              <p class="hidden text-xs text-red-600 mt-2" id="email-error">
                Please include a valid email address so we can get back to you
              </p>
            </div>

            <div>
              <label for="password" class="block text-sm mb-2 dark:text-white">Password</label>
              <div class="relative">
                <input
                  name="password"
                  bind:value={values.password}
                  type="password"
                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="**********"
                />
                <div
                  class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3"
                >
                  <svg
                    class="h-5 w-5 text-red-500"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                    />
                  </svg>
                </div>
              </div>
              <p class="hidden text-xs text-red-600 mt-2" id="password-error">
                8+ characters required
              </p>
            </div>

            <button
              type="submit"
              class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >Sign up</button
            >
          </div>
          <!-- {#if form?.error}
              <p>ERROR</p>
            {/if} -->
        </form>
      </div>
    </div>
  </div>
</main>
