<script lang="ts">
  import { UserService } from '../../services/user.service';
  import { RegisterSchema } from '../../schema/auth/register.schema';
  import { navigate } from 'svelte-routing';
  import * as yup from 'yup';

  let formData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  let formErrors = {
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  };

  let errormsg = '';

  let isLoading = false;

  function toggleLoading() {
    isLoading = !isLoading;
  }

  async function formSubmit(event:any) {
    event.preventDefault();
    let response;

    try {
      formErrors = {
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
      };

      await RegisterSchema.validate(formData, { abortEarly: false });
      isLoading = true;
      response = await UserService.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmpassword: formData.confirmPassword
      });

      if (response) {
        navigate('/dashboard');
      }

      localStorage.setItem('token', response.data.token);
    } catch (error: any) {
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((err: yup.ValidationError) => {
          const propertyName = err.path?.toString() as string;
          formErrors = {
            ...formErrors,
            [propertyName]: err.message
          };
        });
      } else {
        errormsg = error.response.data.error;
      }
    } finally {
      isLoading = false;
    }
  }

  function clearErrorMessage() {
    errormsg = '';
  }
</script>

<main class="w-full max-w-md mx-auto">
  <div class="bg-gray-200 border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <div class="p-4 sm:p-7">
      <div class="text-center">
        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Already have an account?
          <a class="text-blue-600 decoration-2 hover:underline font-medium" href="/signin">
            Sign in here
          </a>
        </p>
      </div>

      <div>
        <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
          Or
        </div>

        <form on:submit={formSubmit}>
          <div class="grid gap-y-4">
            <div>
              <label class="block text-sm mb-2 dark:text-white"> Email address </label>
              <div class="relative">
                <input
                  type="email"
                  name="email"
                  bind:value={formData.email}
                  on:focus={clearErrorMessage}
                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm
                          focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900
                          dark:border-gray-700 dark:text-gray-400"
                  placeholder="example@opentrends.net"
                />
                <p class="text-xs text-red-600 mt-2" id="email-error">
                  {formErrors.email}
                </p>
                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3" />
              </div>
              <p class="text-xs text-red-600 mt-2" id="email-error"></p>
            </div>
            <div>
              <label class="block text-sm mb-2 dark:text-white"> Name </label>
              <div class="relative">
                <input
                  type="text"
                  name="name"
                  bind:value={formData.name}
                  on:focus={clearErrorMessage}
                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm
                          focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900
                          dark:border-gray-700 dark:text-gray-400"
                  placeholder="Username"
                />
                <p class="text-xs text-red-600 mt-2" id="email-error">
                  {formErrors.name}
                </p>
                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3" />
              </div>
              <p class="text-xs text-red-600 mt-2" id="email-error"></p>
            </div>

            <div>
              <label class="block text-sm mb-2 dark:text-white"> Password </label>
              <div class="relative">
                <input
                  name="password"
                  type="password"
                  bind:value={formData.password}
                  on:focus={clearErrorMessage}
                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm
                          focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900
                          dark:border-gray-700 dark:text-gray-400"
                  placeholder="**********"
                />
                <p class="text-xs text-red-600 mt-2" id="password-error">
                  {formErrors.password}
                </p>
                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
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
              <p class="text-xs text-red-600 mt-2" id="password-error"></p>
            </div>

            <div>
              <label class="block text-sm mb-2 dark:text-white"> Confirm Password </label>
              <div class="relative">
                <input
                  name="confirmPassword"
                  type="password"
                  bind:value={formData.confirmPassword}
                  on:focus={clearErrorMessage}
                  class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm
                          focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900
                          dark:border-gray-700 dark:text-gray-400"
                  placeholder="**********"
                />
                <p class="text-xs text-red-600 mt-2" id="confirm-password-error">
                  {formErrors.confirmPassword}
                </p>
                <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
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
              <p class="text-xs text-red-600 mt-2" id="confirm-password-error"></p>
            </div>
            <div class="errormessage">{errormsg}</div>
            <button
              type="submit"
              on:click={toggleLoading}
              class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              {#if isLoading}
                <span class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"></span>
              {/if}
              Sign up
            </button>
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
