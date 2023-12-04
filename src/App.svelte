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
  import Footer from './components/footer.svelte';
  import Login from './pages/public/signup.svelte';
  import Signup from './pages/public/signup.svelte';
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
    <Route path="/edit-poll/:pollId">
      <CreatePoll isEdit={true} />
    </Route>
    <Route path="/users/poll-details/:pollId">
      <PollDetails />
    </Route>
    <Route path="/signup"><Signup /></Route>
  </Router>
</div>
