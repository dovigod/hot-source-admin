"use client";
/* eslint-disable react/display-name */
import { uniform } from "@/styles";
import { dataStyle } from "@/styles/data";
import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";

interface TextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  dataId: string;
}
export const TextInput = forwardRef(
  (
    { dataId, disabled, value, ...rest }: TextInputProps,
    getter: ForwardedRef<any>
  ) => {
    const ref = useRef<HTMLInputElement>(null);

    useImperativeHandle(
      getter,
      () => {
        return {
          getData: () => {
            if (ref) {
              return (ref.current as HTMLInputElement).value;
            } else {
              throw new Error(`TextInput of ${dataId} seems not be mount`);
            }
          },
        };
      },
      [ref, dataId]
    );

    return (
      <input
        ref={ref}
        {...uniform(dataStyle.textInput, disabled ? dataStyle.disabled : null)}
        defaultValue={value}
        {...rest}
        disabled={disabled}
        type="text"
      />
    );
  }
);
