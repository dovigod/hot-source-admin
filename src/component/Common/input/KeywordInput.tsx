/* eslint-disable react/display-name */
"use client";
import {
  useState,
  useRef,
  forwardRef,
  ForwardedRef,
  useImperativeHandle,
} from "react";
import { uniform } from "@/styles";
import { keywordInputStyle } from "@/styles/data";

export interface KeywordOption {
  label: string;
  value: string;
}
interface KeywordInputProps {
  dataId: string;
  value: string[] | undefined;
  disabled?: boolean;
  options: KeywordOption[];
  onSelection?: (value: string | number) => void;
}

export const KeywordInput = forwardRef(
  (
    { dataId, value, options, disabled, onSelection }: KeywordInputProps,
    getter: ForwardedRef<any>
  ) => {
    const [currentValue, setCurrentValue] = useState<typeof value>(value || []);
    const ref = useRef<HTMLDivElement>(null);

    function onOptionClick(value: string) {
      if (disabled) {
        return;
      }

      setCurrentValue((current) => {
        const newData = current ? [...current] : [];

        if (newData.includes(value)) {
          const targetIdx = newData.indexOf(value);
          newData.splice(targetIdx, 1);
        } else {
          newData.push(value);
        }
        return newData;
      });
      if (onSelection && typeof onSelection === "function") {
        onSelection(value);
      }
    }
    useImperativeHandle(
      getter,
      () => {
        return {
          getData: () => currentValue,
        };
      },
      [currentValue]
    );

    return (
      <div {...uniform(keywordInputStyle.container)} ref={ref}>
        <div
          {...uniform(
            keywordInputStyle.keywordContainer,
            disabled ? keywordInputStyle.containerDisabled : null
          )}
        >
          {options.map((option) => {
            const isSelected = currentValue?.includes(option.value);

            if (disabled && !isSelected) {
              return null;
            }
            return (
              <button
                key={`${dataId}-keyword-${option.label}`}
                onClick={() => {
                  onOptionClick(option.value);
                }}
                {...uniform(
                  keywordInputStyle.button,
                  disabled ? keywordInputStyle.unSelectable : null,
                  isSelected ? keywordInputStyle.buttonSelected : null
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);
