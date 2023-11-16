<!-- App.svelte -->
<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './pages/public/home.svelte';
  import Dashboard from './pages/public/dashboard.svelte';
  export let url = '';
  import { setupI18n } from './services/i18n';
  import { _Language } from './store';
  import Footer from './components/footer.svelte';

  // ...
  _Language.subscribe((lang) => {
    setupI18n({ withLocale: lang });
  });
</script>

<div class="h-[100vh]">
  <Router {url}>
    <Route path="/"><Home /></Route>
    <Route path="/dashboard"><Dashboard /></Route>
  </Router>
</div>
