<svelte:options accessors={true} />

<script lang="ts">
  import { ColorVariants } from "$lib/resources";

  export let variant: ColorVariants = ColorVariants.primary;
  export let disabled = false;
  export let extraClass = "";
  export let loading = false;
  export let onClick: () => void;

  const handleClick = async () => {
    loading = true;
    await onClick();
    loading = false;
  };
</script>

<button
  class:bg-primary={variant === ColorVariants.primary}
  class:bg-secondary={variant === ColorVariants.secondary}
  class:bg-accent={variant === ColorVariants.accent}
  class:bg-dark={variant === ColorVariants.dark}
  class:bg-light={variant === ColorVariants.light}
  class:bg-success={variant === ColorVariants.success}
  class:bg-danger={variant === ColorVariants.danger}
  class:bg-info={variant === ColorVariants.info}
  class="button {extraClass}
  {disabled || loading ? 'opacity-50 cursor-not-allowed' : 'hoverable'} 
  "
  on:click={handleClick}
>
  <slot />
</button>

<style lang="postcss">
  .button {
    @apply overflow-hidden transform relative py-2 px-6 rounded-md
    shadow-md transition duration-200 text-dark-darkest;
  }

  .hoverable {
    @apply hover:brightness-90;
  }
</style>
