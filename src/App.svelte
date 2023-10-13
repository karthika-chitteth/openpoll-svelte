<!-- App.svelte -->
<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './pages/public/home.svelte';
  import Signup from './pages/auth/signup.svelte';
  import Signin from './pages/auth/signin.svelte';
  import Dashboard from './pages/user/dashboard.svelte';
  export let url = '';
</script>

<Router {url}>
  <!-- <nav class="absolute">
    <Link to="/">Home</Link>
  </nav> -->
  <div>
    <!-- <Route path="/blog/:id" component={BlogPost} />
    <Route path="/blog" component={Blog} />
    <Route path="/about" component={About} /> -->
    <Route path="/"><Home /></Route>
    <Route path="/auth/signin"><Signin /></Route>
    <Route path="/auth/signup"><Signup /></Route>
    <Route path="/user"><Dashboard /></Route>
  </div>
</Router>
