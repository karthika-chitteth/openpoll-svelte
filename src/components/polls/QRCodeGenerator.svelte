<!-- QRCode.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import QRCode from 'qrcode';
  export let uniqueId;
  console.log(uniqueId,"uniqueId");
  let qrData = '/poll/' + uniqueId;
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
    <img src={qrImageUrl} alt="QR Code" />
  {:else}
    <p>Generating QR Code...</p>
  {/if}
</div>
