<script lang="ts">
  import { onMount } from 'svelte';
  import UserNavbar from '../../components/user/user-navbar.svelte';
  import UserTopbar from '../../components/user/user-topbar.svelte';

  import type { AuthSession } from '@supabase/supabase-js';
  import type { TPoll } from '../../types/poll.type';
  import { PollService } from '../../services/poll.service';

  let session: AuthSession;
  let polls: TPoll[] = [];

  onMount(() => {
    // AuthService.getSession().then(({ data }) => {
    //   session = data.session!;
    //   if (!session) {
    //     window.location.href = '/auth/signin';
    //   }
    // });
    PollService.getPolls().then((data) => {
      polls = data;
    });
  });
</script>

<!-- ========== END HEADER ========== -->
<UserTopbar logged_email={session?.user.email} />

<!-- ========== MAIN CONTENT ========== -->
<main id="content">
  <UserNavbar />
  <div class="container mx-auto py-10">
    {JSON.stringify(polls, null, 4)}
  </div>
</main>
