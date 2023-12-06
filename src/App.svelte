<!-- App.svelte -->
<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './pages/public/home.svelte';
  import Dashboard from './pages/public/dashboard.svelte';
  import { setupI18n } from './services/i18n';
  import { _Language } from './store';
  import CreatePoll from './pages/polls/create-poll.svelte';
  import Signup from './pages/public/signup.svelte';
  import Signin from './pages/public/signin.svelte';
  import Audiencelogin from './components/Audience/login.svelte';
  import AudienceLogin from './pages/audience/audience-login.svelte';
  import UserPoll from './components/polls/user-poll.svelte';
  import Userpoll from './pages/polls/userpoll.svelte';
  export let url = '';
  // ...
  _Language.subscribe((lang) => {
    setupI18n({ withLocale: lang });
  });
</script>

<div class="h-[100vh]">
  <Router {url}>
    <Route path="/"><Home /></Route>
    <Route path="/signin"><Signin /></Route>
    <Route path="/dashboard"><Dashboard /></Route>
    <Route path="/users/create-poll"><CreatePoll /></Route>
    <Route path="/signup"><Signup /></Route>
    <Route path="/audience"> <AudienceLogin/> </Route>
    <Route path='/users/poll'><Userpoll/> </Route>
  </Router>
</div>
