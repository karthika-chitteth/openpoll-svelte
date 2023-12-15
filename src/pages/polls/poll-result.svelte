<script lang="ts">
  import Barchart from '../../components/polls/barchart.svelte';
  import TopBar from '../../components/top-bar.svelte';
  export let id: string;
</script>

<TopBar />
<Barchart {id} />
