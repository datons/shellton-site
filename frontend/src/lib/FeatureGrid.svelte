<script lang="ts">
  import { landing } from '$lib/content';
</script>

<div class="feature-grid">
  {#each landing.features as feature}
    <article class="feature-card">
      <span class="feature-icon" aria-hidden="true">{feature.icon}</span>
      <h3>{feature.title}</h3>
      <p>{feature.detail}</p>
    </article>
  {/each}
</div>
