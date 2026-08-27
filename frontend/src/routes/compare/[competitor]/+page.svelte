<script lang="ts">
  import CompareTable from '$lib/CompareTable.svelte';

  let { data } = $props();
  let comparison = $derived(data.comparison);
</script>

<svelte:head>
  <title>{comparison.title} — Shellton</title>
  <meta name="description" content={comparison.intro} />
</svelte:head>

<article class="compare-page page-frame">
  <a class="back-link" href="/#compare">← All comparisons</a>
  <header><p class="kicker">last reviewed 2026-08</p><h1>{comparison.title}</h1><p>{comparison.intro}</p></header>
  <CompareTable competitor={comparison.name} rows={comparison.rows} />
  <section class="verdict"><p class="kicker">BOTTOM LINE</p><h2>Pick for the workflow you actually have.</h2><p>{comparison.verdict}</p></section>
  <footer class="comparison-sources"><span>Sources reviewed 2026-08:</span>{#each comparison.sources as source}<a href={source.href} rel="noreferrer">{source.label}</a>{/each}</footer>
</article>
