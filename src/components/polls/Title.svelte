<script lang="ts">
  export let isEdit: boolean = false;
</script>

<div class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between mt-5">
  <h2
    class="block text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl dark:text-white mt-5"
  >
    {isEdit ? 'Edit Poll' : 'Create Poll'}
  </h2>
</div>
