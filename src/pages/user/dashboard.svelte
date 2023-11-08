<script lang="ts">
  import { onMount } from 'svelte';
  import UserTopbar from '../../components/user/user-topbar.svelte';

  import type { AuthSession } from '@supabase/supabase-js';
  import type { TPoll } from '../../types/poll.type';
  import { PollService } from '../../services/poll.service';
  import UserHero from '../../components/user/user-hero.svelte';
  import {userStore} from '../../store';

  let session: AuthSession;
  let polls: TPoll[] = [];

  onMount(() => {
    PollService.getPolls().then((data) => {
      polls = data;
    });
  });
</script>

<!-- ========== END HEADER ========== -->
<UserTopbar username={$userStore?.name} />

<!-- ========== MAIN CONTENT ========== -->
<main id="content">
  <div class="container mx-auto py-10">
    <UserHero />
  </div>
</main>
