<script lang="ts">
	import TabBar from '$lib/components/TabBar.svelte';
  import { generateTabPath } from '$lib/utils/tabPath';
  import type { PageProps } from './$types';

  import { portfolioItems } from '$lib/data/portfolio';

  let { data }: PageProps = $props();
  let w = $state(0);
  let h = $state(0);
</script>

<div class="fixed inset-0 mx-30 mb-30 mt-40">
  <div 
    class="relative w-full h-full flex items-center justify-center"
    bind:clientWidth={w}
    bind:clientHeight={h} 
  >
    <!-- <img 
      src={data.project.thumbnail} 
      alt={data.project.title} 
      class="w-xl h-xl not-first:border-l divider-color object-cover"
      style:view-transition-name="thumbnail-{data.project.slug}"
    /> -->
    <div class="absolute inset-0">
      <TabBar 
        tabs={portfolioItems.flat()} 
        activeTab={data.project.slug} 
      />
    </div>
    {#if w && h}
      <svg 
        class="absolute inset-0 pointer-events-none overflow-visible -z-10"
        style:view-transition-name="tab-shape-{data.project.slug}"
        viewBox={`0 0 ${w} ${h}`} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d={generateTabPath(w, h, 0, "none")}
          class="fill-gray-50 divider-color stroke-1"
        />
      </svg>
    {/if}

    <!-- <div transition:fade> -->
      <h1 class="relative z-10">{data.project.title}</h1>
    <!-- </div> -->
  </div>
</div>
