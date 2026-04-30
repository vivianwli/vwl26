<script lang="ts">
  import headshot1 from '$lib/assets/headshot-1.png';

  // portfolio thumbnail imports
  import palantirThumbnail from '$lib/assets/palantir.jpg';
  import msrThumbnail from '$lib/assets/msr.png';
  import redditThumbnail from '$lib/assets/reddit.png';
  import nytThumbnail from '$lib/assets/nyt-thumbnail.png';
  import puddingThumbnail from '$lib/assets/pudding.png';
  import hackscThumbnail from '$lib/assets/hacksc-2024.png';
  import uxConfidenceThumbnail from '$lib/assets/ux-confidence.png';
  import sierThumbnail from '$lib/assets/sier-cover.png';
  import otherThumbnail from '$lib/assets/miffy-fruit-2.jpg';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

  const portfolioItems = [
    [
      { title: 'Palantir', thumbnail: palantirThumbnail, slug: "palantir" },
      { title: 'Microsoft Research Lab', thumbnail: msrThumbnail, slug: "microsoft-research" },
      { title: 'The New York Times', thumbnail: nytThumbnail, slug: "new-york-times" },
      { title: 'HackSC', thumbnail: hackscThumbnail, slug: "hacksc-2024" },
    ],
    [
      { title: 'Reddit', thumbnail: redditThumbnail, slug: "reddit" },
      { title: 'The Pudding', thumbnail: puddingThumbnail, slug: "the-pudding" },
      { title: 'UX confidence research', thumbnail: uxConfidenceThumbnail, slug: "ux-confidence" },
      { title: 'SIER', thumbnail: sierThumbnail, slug: "sier" },
      { title: 'more  ☺', thumbnail: otherThumbnail, slug: "other-projects" },
    ]
  ];
</script>

<div id="main" class="flex items-center h-screen px-50 py-20 w-max">
  <div class="flex card-bg card-shadow h-full max-h-120 overflow-visible">
    <div class="w-sm h-full shrink-0 rounded-l">
       <ProjectCard project={{ title: "me  ☺", thumbnail: headshot1 }} row="top"/>
    </div>
    <div class="w-xl px-20 shrink-0 outline-1 outline-gray-400 outline-offset-[-0.5px] card-border flex flex-col justify-center gap-2">
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