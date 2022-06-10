<script>
  import { assets } from "$app/paths";
</script>

<header>
  <video autoplay muted loop>
    <source src="{assets}/img/bg.mp4" type="video/mp4" />
  </video>

  <div class="overlay" />

  <div class="text">
    <h1 class="text-primary-lightest">Your guide to a more mindfull self</h1>
    <h4>
      Fortimind will help you everyday to become a better version of yourself!
    </h4>
  </div>
</header>

<style lang="postcss">
  header {
    @apply relative h-screen w-screen flex justify-center items-center;
    left: calc(-50vw + 50%);
    margin-left: -8px;
  }

  header video {
    @apply absolute top-0 left-0 w-full h-full object-cover opacity-90;
  }

  header .overlay {
    @apply absolute top-0 left-0 w-full h-full object-cover bg-accent-darkest mix-blend-overlay;
  }

  header .text {
    @apply relative z-10 text-light w-full md:w-4/5 bg-dark/[.6] rounded p-8;
  }
</style>
