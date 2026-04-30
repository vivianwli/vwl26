import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getProjectBySlug } from '$lib/data/portfolio';

export const load: PageLoad = ({ params }) => {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    throw error(404, 'Project not found');
  }

  return { project };
};
