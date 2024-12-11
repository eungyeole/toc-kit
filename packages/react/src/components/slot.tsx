/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Children,
    cloneElement,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactNode,
  } from "react";

  import { mergeProps } from "../utils/merge-props";
  import { mergeRefs } from "../utils/merge-refs";

  export interface SlotProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
  }

  /**
   * Slot 컴포넌트는 자식 요소의 속성을 병합합니다.
   * @param props.children 병합할 자식 요소입니다.
   * @param props.* 병합할 속성입니다.
   * @example
   * ```tsx
   * <Slot onClick={...} className="slot">
   *  <div onClick={...} className="child" />
   * </Slot>
   * ```
   *
   * @reference https://github.com/radix-ui/primitives/tree/main/packages/react/slot
   */
  export const Slot = forwardRef<HTMLElement, SlotProps>(
    (props, forwardedRef) => {
      const { children, ...slotProps } = props;
  
      if (isValidElement(children)) {
        const mergedProps = mergeProps(slotProps, (children as any).props) as any;
        const mergedRef = mergeRefs(forwardedRef, (children as any).ref) as any;
  
        return cloneElement(children, {
          ref: mergedRef,
          ...mergedProps,
        });
      }
  
      return Children.count(children) > 1 ? Children.only(null) : null;
    },
  );
  
  Slot.displayName = 'Slot';