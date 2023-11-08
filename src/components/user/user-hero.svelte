<script lang="ts">
  import { translate } from '../../services/i18n';
  import poll from '../../assets/3.svg';
  import { _Language } from '../../store';
</script>

<div class="max-w-[85rem] mx-auto px-4 sm:px-4 lg:px-4 mt-5">
  <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center mt-5">
    <div class="lg:col-span-3">
      <h1
        class="block text-3xl font-bold text-gray-800 dark:text-blue-800 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        {$translate('user.hero.title')}
      </h1>
      <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
        {$translate('user.hero.description')}
      </p>

      <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <a
          class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
          href="/users/create-poll"
        >
          {$translate('user.hero.createPoll')}
        </a>
      </div>
    </div>

    <div class="lg:col-span-4 mt-10 lg:mt-0">
      <img class="w-full rounded-xl" src={poll} alt="Image Description" />
    </div>
  </div>
</div>
