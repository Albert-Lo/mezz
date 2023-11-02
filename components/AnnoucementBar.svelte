<svelte:options customElement={{
  tag: 'announcement-bar',
  shadow: 'none',
  props: {
    texts: {
      attribute: 'data-texts',
      type: 'Array',
    },
    urls: {
      attribute: 'data-urls',
      type: 'Array',
    },
    interval: {
      attribute: 'data-interval',
      type: 'Number',
    }
  }
}} />

<script>
	export let texts;
  export let urls;
  export let interval;

  import { onMount } from 'svelte';

  let active = 0;
  onMount(() => {
    const iId = setInterval(() => {
      active = (active + 1) % texts.length;
    }, interval);

    return () => {
      clearInterval(iId);
    }
  });

</script>

<div class="w-full text-content-base font-bold overflow-x-hidden whitespace-nowrap">
  {#each texts as text, index}
    {#if urls[index]}
      <a class="w-full py-3 inline-block text-center transition-[margin]" style="margin-left: {index === 0 ? -100 * active : 0}vw" href={urls[index]}>{text}</a>
    {:else}
      <div class="w-full py-3 inline-block text-center transition-[margin]" style="margin-left: {index === 0 ? -100 * active : 0}vw">{text}</div>
    {/if}
  {/each}
</div>
