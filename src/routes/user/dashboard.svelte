<script lang="ts">
  import { onMount } from 'svelte';
  import UserNavbar from '../../components/user/user-navbar.svelte';
  import UserTopbar from '../../components/user/user-topbar.svelte';

  import type { AuthSession } from '@supabase/supabase-js';
  import { supabase } from '../../supabaseClient';

  let session: AuthSession;

  onMount(() => {
    supabase.auth.getSession().then(({ data }) => {
      session = data.session!;

      if (!session) {
        window.location.href = '/auth/signin';
      }
    });

    supabase.auth.onAuthStateChange((_event, _session) => {
      session = _session!;
    });
  });
</script>

<!-- ========== END HEADER ========== -->
<UserTopbar logged_email={session?.user.email} />

<!-- ========== MAIN CONTENT ========== -->
<main id="content" role="main">
  <UserNavbar />
  <div class="container mx-auto py-10">
    {JSON.stringify(session?.user.email)}
  </div>
</main>
