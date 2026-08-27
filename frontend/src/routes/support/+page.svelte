<script lang="ts">
  import supportHtml from '$lib/legal/support.html?raw';
</script>

<svelte:head>
  <title>Support — Shellton</title>
  <meta name="description" content="Quick answers and support contacts for Shellton." />
</svelte:head>

<article class="legal-page page-frame">
  <aside class="legal-aside"><p class="kicker">SHELLTON / SUPPORT</p><p>Connections, keys, configuration, themes, privacy, and bug reports.</p></aside>
  <div class="legal-content">{@html supportHtml}</div>
</article>
