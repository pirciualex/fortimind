<script lang="ts">
  import { fade } from "svelte/transition";
  import Button from "$lib/components/Button.svelte";

  let timerMinutes = "05";
  let timerSeconds = "00";
  let hasStarted = false;
  let hasFinished = false;
  let showText = false;

  const timer = () => {
    hasStarted = true;
    var timer = setInterval(() => {
      let actualMinutes = Number.parseInt(timerMinutes);
      let actualSeconds = Number.parseInt(timerSeconds);
      if (actualMinutes == 0 && actualSeconds == 1) {
        timerMinutes = "05";
        timerSeconds = "00";
        clearInterval(timer);
        hasFinished = true;
        return;
      }
      if (actualSeconds === 0) {
        actualSeconds = 59;
        actualMinutes--;
      } else {
        actualSeconds--;
      }

      timerSeconds = `${
        actualSeconds < 10 ? "0" + actualSeconds : actualSeconds
      }`;
      timerMinutes = `${
        actualMinutes < 10 ? "0" + actualMinutes : actualMinutes
      }`;
    }, 1000);
  };

  $: {
    showText = hasStarted && hasFinished;
  }
</script>

<div class="flex flex-col justify-center items-center">
  <h4>Start your meditation session</h4>
  <p class="mb-6 bg-dark text-light p-14 rounded-[50%] text-xl">
    {timerMinutes}:{timerSeconds}
  </p>
  <Button onClick={timer}>start</Button>
</div>

{#if showText}
  <h5 class="mt-10" transition:fade>
    Hooray, you've finised meditating for today!
  </h5>
{/if}
