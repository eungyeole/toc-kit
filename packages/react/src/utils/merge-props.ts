import { mergeEventHandlers } from './merge-event-handlers';

const eventRegex = /^on[A-Z]/;

// biome-ignore lint/suspicious/noExplicitAny: This type needs to be flexible for various prop types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = Record<string, any>;

/**
 * 여러 개의 props를 병합합니다.
 */
export const mergeProps = <T extends Props>(...propsList: T[]) => {
  return propsList.reduce((acc, props) => {
    for (const key in acc) {
      if (
        eventRegex.test(key) &&
        typeof acc[key] === 'function' &&
        typeof props[key] === 'function'
      ) {
        acc[key] = mergeEventHandlers(acc[key], props[key]);
        continue;
      }

      if (key === 'style') {
        acc[key] = { ...acc[key], ...props[key] };
        continue;
      }

      acc[key] = props[key] !== undefined ? props[key] : acc[key];
    }

    for (const key in props) {
      if (acc[key] === undefined) {
        acc[key] = props[key];
      }
    }

    return acc;
  }, {} as Props);
};
