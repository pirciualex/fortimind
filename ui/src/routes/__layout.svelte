<script>
  import "../global.postcss";
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/7a313b20a1.js"
    crossorigin="anonymous"></script>
</svelte:head>

<div class="container mx-auto">
  <slot />
</div>

<style lang="postcss">
  :global(body) {
    @apply bg-light min-h-screen relative;
    /* font-family: "Open Sans", Arial, Helvetica, sans-serif; */
  }
</style>
