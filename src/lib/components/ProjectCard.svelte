<script lang="ts" >
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  type Project = {
    title: string;
    thumbnail: string;
    link?: string;
    slug?: string;
  };

  let { project, row } = $props();

  const progress = new Tween(0, { duration: 200, easing: cubicOut });
  // let isHovered = $derived(progress.current < progress.target || progress.target === 1);
  let w = $state(0);
  let h = $state(0);

  const TAB_PADDING = 40;
  let tabTextWidth = $state(0);
  let tabW = $derived(tabTextWidth + TAB_PADDING);

  const generateTabPath = (w: number, h: number, t: number, position: "top" | "bottom") => {
    const tabH = 30 * t;
    const r = 8 * t; // corner rounding radius
    const inset = 10 * t;
    const tabLeft = 16;
    const tabRight = 16 + tabW;
    const tabLeftTop = tabLeft + inset;
    const tabRightTop = tabRight - inset;
    const tabCurve = tabH ? (inset * r) / tabH : 0;

    if (position === "top") {
      return [
        `M 0 0`,
        `L ${tabLeft - r} 0`,
        `Q ${tabLeft} 0 ${tabLeft + tabCurve} ${-r}`,
        `L ${tabLeftTop - tabCurve} ${-tabH + r}`,
        `Q ${tabLeftTop} ${-tabH} ${tabLeftTop + r} ${-tabH}`,
        `L ${tabRightTop - r} ${-tabH}`,
        `Q ${tabRightTop} ${-tabH} ${tabRightTop + tabCurve} ${-tabH + r}`,
        `L ${tabRight - tabCurve} ${-r}`,
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
        `Q ${tabRight} ${h} ${tabRight - tabCurve} ${h + r}`,
        `L ${tabRightTop + tabCurve} ${h + tabH - r}`,
        `Q ${tabRightTop} ${h + tabH} ${tabRightTop - r} ${h + tabH}`,
        `L ${tabLeftTop + r} ${h + tabH}`,
        `Q ${tabLeftTop} ${h + tabH} ${tabLeftTop - tabCurve} ${h + tabH - r}`,
        `L ${tabLeft + tabCurve} ${h + r}`,
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
        d={generateTabPath(w, h, progress.current, row)}
        class="fill-gray-50 stroke-gray-800/40 stroke-1"
      />
    </svg>
  {/if}
    <span 
      bind:clientWidth={tabTextWidth} 
      class="absolute left-9 {row === "top" ? "-top-6.5" : "-bottom-6.5"} opacity-0 {progress.current < progress.target || progress.target === 1 ? "opacity-100" : "opacity-0"} transition-opacity duration-150 whitespace-nowrap" 
    >
      {project.title}
    </span>
{/snippet}

<div 
  class="h-full min-w-0 relative overflow-visible"  
  bind:clientWidth={w} 
  bind:clientHeight={h}
>
  {#if project.link}
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      onmouseenter={() => progress.set(1)}
      onmouseleave={() => progress.set(0)}
    >
      {@render thumbnail(project, row)}
    </a>
  {:else}
    <a 
      href="/portfolio/{project.slug}"
      onmouseenter={() => progress.set(1)}
      onmouseleave={() => progress.set(0)}
    >
      {@render thumbnail(project, row)}
    </a>
  {/if}
</div>