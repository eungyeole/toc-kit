<script lang="ts">
  import { getContext, onMount } from 'svelte';
  import type { TocContext, TocOptions } from '../types';
  import { useTocScroll } from '../lib/useTocScroll';

  export let options: TocOptions = {};

  const toc = getContext<TocContext>('toc');
  if (!toc) throw new Error('Root must be used within Toc component');

  const { activeId } = toc;

  let currentActiveId: string | null = null;
  activeId.subscribe(value => {
    currentActiveId = value;
    useTocScroll(value, options);
  });
</script>

<div>
  <slot></slot>
</div>
