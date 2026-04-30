import palantirThumbnail from '$lib/assets/palantir.jpg';
import msrThumbnail from '$lib/assets/msr.png';
import redditThumbnail from '$lib/assets/reddit.png';
import nytThumbnail from '$lib/assets/nyt-thumbnail.png';
import puddingThumbnail from '$lib/assets/pudding.png';
import hackscThumbnail from '$lib/assets/hacksc-2024.png';
import uxConfidenceThumbnail from '$lib/assets/ux-confidence.png';
import sierThumbnail from '$lib/assets/sier-cover.png';
import otherThumbnail from '$lib/assets/miffy-fruit-2.jpg';

export type PortfolioProject = {
  title: string;
  thumbnail: string;
  slug: string;
  description?: string;
  link?: string;
};

export const portfolioItems: PortfolioProject[][] = [
  [
    { title: 'Palantir', thumbnail: palantirThumbnail, slug: 'palantir' },
    { title: 'The Pudding', thumbnail: puddingThumbnail, slug: 'the-pudding' },
    { title: 'The New York Times', thumbnail: nytThumbnail, slug: 'new-york-times' },
    { title: 'HackSC', thumbnail: hackscThumbnail, slug: 'hacksc-2024' },
  ],
  [
    { title: 'Reddit', thumbnail: redditThumbnail, slug: 'reddit' },
    { title: 'Microsoft Research Lab', thumbnail: msrThumbnail, slug: 'microsoft-research' },
    { title: 'UX confidence research', thumbnail: uxConfidenceThumbnail, slug: 'ux-confidence' },
    { title: 'SIER', thumbnail: sierThumbnail, slug: 'sier' },
    { title: 'more  ☺', thumbnail: otherThumbnail, slug: 'other-projects' },
  ]
];

export const portfolioItemsFlat = portfolioItems.flat();

export const getProjectBySlug = (slug: string) =>
  portfolioItemsFlat.find((project) => project.slug === slug);
