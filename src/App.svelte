<script lang="ts">
  import { add, sub } from "vite-dev-typescript-deps";
  let addX = 0;
  let addY = 0;
  let addZ = 0;
  function updateAdd() {
    addZ = add(addX, addY)
  }

  let subX = 0;
  let subY = 0;
  let subZ = 0;
  function updateSub() {
    subZ = sub(subX, subY)
  }
</script>

<main>
  <div><input bind:value={addX} on:input={updateAdd} > + <input bind:value={addY} on:input={updateAdd}> = <span>{addZ}</span></div>
  <div><input bind:value={subX} on:input={updateSub} > + <input bind:value={subY} on:input={updateSub}> = <span>{subZ}</span></div>
</main>

<style>
</style>
