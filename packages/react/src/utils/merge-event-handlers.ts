/**
 * event handler를 병합 합니다.
 */
export const mergeEventHandlers = <T>(
  ...handlers: Array<((event: T) => void) | undefined>
) => {
  return (event: T) => {
    handlers.forEach((handler) => handler?.(event));
  };
};
