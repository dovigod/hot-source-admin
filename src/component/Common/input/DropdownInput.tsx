/* eslint-disable react/display-name */
"use client";
import {
  useState,
  useRef,
  ChangeEvent,
  forwardRef,
  RefObject,
  ForwardedRef,
  useImperativeHandle,
} from "react";
import { uniform } from "@/styles";
import { dataStyle, dropdownInputStyle } from "@/styles/data";
import { useFocusDetection } from "@/hook/useFocusDetection";
import { DropdownIcon } from "@/component/icon/DropdownIcon";

export interface DropdownOption {
  label: string;
  value: string | number;
}
interface DropdownInputProps {
  dataId: string;
  value: string | number | undefined;
  disabled?: boolean;
  options: DropdownOption[];
  onSelection?: (value: string | number) => void;
  placeholder?: string;
}

let debounceTimer: number | null = null;

export const DropdownInput = forwardRef(
  (
    {
      dataId,
      value,
      options,
      disabled,
      onSelection,
      placeholder,
    }: DropdownInputProps,
    getter: ForwardedRef<any>
  ) => {
    const [currentValue, setCurrentValue] = useState<typeof value>(value || "");
    const ref = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useFocusDetection(ref);

    function onOptionClick(value: string | number) {
      setCurrentValue(value);
      setOpen(false);
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
      <div {...uniform(dropdownInputStyle.container)} ref={ref}>
        <input
          {...uniform(
            dataStyle.textInput,
            disabled ? dataStyle.disabled : null
          )}
          value={currentValue}
          onChange={(e: ChangeEvent) => {
            setCurrentValue((e.target as HTMLInputElement).value);
          }}
          onClick={() => {
            setOpen(true);
          }}
          placeholder={placeholder}
          type="text"
        />
        <DropdownIcon
          color={"rgba(12,24,68, 1"}
          {...uniform(
            dropdownInputStyle.icon,
            open ? dropdownInputStyle.iconClicked : null
          )}
        />

        <div
          {...uniform(
            dropdownInputStyle.dropdownContainer,
            open ? dropdownInputStyle.pseudoShow : null
          )}
        >
          {options
            .filter((option) => option.label.includes(String(currentValue)))
            .map((option) => {
              return (
                <button
                  key={`${dataId}-dropdown-${option.label}`}
                  onClick={() => {
                    onOptionClick(option.value);
                  }}
                  {...uniform(dropdownInputStyle.button)}
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
