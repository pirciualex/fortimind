<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Input from "$lib/components/Input.svelte";
  import { goalsData } from "$lib/resources";

  export let isPrimary = false;
  let goalDescription: string;
  let canAddGoal = false;

  const onInputValidation = (value: string | number) => {
    let message = "valid";
    if (typeof value === "string" && value.length < 4) {
      message = "Description must be at least 10 leters long";
      canAddGoal = false;
    }
    canAddGoal = true;
    return message;
  };

  const onAddGoal = () => {
    goalsData.update((currentGoals) => {
      return [
        ...currentGoals,
        {
          id: Math.floor(Math.random() * 10000),
          description: goalDescription,
          done: false,
          isPrimary,
        },
      ];
    });
  };
</script>

<Input
  id="newGoal"
  extraClass="mb-2"
  label="Describe your goal:"
  bind:value={goalDescription}
  mandatory
  validation={onInputValidation}
/>

<Button onClick={onAddGoal} disabled={!canAddGoal}>Create</Button>
