<script lang="ts">
  import { onMount } from 'svelte';
  import UserTopbar from '../../components/user/user-topbar.svelte';

  import type { AuthSession } from '@supabase/supabase-js';
  import type { TPoll } from '../../types/poll.type';
  import { PollService } from '../../services/poll.service';
  import UserHero from '../../components/user/user-hero.svelte';
  import { userStore } from '../../store';

  //   onMount(() => {});
</script>

<!-- ========== END HEADER ========== -->
<UserTopbar username={$userStore?.name} />

<!-- ========== MAIN CONTENT ========== -->
<main id="content">
  <slot />
</main>
