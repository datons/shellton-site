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

  <figure class="product-shot">
    <img src="/images/shellton-agent-cockpit.webp" alt="A Claude coding-agent conversation running in Shellton on iPhone" width="1320" height="2868" />
    <figcaption><span>agent cockpit</span><span>ACP · connected</span></figcaption>
  </figure>
</section>
