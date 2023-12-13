<!-- <script>
  import { onMount } from 'svelte';
  import { useLocation } from 'svelte-spa-router';
  import TopBar from '../../components/top-bar.svelte';
  import Footer from '../../components/footer.svelte';
  import Title from '../../components/polls/Title.svelte';
  import Type from '../../components/polls/type.svelte';
  import Options from '../../components/polls/multichoice.svelte';
  let isEdit = false;

  onMount(() => {
    const { pathname } = useLocation();
    isEdit = pathname.includes('/users/edit-poll/');
  });
</script>

<div>
  <TopBar />
  <Title {isEdit} />
  <Type />
  <Options {isEdit} />

</div> -->
<script>
  import { onMount } from 'svelte';
  import { useLocation } from 'svelte-routing';
  import TopBar from '../../components/top-bar.svelte';
  import Footer from '../../components/footer.svelte';
  import Title from '../../components/polls/Title.svelte';
  import Type from '../../components/polls/type.svelte';
  import Options from '../../components/polls/multichoice.svelte';

  export let isEdit = false; // Initialize isEdit as false

  const location = useLocation();

  // Subscribe to changes in the location object
  onMount(() => {
    const unsubscribe = location.subscribe((value) => {
      const pathname = value.pathname;
      console.log(pathname, 'Current pathname'); // Debugging: Check the current pathname

      // Check if the pathname matches '/users/edit-poll/'
      isEdit = pathname.includes('/edit-poll/');
      console.log(isEdit, 'isEdit');
    });

    return unsubscribe; // Clean up when the component unmounts
  });
</script>

<div>
  <TopBar />
  <Title {isEdit} />
  <Type />
  <Options {isEdit} />
  <!-- <Footer /> -->
</div>
