<!-- App.svelte -->
<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './pages/public/home.svelte';
  import Dashboard from './pages/user/dashboard.svelte';
  import Login from './pages/auth/login.svelte';
  import Register from './pages/auth/register.svelte';
  import ProtectedRoute from './components/route/protected-route.svelte';
  export let url = '';
  import { setupI18n } from './services/i18n';
  import { _Language } from './store';
  import Footer from './components/footer.svelte';
  import Polls from './pages/user/polls.svelte';
  // ...
  _Language.subscribe((lang) => {
    setupI18n({ withLocale: lang });
  });
</script>

<div class="h-[100vh]">
  <Router {url}>
    <!-- <nav class="absolute">
    <Link to="/">Home</Link>
  </nav> -->
    <!-- <Route path="/blog/:id" component={BlogPost} />
    <Route path="/blog" component={Blog} />
    <Route path="/about" component={About} /> -->
    <Route path="/"><Home /></Route>
    <Route path="/auth/login"><Login /></Route>
    <Route path="/auth/register"><Register /></Route>
    <Route path="/user/">
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    </Route>
    <Route path="/user/polls">
      <ProtectedRoute>
        <Polls />
      </ProtectedRoute>
    </Route>
  </Router>
  <Footer />
</div>
