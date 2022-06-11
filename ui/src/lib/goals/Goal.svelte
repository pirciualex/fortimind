<script lang="ts">
  import { goalsData } from "$lib/resources";

  export let goal: any;

  const onDeleteGoal = (goalId: any) => {
    goalsData.update((currentGoals) => {
      return currentGoals.filter((x) => x.id !== goalId);
    });
  };
</script>

<div
  class="flex flex-col p-4 rounded-md bg-primary justify-between"
  class:done={goal.done}
>
  <div class="flex justify-between pb-2">
    <p>{goal.description}</p>
    {#if !goal.isPrimary}
      <button
        class="self-start text-danger pointer"
        on:click={() => onDeleteGoal(goal.id)}
      >
        <i class="fa-solid fa-trash" />
      </button>
    {/if}
  </div>
  <input
    class="self-end"
    type="checkbox"
    name="goal-completed"
    bind:checked={goal.done}
    id={goal.id}
  />
</div>

<style lang="postcss">
  .done {
    @apply bg-primary-lightest;
  }
</style>
