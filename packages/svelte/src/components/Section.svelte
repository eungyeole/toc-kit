<script lang="ts">
  import { getContext, onDestroy, onMount } from 'svelte';
  import type { TocContext, TocSectionData } from '../types';

  export let id: string;
  export let level = 0;
  export let parentId: string | null = null;

  const toc = getContext<TocContext>('toc');
  if (!toc) throw new Error('Section must be used within Toc component');

  const { registerSection, unregisterSection } = toc;

  const section: TocSectionData = {
    id,
    level,
    parentId,
  };

  onMount(() => {
    registerSection(section);
  });

  onDestroy(() => {
    unregisterSection(section.id);
  });
</script>

<div>
  <slot></slot>
</div>
