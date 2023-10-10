<script lang="ts">
  let count: number = 0;
  $: double = count * 2;
  const onClick = () => {
    count++;
  };
</script>

<div
  class="w-[100vw] h-[100vh] flex align-middle bg-gray-200 flex-row justify-center items-center"
>
  <div>
    <h1 class="text-3xl font-bold italic text-gray-700">Hello world!</h1>
    <button on:click={onClick} class="bg-red-400 p-8 active:bg-red-500"
      >{count}</button
    >
    <label for="">Doubled Value : {double}</label>
  </div>
</div>
