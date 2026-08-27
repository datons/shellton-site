<script lang="ts">
  import privacyHtml from '$lib/legal/privacy.html?raw';
</script>

<svelte:head>
  <title>Privacy Policy — Shellton</title>
  <meta name="description" content="Shellton uses anonymous, opt-out product analytics and does not collect terminal content, credentials, or identity." />
</svelte:head>

<article class="legal-page page-frame">
  <aside class="legal-aside"><p class="kicker">PRIVACY / POLICY</p><p>Effective 2026-05-23<br />Last updated 2026-07-12</p></aside>
  <div class="legal-content">{@html privacyHtml}</div>
</article>
