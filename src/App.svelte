<!-- App.svelte -->
<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './pages/public/home.svelte';
  import PollDetails from './pages/polls/poll-details.svelte';
  import Dashboard from './pages/public/dashboard.svelte';
  export let url = '';
  import { setupI18n } from './services/i18n';
  import { _Language } from './store';
  import CreatePoll from './pages/polls/create-poll.svelte';
  import Signup from './pages/public/signup.svelte';
  import Signin from './pages/public/signin.svelte';
  import AudienceLogin from './pages/audience/audience-login.svelte';
  import Userpoll from './pages/polls/userpoll.svelte';
  import PollResult from './pages/polls/poll-result.svelte';
  import UserPoll from './pages/public/vote.svelte';

  // ...
  _Language.subscribe((lang) => {
    setupI18n({ withLocale: lang });
  });
</script>

<div class="h-[100vh]">
  <Router {url}>
    <Route path="/"><Home /></Route>
    <Route path="/dashboard"><Dashboard /></Route>
    <Route path="/users/create-poll"><CreatePoll isEdit={false} /></Route>
    <Route path="/poll/result/:id"><PollResult /></Route>
    <Route path="/poll/:id" let:params><AudienceLogin id={params.id} /></Route>
    <Route path="/edit-poll/:pollId">
      <CreatePoll isEdit={true} />
    </Route>
    <Route path="/users/poll-details/:id" let:params>
      <PollDetails id={params.id} />
    </Route>
    <Route path="/signup"><Signup /></Route>
    <Route path="/signin"><Signin /></Route>
    <Route path="/signin"><Signin /></Route>
    <Route path="/dashboard"><Dashboard /></Route>
    <Route path="/users/create-poll"><CreatePoll /></Route>
    <Route path="/signup"><Signup /></Route>
    <Route path="/users/poll/:id" let:params><UserPoll id={params.id} /></Route>
  </Router>
</div>
