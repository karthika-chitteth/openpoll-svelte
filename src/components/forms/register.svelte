<script lang="ts">
  let name: string;
  let email: string;
  let password: string;
  let confirmpassword: string;

  function formSubmit(event:SubmitEvent) {
    event.preventDefault();
    console.log(name, email, password, confirmpassword);
  }
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<body class="dark:bg-slate-900 bg-[#1F1C46] flex h-full items-baseline py-16">
  <main class="w-full max-w-md mx-auto p-6">
    <div
      class="mt-7 bg-gray-200 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-4 sm:p-7">
        <div class="text-center">
          <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Already have an account?
            <a
              class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="../examples/html/signin.html"
            >
              Sign in here
            </a>
          </p>
        </div>

        <div class="mt-5">
          <div
            class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600"
          >
            Or
          </div>

          <!-- Form -->
          <form on:submit={formSubmit}>
            <div class="grid gap-y-4">
              <!-- Form Group -->
              <div>
                <label for="email" class="block text-sm mb-2 dark:text-white">Email address</label>
                <div class="relative">
                  <input
                    type="email"
                    bind:value={email}
                    placeholder="email"
                    class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    required
                    aria-describedby="email-error"
                  />
                  <label for="name" class="block text-sm mb-2 dark:text-white">Name</label>
                  <div class="relative">
                    <input
                      type="text"
                      placeholder="username"
                      bind:value={name}
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      required
                      aria-describedby="name-error"
                    />
                    <div
                      class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
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
                  <p class="hidden text-xs text-red-600 mt-2" id="email-error">
                    Please include a valid email address so we can get back to you
                  </p>
                </div>
                <!-- End Form Group -->

                <!-- Form Group -->
                <div>
                  <label for="password" class="block text-sm mb-2 dark:text-white">Password</label>
                  <div class="relative">
                    <input
                      type="password"
                      bind:value={password}
                      placeholder="password"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      required
                      aria-describedby="password-error"
                    />
                    <div
                      class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
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
                <!-- End Form Group -->

                <!-- Form Group -->
                <div>
                  <label for="confirm-password" class="block text-sm mb-2 dark:text-white"
                    >Confirm Password</label
                  >
                  <div class="relative">
                    <input
                      type="password"
                      bind:value={confirmpassword}
                      id="confirm-password"
                      placeholder="confirm password"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      required
                      aria-describedby="confirm-password-error"
                    />
                    <div
                      class="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3"
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
                  <p class="hidden text-xs text-red-600 mt-2" id="confirm-password-error">
                    Password does not match the password
                  </p>
                </div>
                <!-- End Form Group -->

                <!-- Checkbox -->
                <div class="flex items-center">
                  <!-- End Checkbox -->

                  <button
                    type="submit"
                    class="w-full py-3 mt-6 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >Sign up</button
                  >
                </div>
              </div>
            </div>
          </form>
          <!-- End Form -->
        </div>
      </div>
    </div>
  </main>
</body>

<style>
</style>
