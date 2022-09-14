// HandleForwardedEvent.svelte

<script setup>
    import Listing0402 from './Listing0402.svelte';
    let message = '';
    let buttonArray = [1,2,3,4,5,6,7,8,9,10];
    function handleClick(e) {
        message = `You clicked the ${e.event.target.value} button`;
    }
</script>
{#each buttonArray as button}
    <Listing0402 value={button} on:click={handleClick} />
{/each}
<p>{message}</p>
