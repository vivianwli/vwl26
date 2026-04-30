<script lang="ts">
  import { generateTabPath } from "$lib/utils/tabPath";

  let { tabs, activeTab } = $props();

  let tabTextWidths = $state<number[]>([]);
  let barWidth = $state(0);
  const tabH = 30;
  const getTabOffset = (arr: number[], i: number) => {
    const tabTextWidthsSum = arr.slice(0, i).reduce((sum: number, n: number) => sum + n, 0);
    
    return tabTextWidthsSum + i * 30;
  }
</script>

<div class="flex" bind:clientWidth={barWidth}>
  {#each tabs as tab, i (tab.slug)}
    {#if activeTab === tab.slug}
      <a 
        href={`/portfolio/${tab.slug}`}
        class="absolute"
        style:width={`${(tabTextWidths[i] ?? 0) + 30}px`}
        style:height={`${tabH}px`}
        style:z-index=1000
      >
        <svg
          class="absolute inset-0 overflow-visible"
          viewBox={`0 0  ${(tabTextWidths[i] ?? 0) + 30} ${tabH}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={generateTabPath(barWidth, 0, 1, "top", tabTextWidths[i] ?? 0, getTabOffset(tabTextWidths, i))}
            class="fill-gray-50 divider-color stroke-1"
          />
        </svg>
        <span 
          bind:clientWidth={tabTextWidths[i]} 
          class="absolute -top-6.5 whitespace-nowrap"
          style:left="{getTabOffset(tabTextWidths, i) + 36}px" 
        >
          {tab.title}
        </span>
      </a>
    {/if}
    <a 
      href={`/portfolio/${tab.slug}`}
      class="relative"
      style:width={`${(tabTextWidths[i] ?? 0) + 30}px`}
      style:height={`${tabH}px`}
      style:z-index={-10 - i}
    >
      <svg
        class="absolute inset-0 overflow-visible"
        viewBox={`0 0  ${(tabTextWidths[i] ?? 0) + 30} ${tabH}`}
        xmlns="http://www.w3.org/2000/svg"
      >
      <g class="fill-gray-200">
        <path 
          d="M 6 0 L {(tabTextWidths[i] ?? 0) + 64} 0 L {(tabTextWidths[i] ?? 0) + 64} 20 L 0 20 Z"
        />
        <path
          d={generateTabPath(tabTextWidths[i] ?? 0, 0, 1, "top", tabTextWidths[i] ?? 0)}
          class="divider-color stroke-1"
        />
      </g>
      </svg>
      <span 
        bind:clientWidth={tabTextWidths[i]} 
        class="absolute left-9 -top-6.5 whitespace-nowrap"
      >
        {tab.title}
      </span>
    </a>
  {/each}
</div>