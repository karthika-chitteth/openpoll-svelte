<script lang="ts">
  import Login from '../../components/Audience/login.svelte';
  import BrandHeader from '../../components/brand-header.svelte';
  import Footer from '../../components/footer.svelte';
  export let id: string;
</script>

<div class="bg-[#1F1C46] h-[100vh]">
  <BrandHeader />
  <Login {id} />

  <Footer />
</div>
