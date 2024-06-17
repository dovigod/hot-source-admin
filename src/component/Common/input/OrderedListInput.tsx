"use client";
/* eslint-disable react/display-name */
import { uniform } from "@/styles";
import { layout } from "@/styles/common";
import { dataStyle, orderedListInputStyle } from "@/styles/data";
import {
  Dispatch,
  ForwardedRef,
  forwardRef,
  RefObject,
  SetStateAction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

export interface OrderedListOption {
  value: string;
  index: number;
  hidden?: boolean;
}

interface OrderedListOptionWithRef extends OrderedListOption {
  ref?: RefObject<HTMLInputElement>;
}
interface OrderedListInputProps {
  dataId: string;
  value: OrderedListOption[] | undefined;
  disabled?: boolean;
}
interface InputFieldProps {
  defaultValue: string;
  index: number;
  referenceSetter: Dispatch<SetStateAction<OrderedListOptionWithRef[]>>;
  disabled?: boolean;
}
export const OrderedListInput = forwardRef(
  (
    { dataId, disabled, value, ...rest }: OrderedListInputProps,
    getter: ForwardedRef<any>
  ) => {
    value?.sort((a, b) => a.index - b.index);
    const [currentValue, setCurrentValue] = useState<
      OrderedListOptionWithRef[]
    >(value || []);
    const inputRef = useRef<HTMLInputElement>(null);
    const [showNewRow, setShowNewRow] = useState<boolean>(false);

    useImperativeHandle(
      getter,
      () => {
        return {
          getData: () => {
            const data = currentValue.reduce(
              (acc: OrderedListOption[], val) => {
                acc.push({
                  hidden: val.hidden,
                  index: val.index,
                  value: val.ref?.current!.value || "",
                });
                return acc;
              },
              [] as OrderedListOption[]
            );
            return data;
          },
        };
      },
      [currentValue]
    );

    function addNewList() {
      if (inputRef.current) {
        const value = (inputRef.current as HTMLInputElement).value;
        if (value === "") {
          return;
        }
        const lastIdx = currentValue[currentValue.length - 1].index;
        const newListIdx = lastIdx + 1;
        setCurrentValue((current) => {
          const newValue = [
            ...current,
            {
              value,
              index: newListIdx,
            },
          ];
          return newValue;
        });

        setShowNewRow(false);
      }
    }
    function showAdditionalListRow() {
      setShowNewRow((current) => !current);
    }

    return (
      <div {...uniform(layout.cflex22, orderedListInputStyle.container)}>
        <ol {...uniform(layout.cflex11, orderedListInputStyle.listContainer)}>
          {currentValue.map((data) => {
            return (
              <li
                key={data.value + data.index}
                {...uniform(layout.flex44, orderedListInputStyle.list)}
              >
                <span
                  {...uniform(layout.flex55, orderedListInputStyle.listIndex)}
                >
                  <span {...uniform(orderedListInputStyle.listIndexText)}>
                    {data.index}
                  </span>
                </span>

                <InputField
                  defaultValue={data.value}
                  referenceSetter={setCurrentValue}
                  index={data.index}
                  disabled={disabled}
                ></InputField>
              </li>
            );
          })}
        </ol>
        {showNewRow && (
          <div {...uniform(orderedListInputStyle.newRow)}>
            <input
              ref={inputRef}
              type="text"
              {...uniform(orderedListInputStyle.listContent)}
            />
            <button
              onClick={addNewList}
              {...uniform(orderedListInputStyle.appendButton)}
            >
              추가하기
            </button>
          </div>
        )}
        {!disabled && !showNewRow && (
          <button
            {...uniform(layout.flex55, orderedListInputStyle.addButton)}
            onClick={showAdditionalListRow}
          >
            +
          </button>
        )}

        {/* add button */}
        {/* maybe needs limit? */}
      </div>
    );
  }
);

function InputField({
  defaultValue,
  referenceSetter,
  index,
  disabled,
}: InputFieldProps) {
  const ref = useRef<HTMLInputElement>(null);
  // @NOTE careful of deps
  useEffect(() => {
    if (ref.current) {
      referenceSetter((current) => {
        const newList = [...current];
        const tagetIdx = newList.findIndex((val) => val.index === index);
        newList[tagetIdx].ref = ref;
        return newList;
      });
    }
  }, [ref, index, referenceSetter]);
  return (
    <input
      type="text"
      ref={ref}
      {...uniform(orderedListInputStyle.listContent)}
      defaultValue={defaultValue}
      disabled={disabled}
    ></input>
  );
}
