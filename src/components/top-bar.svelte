<script lang="ts">
  // @ts-nocheck
  import logo from '../assets/logo.svg';
  import { navigate } from 'svelte-routing';

  const storedValue = localStorage.getItem('openpoll_user');
  const userObject = storedValue ? JSON.parse(storedValue) : null;
  const userName = userObject ? userObject.name : null;
  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };
</script>

<header
  class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-900 text-sm py-4 dark:bg-gray-800"
>
  <nav
    class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
    aria-label="Global"
  >
    <div class="flex items-center justify-between">
      <a class="flex-none" href="/users">
        <img src={logo} alt="" />
      </a>
      <div class="sm:hidden">
        <button
          type="button"
          class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          data-hs-collapse="#navbar-image-1"
          aria-controls="navbar-image-1"
          aria-label="Toggle navigation"
        >
          <svg
            class="hs-collapse-open:hidden w-4 h-4"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <svg
            class="hs-collapse-open:block hidden w-4 h-4"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      id="navbar-image-1"
      class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
    >
      <div
        class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5"
      >
        <button
          type="button"
          on:click={handleLogout}
          class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white outline-none transition-all text-sm"
        >
          Logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-logout"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
            />
            <path d="M7 12h14l-3 -3m0 6l3 -3" />
          </svg>
        </button>

        <div
          class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white outline-none transition-all text-sm"
        >
          {userName}
        </div>
      </div>
    </div>
  </nav>
</header>
