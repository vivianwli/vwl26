<script lang="ts">
  import headshot from '$lib/assets/headshot-1.png';
  import { portfolioItems } from '$lib/data/portfolio';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<div id="main" class="flex items-center h-screen px-50 py-20 w-max">
  <div class="flex card-bg card-shadow h-full max-h-120 overflow-visible">
    <div class="w-sm h-full shrink-0 rounded-l">
       <ProjectCard project={{ title: "me  ☺", thumbnail: headshot }} row="top"/>
    </div>
    <div class="w-xl px-18 shrink-0 outline-1 outline-gray-400 outline-offset-[-0.5px] card-border flex flex-col justify-center gap-2">
      <h1>
        Vivian Li
      </h1>
      <h2 class="pl-2">
        is a product design engineer based in New York City, telling stories with design and data.
      </h2>
    </div>
    <div class="grid grid-rows-2">
      <div class="flex h-full">
        {#each portfolioItems[0] as item (item.title)}
          <ProjectCard project={item} row="top"/>
        {/each}
      </div>
      <div class="flex h-full">
        {#each portfolioItems[1] as item (item.title)}
          <ProjectCard project={item} row="bottom"/>
        {/each}
      </div>
    </div>
  </div>
</div>