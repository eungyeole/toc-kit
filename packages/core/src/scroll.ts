import type { TocOptions } from './types';

export function scrollToElement(id: string | null, options: TocOptions = {}) {
  if (!id) return;

  const element = document.getElementById(id);
  if (!element) return;

  const { top } = element.getBoundingClientRect();
  const offset = options.offset ?? 0;

  window.scrollTo({
    top: window.scrollY + top - offset,
    behavior: options.smooth ? 'smooth' : 'auto',
  });
}
