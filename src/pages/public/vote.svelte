<script lang="ts">
  import BrandHeader from '../../components/brand-header.svelte';
  import AudiencePoll from '../../components/polls/audience-poll.svelte';

  export let id: string;
</script>

<div>
  <BrandHeader />
  <AudiencePoll {id} />
</div>
