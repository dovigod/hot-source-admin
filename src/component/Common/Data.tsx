/* eslint-disable react/display-name */
"use client";
import { uniform } from "@/styles";
import { layout } from "@/styles/common";
import { dataStyle } from "@/styles/data";
import { TextInput } from "./input/TextInput";
import { KeywordInput, KeywordOption } from "./input/KeywordInput";
import { DropdownInput, DropdownOption } from "./input/DropdownInput";
import { ForwardedRef, forwardRef, useState } from "react";
import { OrderedListInput } from "./input/OrderedListInput";

interface CommonDataProps {
  label?: string;
  dataId: string;
  type: string;
  value: any;
  editable?: boolean;
  comment?: string;
}

interface TextInputProps extends CommonDataProps {}
interface DropdownInputProps extends CommonDataProps {
  options: DropdownOption[];
  onSelection?: (value: string | number) => void;
  placeholder?: string;
}

interface KeywordInputProps extends CommonDataProps {
  options: KeywordOption[];
  onSelection?: (value: string | number) => void;
}
export interface DataHandler {
  getData: () => unknown;
}
// export function Data(
//   props: DropdownInputProps,
//   ref?: ForwardedRef<DataHandler>
// ): JSX.Element;
// export function Data(
//   props: TextInputProps,
//   ref?: ForwardedRef<DataHandler>
// ): JSX.Element;
// export function Data(
//   props: KeywordInputProps,
//   ref?: ForwardedRef<DataHandler>
// ): JSX.Element;

export const Data = forwardRef(
  (
    {
      label,
      dataId,
      value,
      options,
      editable,
      type,
      onSelection,
      placeholder,
      comment,
    }: any,
    ref: ForwardedRef<DataHandler>
  ) => {
    const [showCommentBox, setShowCommentBox] = useState<boolean>(false);
    function showComment() {
      setShowCommentBox(true);
    }
    function hideComment() {
      setShowCommentBox(false);
    }
    return (
      <div {...uniform(layout.cflex11, dataStyle.container)}>
        {label && (
          <span {...uniform(dataStyle.label)}>
            {label}{" "}
            {comment && (
              <button
                {...uniform(layout.flex55, dataStyle.commentButton)}
                onMouseEnter={showComment}
                onMouseLeave={hideComment}
              >
                !
                {showCommentBox && (
                  <div {...uniform(dataStyle.comment)}>{comment}</div>
                )}
              </button>
            )}
          </span>
        )}

        {type === "text" && (
          <TextInput
            ref={ref}
            dataId={dataId}
            disabled={!editable}
            value={value}
          />
        )}
        {type === "dropdown" && (
          <DropdownInput
            ref={ref}
            dataId={dataId}
            value={value}
            options={options}
            disabled={!editable}
            onSelection={onSelection}
            placeholder={placeholder}
          />
        )}
        {type === "keyword" && (
          <KeywordInput
            ref={ref}
            dataId={dataId}
            value={value}
            options={options}
            disabled={!editable}
            onSelection={onSelection}
          />
        )}
        {type === "orderedList" && (
          <OrderedListInput
            ref={ref}
            dataId={dataId}
            value={value}
            disabled={!editable}
          />
        )}
      </div>
    );
  }
);
