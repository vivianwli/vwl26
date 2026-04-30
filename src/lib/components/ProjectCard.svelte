<script lang="ts" >
  import { Tween } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { generateTabPath } from "$lib/utils/tabPath";

  type Project = {
    title: string;
    thumbnail: string;
    link?: string;
    slug?: string;
  };

  let { project, row } = $props();

  const progress = new Tween(0, { duration: 200, easing: cubicOut });
  let w = $state(0);
  let h = $state(0);

  let tabTextWidth = $state(0);
</script>

{#snippet thumbnail(project: Project, row: "top" | "bottom")}
  <img 
    src={project.thumbnail} 
    alt={project.title} 
    class="block w-full h-full p-1 hover:p-2 transition-all duration-200 object-cover"
    style:view-transition-name="thumbnail-{project.slug}"
  />
  {#if w && h}
    <svg 
      class="absolute inset-0 w-full h-full pointer-events-none overflow-visible -z-10"
      style:view-transition-name="tab-shape-{project.slug}"
      viewBox={`0 0 ${w} ${h}`} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d={generateTabPath(w, h, progress.current, row, tabTextWidth)}
        class="fill-gray-50 divider-color stroke-1"
      />
    </svg>
  {/if}
    <span 
      bind:clientWidth={tabTextWidth} 
      class="absolute left-9 {row === "top" ? "-top-6.5" : "-bottom-6.5"} opacity-0 {progress.current < progress.target || progress.target === 1 ? "opacity-100" : "opacity-0"} transition-opacity duration-150 whitespace-nowrap" 
      style:view-transition-name="tab-label-{project.slug}"
    >
      {project.title}
    </span>
{/snippet}

<div 
  class="h-full min-w-0 relative overflow-visible {row === "bottom" && "last:flex-1 last:w-0"}"  
  bind:clientWidth={w} 
  bind:clientHeight={h}
>
  {#if project.link}
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer"
      class="block h-full"
      onmouseenter={() => progress.set(1)}
      onmouseleave={() => progress.set(0)}
    >
      {@render thumbnail(project, row)}
    </a>
  {:else if project.slug}
    <a 
      href={`/portfolio/${project.slug}`}
      class="block h-full"
      onmouseenter={() => progress.set(1)}
      onmouseleave={() => progress.set(0)}
    >
      {@render thumbnail(project, row)}
    </a>
  {:else}
    <div 
      class="block h-full"
      onmouseenter={() => progress.set(1)}
      onmouseleave={() => progress.set(0)}
      role="figure"
    >
      {@render thumbnail(project, row)}
    </div>
  {/if}
</div>