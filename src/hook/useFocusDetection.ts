import { useState, useEffect, RefObject, Dispatch, SetStateAction } from 'react';
export function useFocusDetection(ref: RefObject<HTMLElement>) {

  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    function handleClickOutside(event: React.MouseEvent<HTMLElement>) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setFocused(false)
      } else {
        setFocused(true)
      }
    }
    document.addEventListener("mousedown", handleClickOutside as any);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside as any);
    };
  }, [ref]);

  return [focused, setFocused] as [boolean, Dispatch<SetStateAction<boolean>>]
}