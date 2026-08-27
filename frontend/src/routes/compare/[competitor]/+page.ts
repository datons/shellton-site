import { comparisons } from '$lib/content';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const comparison = comparisons[params.competitor];
  if (!comparison) error(404, 'Comparison not found');
  return { comparison };
}
