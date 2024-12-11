<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { createTocStore } from '@toc-kit/core';

  const store = createTocStore();
  const sections = writable(store.sections);
  const activeId = writable(store.activeId);

  setContext('toc', {
    sections,
    activeId,
    registerSection: store.registerSection,
    unregisterSection: store.unregisterSection,
    setActiveId: store.setActiveId,
  });
</script>

<div class="toc-root">
  <slot></slot>
</div>
