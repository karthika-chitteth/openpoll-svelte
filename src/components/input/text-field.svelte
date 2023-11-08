<script lang="ts">
  export let value: string;
  export let type: 'text' | 'email' | 'password' | 'number' = 'text';
  export let label: string = 'Label';

  export let name: string;
  export let className: string = '';
  export let placeholder: string;
  const onInput = (e: any) => (value = e.target.value);
  export let error = '';
</script>

<div>
  <label for="email" class="block text-sm mb-2 dark:text-white">{label}</label>
  <div class={`relative rounded-md ${error ? 'border-red-600 border' : ''}`}>
    <input
      {type}
      {name}
      {value}
      on:input={onInput}
      class={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 ${className} `}
      {placeholder}
    />
    <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3" />
  </div>
  {#if error}
    <p class="text-xs text-red-600 mt-2" id="email-error">
      Please include a valid email address so we can get back to you
    </p>
  {/if}
</div>
