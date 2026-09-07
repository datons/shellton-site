<script lang="ts">
  import FeatureGrid from '$lib/FeatureGrid.svelte';
  import Hero from '$lib/Hero.svelte';
  import { appStoreUrl, landing } from '$lib/content';
</script>

<svelte:head>
  <title>Shellton — A terminal for humans and their agents</title>
  <meta name="description" content="The terminal for iPhone and iPad that keeps Claude Code and Codex reachable wherever you are." />
</svelte:head>

<Hero />

<section id="features" class="section page-frame">
  <div class="section-heading"><p class="kicker">SIX THINGS, ONE TERMINAL</p><h2>Stay close to the work without staying at your desk.</h2></div>
  <FeatureGrid />
</section>

<section id="compare" class="section page-frame">
  <div class="section-heading"><p class="kicker">THE HONEST TABLE</p><h2>{landing.compare.heading}</h2></div>
  <div class="strip-table-wrap">
    <table class="strip-table">
      <thead><tr>{#each landing.compare.columns as column}<th>{column}</th>{/each}</tr></thead>
      <tbody>{#each landing.compare.rows as row}<tr>{#each row as cell}<td>{cell}</td>{/each}</tr>{/each}</tbody>
    </table>
  </div>
  <div class="compare-footer">
    <p>{landing.compare.note}</p>
    <nav aria-label="Detailed comparisons"><a href="/compare/moshi">Moshi</a><a href="/compare/termius">Termius</a><a href="/compare/blink">Blink</a></nav>
  </div>
</section>

<section id="download" class="section page-frame pricing-section">
  <div class="section-heading"><p class="kicker">NO SURPRISE TIERS</p><h2>{landing.pricing.heading}</h2></div>
  <div class="pricing-grid">
    {#each [landing.pricing.free, landing.pricing.pro] as plan, index}
      <article class:featured={index === 1} class="price-card">
        <p class="plan-name">{plan.name}</p><p class="price">{plan.price}</p>
        <ul>{#each plan.items as item}<li><span aria-hidden="true">✓</span>{item}</li>{/each}</ul>
        <a class:primary={index === 1} class="button" href={appStoreUrl} rel="noreferrer">{index === 1 ? 'Get Shellton Pro' : 'Download Shellton'}</a>
      </article>
    {/each}
  </div>
</section>

<footer class="site-footer page-frame"><p>{landing.footer}</p><nav><a href="/privacy">Privacy</a><a href="/support">Support</a></nav></footer>
