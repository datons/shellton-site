<script lang="ts">
  import type { ComparisonRow } from '$lib/content';

  let { competitor, rows }: { competitor: string; rows: ComparisonRow[] } = $props();
</script>

<div class="comparison-table-wrap">
  <table class="comparison-table">
    <thead>
      <tr><th>Capability</th><th>Shellton</th><th>{competitor}</th></tr>
    </thead>
    <tbody>
      {#each rows as row}
        <tr>
          <th scope="row">{row.capability}</th>
          <td class:advantage={row.advantage === 'shellton'}><span class="mobile-label">Shellton</span>{row.shellton}</td>
          <td class:advantage={row.advantage === 'competitor'}><span class="mobile-label">{competitor}</span>{row.competitor}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
