<!-- App.svelte -->
<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Home from './routes/public/home.svelte';
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
  </div>
</Router>
