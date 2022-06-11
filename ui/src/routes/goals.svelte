<script lang="ts">
  import Goal from "$lib/goals/Goal.svelte";
  import NewGoal from "$lib/goals/NewGoal.svelte";
  import { goalsData } from "$lib/resources";
  import { onDestroy } from "svelte";

  let goals: any = [];
  const unsubscribeGoals = goalsData.subscribe((data) => (goals = data));

  onDestroy(() => unsubscribeGoals());
</script>

<div class="py-6">
  <h1>Set your goals for today!</h1>
  <NewGoal />
  <div class="grid grid-cols-2 gap-4 mt-6">
    {#each goals as goal (goal.id)}
      <Goal {goal} />
    {/each}
  </div>
</div>

<style lang="postcss">
</style>
