<script lang="ts">
  import { assets } from "$app/paths";
  import Goal from "$lib/goals/Goal.svelte";
  import NewGoal from "$lib/goals/NewGoal.svelte";
  import { goalsData } from "$lib/resources";
  import Goals from "./goals.svelte";

  const quotes = [
    {
      description:
        "You've gotta dance like there's nobody watching,love like you'll never be hurt,sing like there's nobody listening,and live like it's heaven on earth.",
      author: "William W. Purkey",
    },
    {
      description: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      description:
        "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "Mahatma Gandhi",
    },
    {
      description:
        "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
      author: "Martin Luther King Jr.",
    },
    {
      description:
        "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
      author: "Marilyn Monroe ",
    },
  ];

  const qod = quotes[4];
  //   onMount(() => {
  //     fetch("https://api.api-ninjas.com/v1/quotes?category=inspirational")
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   });

  let primaryGoal: any;
  goalsData.subscribe(
    (goals) => (primaryGoal = goals.find((x) => x.isPrimary))
  );
</script>

<img class="mb-2" src="{assets}/img/dashboard.jpg" alt="trees" />

<p>{qod.description}</p>
<div class="flex justify-end mb-8">
  <small>- {qod.author}</small>
</div>

{#if primaryGoal}
  <Goal goal={primaryGoal} />
{:else}
  <NewGoal isPrimary />
{/if}
