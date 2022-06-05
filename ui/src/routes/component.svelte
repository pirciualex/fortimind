<script lang="ts">
  import { dev } from "$app/env";
</script>

{#if dev}
  <section>
    <h3>Here to test stuff...</h3>
    <h4>Only for dev!</h4>
  </section>

  <section class="colors">
    <h2 class="section-header">Colors</h2>
    <div class="content">
      <div class="boxes">
        <div class="box bg-light-darkest" />
        <div class="box bg-light-dark" />
        <div class="box bg-light border-4" />
        <div class="box bg-light-lightest" />
        <div class="box flex items-center justify-center">no color</div>
      </div>

      <div class="boxes">
        <div class="box bg-primary-darkest" />
        <div class="box bg-primary-dark" />
        <div class="box bg-primary" />
        <div class="box bg-primary-light" />
        <div class="box bg-primary-lightest" />
      </div>
      <div class="boxes">
        <div class="box bg-secondary-darkest" />
        <div class="box bg-secondary-dark" />
        <div class="box bg-secondary" />
        <div class="box bg-secondary-light" />
        <div class="box bg-secondary-lightest" />
      </div>
      <div class="boxes">
        <div class="box bg-accent-darkest" />
        <div class="box bg-accent-dark" />
        <div class="box bg-accent" />
        <div class="box bg-accent-light" />
        <div class="box bg-accent-lightest" />
      </div>
      <div class="boxes">
        <div class="box bg-dark-darkest" />
        <div class="box bg-dark-dark" />
        <div class="box bg-dark" />
        <div class="box bg-dark-light" />
        <div class="box bg-dark-lightest" />
      </div>
    </div>
  </section>

  <section>
    <h2 class="section-header">Section</h2>
    <div class="content" />
  </section>
{:else}
  <h1>Sorry, nothig to see here...</h1>
{/if}

<style lang="postcss">
  section {
    @apply my-20;
  }

  .section-header {
    @apply text-primary;
  }
  .colors .boxes {
    @apply w-full flex justify-between;
  }
  .colors .boxes .box {
    @apply w-32 h-32;
  }
</style>
