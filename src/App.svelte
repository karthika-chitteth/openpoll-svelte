<!-- App.svelte -->
<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './routes/public/home.svelte';
  import Signup from './routes/auth/signup.svelte';
  import Signin from './routes/auth/signin.svelte';
  import Dashboard from './routes/user/dashboard.svelte';
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
