<script lang="ts">
  import { InputTypes } from "$lib/resources";
  import { createEventDispatcher } from "svelte";

  export let id: string;
  export let label: string;
  export let value: string | number;
  export let placeholder: string = "";
  export let helper: string = "";
  export let extraClass: string = "";
  export let type: InputTypes = InputTypes.text;
  export let rows: number = 4;
  export let mandatory: boolean = false;
  export let validation: (v: string | number) => string = () => {
    return "";
  };

  const dispatch = createEventDispatcher();
  const hasValidation = validation.length > 0;

  let border = "focus:shadow-input";
  let helperText = "text-secondary";

  $: {
    if (hasValidation && helper) {
      if (helper === "valid") {
        border = "border border-success";
        helper = "";
      } else {
        border = "border border-danger";
        helperText = "text-danger";
      }
    }
  }

  const ref = (node: HTMLInputElement) => {
    node.type = type;
  };

  const changedValue = () => {
    validate();
    dispatch("change", {
      value,
    });
  };

  const validate = () => {
    if (hasValidation) {
      helper = validation(value);
    }
  };
</script>

<div class={extraClass}>
  <label for={id} class="flex flex-col w-full">
    <div class="flex">
      <span class="mb-2 text-lg font-medium text-secondary-darkest"
        >{label}</span
      >
      {#if mandatory}
        <span class="ml-1 text-lg font-medium text-danger">*</span>
      {/if}
    </div>
    {#if type === InputTypes.textArea}
      <textarea
        class="input-inner {border}"
        name={id}
        {id}
        {rows}
        bind:value
        on:change={changedValue}
        on:focus={validate}
      />
    {:else}
      <input
        class="input-inner {border}"
        {id}
        {placeholder}
        use:ref
        bind:value
        on:change={changedValue}
        on:focus={validate}
      />
    {/if}

    {#if helper}
      <span class="mt-1 text-sm {helperText}">{helper}</span>
    {/if}
  </label>
</div>

<style lang="postcss">
  .input-inner {
    @apply shadow-md px-4 py-2 rounded-md text-gray-600 outline-none focus:outline-none
        transition-all duration-[500ms];
  }
</style>
