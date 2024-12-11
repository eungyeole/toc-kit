export interface IntersectionManager {
  observe: (element: HTMLElement) => void;
  unobserve: (element: HTMLElement) => void;
  disconnect: () => void;
}

export function createIntersectionManager(
  onIntersect: (id: string) => void,
  options: { rootMargin?: string } = {}
): IntersectionManager {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect(entry.target.id);
        }
      });
    },
    {
      rootMargin: options.rootMargin ?? '0px 0px -80% 0px',
    }
  );

  return {
    observe: (element: HTMLElement) => observer.observe(element),
    unobserve: (element: HTMLElement) => observer.unobserve(element),
    disconnect: () => observer.disconnect(),
  };
}
