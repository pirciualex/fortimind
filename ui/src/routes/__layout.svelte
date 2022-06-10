<script>
  import Footer from "$lib/layout/Footer.svelte";
  import Navigation from "$lib/layout/Navigation.svelte";
  import { onMount } from "svelte";
  import "../global.postcss";
  // console.log(window.window.innerWidth);

  let onMobile = false;
  onMount(() => {
    onMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
  });
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/7a313b20a1.js"
    crossorigin="anonymous"></script>
</svelte:head>

<div class="container mx-auto">
  <slot />
</div>
{#if onMobile}
  <Navigation />
{:else}
  <Footer />
{/if}

<style lang="postcss">
  :global(body) {
    @apply bg-light min-h-screen relative;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }

  .container {
    @apply min-h-[90vh];
  }
</style>
