<script lang="ts">
  import '@fontsource-variable/ibm-plex-sans';
  import '@fontsource/ibm-plex-mono/400.css';
  import '@fontsource/ibm-plex-mono/600.css';
  import { appStoreUrl } from '$lib/content';
  import './layout.css';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/favicon.svg" />
  <meta name="theme-color" content="#0d1017" />
</svelte:head>

<div class="site-shell">
  <header class="site-header">
    <nav class="page-frame" aria-label="Main navigation">
      <a class="brand" href="/" aria-label="Shellton home"><span aria-hidden="true">❯_</span> Shellton</a>
      <div class="nav-links">
        <a href="/#features">Features</a>
        <a href="/#compare">Compare</a>
        <a href="/support">Docs</a>
        <a href="/#open-source">GitHub</a>
      </div>
      <a class="nav-cta" href={appStoreUrl} rel="noreferrer">App Store</a>
    </nav>
  </header>

  <main>{@render children()}</main>
</div>
