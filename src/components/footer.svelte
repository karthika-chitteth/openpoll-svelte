<script>
  import { _Language } from '../store';
  const toggleLanguage = () => {
    const lang = $_Language === 'en' ? 'es' : 'en';
    localStorage.setItem('openpoll_lang', lang);
    _Language.set(lang);
  };
</script>

<footer class="bg-gray fixed w-full bottom-0 px-5 py-2 backdrop-blur-md z-40">
  <div class=" grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
    <div class="flex justify-between items-center">
      <p class="text-sm text-gray-400">Made with ♥️ | openpoll</p>
    </div>
    <!-- End Col -->
    <button
      on:click={toggleLanguage}
      type="button"
      class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none"
    >
      {$_Language}
    </button>
    <!-- Social Brands -->

    <!-- End Social Brands -->
  </div>
</footer>
