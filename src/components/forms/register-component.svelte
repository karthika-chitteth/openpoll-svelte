<script lang="ts">
  import * as yup from 'yup';
  import { navigate } from 'svelte-routing';
  import { createEventDispatcher } from 'svelte';
  import type { TUserRegisterPayload } from '../../types/user.type';
  import TextField from '../input/text-field.svelte';
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    repassword: yup.string().oneOf([yup.ref('password'), ''], 'Passwords must match')
  });
  let formErrors = [];
  const dispatch = createEventDispatcher<{
    submit: TUserRegisterPayload;
  }>();
  type TSignupFormValue = {
    name: string;
    email: string;
    password: string;
    repassword: string;
  };
  let values: TSignupFormValue = {
    name: '',
    email: '',
    password: '',
    repassword: ''
  };
  let errors: any = {};

  const validate = async () => {
    try {
      // `abortEarly: false` to get all the errors
      await schema.validate(values, { abortEarly: false });
      errors = {};
      console.log('===>');
      dispatch('submit', {
        email: values.email,
        password: values.password,
        name: values.name
      });
      // const { data, error } = await supabase.auth.signUp({
      //   email: values.email,
      //   password: values.password
      // });
      // if (!error) {
      //   navigate('/user/', { replace: true });
      // }ee
    } catch (err: any) {
      // errors = extractErrors(err);
      errors = err.inner.reduce((acc: any, err: any) => {
        return { ...acc, [err.path]: err.message };
      }, {});
    }
  };
</script>

<main class="w-full max-w-md mx-auto mt-10">
  <div
    class=" bg-gray-200 border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="p-4 sm:p-7">
      <div class="text-center">
        <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Already have an account?
          <a class="text-blue-600 decoration-2 hover:underline font-medium" href="/auth/login">
            Sign in here
          </a>
        </p>
      </div>

      <div class="mt-5">
        <div
          class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600"
        >
          Or
        </div>

        <!-- Form -->
        <form on:submit|preventDefault={validate}>
          <div class="grid gap-y-4">
            <TextField
              label="Name"
              type="text"
              placeholder="Name"
              name="name"
              error={errors?.name}
              bind:value={values.name}
            />
            <TextField
              label="Email"
              type="email"
              placeholder="Email"
              name="email"
              bind:value={values.email}
              error={errors?.email}
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
              bind:value={values.password}
              error={errors?.password}
            />
            <TextField
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              name="repassword"
              bind:value={values.repassword}
              error={errors?.repassword}
            />

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
        <!-- End Form -->
      </div>
    </div>
  </div>
</main>
