<!-- QRCode.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import QRCode from 'qrcode';
  let baseurl = import.meta.env.VITE_BASE_URL;
  export let uniqueId;
  console.log(baseurl, 'baseurl');
  let qrData = baseurl + 'poll/' + uniqueId;
  let qrImageUrl = '';

  onMount(async () => {
    try {
      qrImageUrl = await QRCode.toDataURL(qrData);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  });
</script>

<div>
  {#if qrImageUrl}
    <img src={qrImageUrl} alt="QR Code" class="qr-code" />
  {:else}
    <p>Generating QR Code...</p>
  {/if}
</div>

<style>
  .qr-code {
    width: 500px;
  }
</style>
