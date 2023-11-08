<script lang="ts">
  import { onMount } from 'svelte';
  import { UserService } from '../../services/user.service';
  import { navigate } from 'svelte-routing';

  let isLogged: boolean = false;
  onMount(() => {
    isLogged = UserService.isLoggedIn();
    if (!UserService.isLoggedIn()) {
      navigate('/auth/login');
    }
  });
</script>

{#if isLogged}
  <slot />
{/if}
