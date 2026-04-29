<script lang="ts" >
	import { fade } from "svelte/transition";

  type Project = {
    title: string;
    thumbnail: string;
    link?: string;
    slug?: string;
  };

  let { project, row } = $props();

  const progress = 1;
  let w = $state(0);
  let h = $state(0);

  const TAB_PADDING = 32;
  let tabTextWidth = $state(0);
  let tabW = $derived(tabTextWidth + TAB_PADDING);

  const generateTabPath = (w: number, h: number, progress: number, position: "top" | "bottom") => {
    const tabH = 30 * progress;
    const r = 8 * progress; // corner rounding radius
    const inset = 10 * progress;
    const tabLeft = (w - tabW) * 0.5;
    const tabRight = (w + tabW) * 0.5;
    const tabLeftTop = tabLeft + inset;
    const tabRightTop = tabRight - inset;

    if (position === "top") {
      return [
        `M 0 0`,
        `L ${tabLeft - r} 0`,
        `Q ${tabLeft} 0 ${tabLeft + (inset * r) / tabH} ${-r}`,
        `L ${tabLeftTop - (inset * r) / tabH} ${-tabH + r}`,
        `Q ${tabLeftTop} ${-tabH} ${tabLeftTop + r} ${-tabH}`,
        `L ${tabRightTop - r} ${-tabH}`,
        `Q ${tabRightTop} ${-tabH} ${tabRightTop + (inset * r) / tabH} ${-tabH + r}`,
        `L ${tabRight - (inset * r) / tabH} ${-r}`,
        `Q ${tabRight} 0 ${tabRight + r} 0`,
        `L ${w} 0`,
        `L ${w} ${h}`,
        `L 0 ${h}`,
        `L 0 0`,
        `Z`
      ].join(" ");
    } else {
      return [
        `M 0 0`,
        `L ${w} 0`,
        `L ${w} ${h}`,
        `L ${tabRight + r} ${h}`,
        `Q ${tabRight} ${h} ${tabRight - (inset * r) / tabH} ${h + r}`,
        `L ${tabRightTop + (inset * r) / tabH} ${h + tabH - r}`,
        `Q ${tabRightTop} ${h + tabH} ${tabRightTop - r} ${h + tabH}`,
        `L ${tabLeftTop + r} ${h + tabH}`,
        `Q ${tabLeftTop} ${h + tabH} ${tabLeftTop - (inset * r) / tabH} ${h + tabH - r}`,
        `L ${tabLeft + (inset * r) / tabH} ${h + r}`,
        `Q ${tabLeft} ${h} ${tabLeft - r} ${h}`,
        `L 0 ${h}`,
        `L 0 0`,
        `Z`,
      ].join(" ");
    }
  };

</script>

{#snippet thumbnail(project: Project, row: "top" | "bottom")}
  <img 
    src={project.thumbnail} 
    alt={project.title} 
    class="h-full not-first:border-l card-border hover:p-1.5 transition-all duration-200 {row === "bottom" && "last:flex-1 last:w-0 last:object-cover last:opacity-70"}"
  />
  {#if w && h}
    <svg 
      class="absolute inset-0 w-full h-full pointer-events-none overflow-visible -z-10"
      viewBox={`0 0 ${w} ${h}`} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d={generateTabPath(w, h, progress, row)}
        class="fill-gray-50/60 stroke-gray-800/40 stroke-1"
      />
    </svg>
  {/if}
  <span bind:clientWidth={tabTextWidth} class="absolute" transition:fade>{project.title}</span>
{/snippet}

<div 
  class="h-full min-w-0 relative overflow-visible"  
  bind:clientWidth={w} 
  bind:clientHeight={h}
  // onmouseenter={() => progress.set(1)}
  // onmouseleave={() => progress.set(0)}
>
  {#if project.link}
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      {@render thumbnail(project, row)}
    </a>
  {:else}
    <a href="/portfolio/{project.slug}">
      {@render thumbnail(project, row)}
    </a>
  {/if}
</div>