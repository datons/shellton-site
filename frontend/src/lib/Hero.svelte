<script lang="ts">
  import { appStoreUrl, landing } from '$lib/content';

  const hero = landing.hero;
</script>

<section class="hero page-frame" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow"><span aria-hidden="true"></span>{hero.eyebrow}</p>
    <h1 id="hero-title">{hero.title}</h1>
    <p class="hero-sub">{hero.sub}</p>
    <div class="hero-actions">
      <a class="button primary" href={appStoreUrl} rel="noreferrer">{hero.ctaPrimary}</a>
      <a class="button secondary" href="/support">{hero.ctaSecondary}</a>
    </div>
    <p class="proof">{hero.proof}</p>
  </div>

  <div class="terminal-window" aria-label="Shellton terminal session preview">
    <div class="terminal-bar">
      <div class="window-controls" aria-hidden="true"><span></span><span></span><span></span></div>
      <span>{hero.terminal.titleBar}</span>
      <span class="secure">encrypted</span>
    </div>
    <div class="terminal-body">
      {#each hero.terminal.lines as line, index}
        <div class:active={index === hero.terminal.lines.length - 1} class="terminal-line">
          <span class="prompt">{line.prompt}</span>
          <span class="command">{line.command}</span>
          {#if line.note}<span class="note">{line.note}</span>{/if}
        </div>
      {/each}
    </div>
    <div class="terminal-status"><span>ACP · connected</span><span>52 ms</span></div>
  </div>
</section>
