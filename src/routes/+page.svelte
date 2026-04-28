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
  import otherThumbnail from '$lib/assets/apples.jpeg';

  const portfolioItems = [
    [
      { title: 'Palantir', thumbnail: palantirThumbnail },
      { title: 'Microsoft Research', thumbnail: msrThumbnail },
      { title: 'New York Times', thumbnail: nytThumbnail },
      { title: 'HackSC 2024', thumbnail: hackscThumbnail },

    ],
    [
      { title: 'Reddit', thumbnail: redditThumbnail },
      { title: 'The Pudding', thumbnail: puddingThumbnail },
      { title: 'UX Confidence', thumbnail: uxConfidenceThumbnail },
      { title: 'Sier', thumbnail: sierThumbnail },
      { title: 'Other projects', thumbnail: otherThumbnail },
    ]
  ];
</script>

<div id="main" class="flex items-center h-screen px-50 w-max">
  <div class="flex card h-full max-h-120 overflow-hidden">
    <div class="w-sm shrink-0">
      <img src={headshot1} alt="Vivian Li" class="w-full h-full object-cover" />
    </div>
    <div class="w-xl px-20 shrink-0 border-l card-border flex flex-col justify-center gap-2">
      <h1>
        Vivian Li
      </h1>
      <h2 class="pl-2">
        is a product design engineer based in New York City, telling stories with design and data.
      </h2>
    </div>
    <div class="border-l card-border grid grid-rows-2">
      <div class="flex h-full bg-slate-800/10">
        {#each portfolioItems[0] as item (item.title)}
          <img src={item.thumbnail} alt={item.title} class="max-h-full max-w-full not-first:border-l card-border"/>
        {/each}
      </div>
      <div class="flex h-full bg-slate-800/10 border-t card-border">
        {#each portfolioItems[1] as item (item.title)}
          <img src={item.thumbnail} alt={item.title} class="max-h-full max-w-full not-first:border-l card-border last:flex-1 last:w-0 last:object-cover last:opacity-70"/>
        {/each}
      </div>
    </div>
  </div>
</div>