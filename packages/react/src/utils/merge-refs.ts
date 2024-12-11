import { MutableRefObject, Ref } from "react";

type PossibleRef<T> = Ref<T> | undefined;

/**
 * 여러 ref를 하나로 병합합니다.
 * null, undefined, 함수형 ref, RefObject 모두 지원합니다.
 */
export function mergeRefs<T>(
  ...refs: PossibleRef<T>[]
): (instance: T | null) => void {
  return (instance: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(instance);
      } else {
        (ref as MutableRefObject<T | null>).current = instance;
      }
    });
  };
}
