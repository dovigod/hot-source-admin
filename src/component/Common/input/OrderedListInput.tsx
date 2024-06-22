"use client";
import { InvisibleIcon } from "@/component/icon/InvisibleIcon";
import { VisibleIcon } from "@/component/icon/VisibleIcon";
/* eslint-disable react/display-name */
import { uniform } from "@/styles";
import { layout } from "@/styles/common";
import { orderedListInputStyle } from "@/styles/data";
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
  [key: string]: any;
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
  setter: Dispatch<SetStateAction<OrderedListOptionWithRef[]>>;
  disabled?: boolean;
  hidden: boolean;
}
export const OrderedListInput = forwardRef(
  (
    { dataId, disabled, value, ...rest }: OrderedListInputProps,
    getter: ForwardedRef<any>
  ) => {
    value?.sort((a, b) => b.index - a.index);
    const [currentValue, setCurrentValue] = useState<
      OrderedListOptionWithRef[]
    >(value || []);
    const inputRef = useRef<HTMLInputElement>(null);
    const [showNewRow, setShowNewRow] = useState<boolean>(false);
    const [swapQueue, setSwapQueue] = useState<OrderedListOptionWithRef[]>([]);
    const total = currentValue.length;

    useImperativeHandle(
      getter,
      () => {
        return {
          getData: () => {
            const data = currentValue.reduce(
              (acc: OrderedListOption[], val) => {
                acc.push({
                  ...val,
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
        const lastIdx = currentValue.sort((a, b) => a.index - b.index)[
          currentValue.length - 1
        ].index;
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
    function stageToSwap(data: OrderedListOptionWithRef) {
      if (disabled) return;
      const onStage = swapQueue.some(
        (v) => v.index === data.index && v.value === data.value
      );
      if (onStage) {
        return;
      }
      setSwapQueue([...swapQueue, data]);
    }

    useEffect(() => {
      if (swapQueue.length === 2) {
        const tmp = swapQueue[0].index;
        swapQueue[0].index = swapQueue[1].index;
        swapQueue[1].index = tmp;

        setCurrentValue((cur) => [...cur]);
        setSwapQueue([]);
      }
    }, [swapQueue, currentValue]);

    return (
      <div {...uniform(layout.cflex22, orderedListInputStyle.container)}>
        <ol {...uniform(layout.cflex11, orderedListInputStyle.listContainer)}>
          {currentValue
            .sort((a, b) => b.index - a.index)
            .map((data) => {
              const onSwapQueue = swapQueue.some(
                (v) => v.index === data.index && v.value === data.value
              );
              const index = total - data.index + 1;
              return (
                <li
                  key={data.value + data.index}
                  {...uniform(layout.flex44, orderedListInputStyle.list)}
                >
                  <span
                    {...uniform(
                      layout.flex55,
                      orderedListInputStyle.listIndex,
                      disabled ? null : orderedListInputStyle.clickableIdx,
                      onSwapQueue ? orderedListInputStyle.indicateSwap : null
                    )}
                    onClick={() => stageToSwap(data)}
                  >
                    <span {...uniform(orderedListInputStyle.listIndexText)}>
                      {index}
                    </span>
                  </span>

                  <InputField
                    defaultValue={data.value}
                    setter={setCurrentValue}
                    index={data.index}
                    disabled={disabled}
                    hidden={!!data.hidden}
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
      </div>
    );
  }
);

function InputField({
  defaultValue,
  setter,
  index,
  disabled,
  hidden,
}: InputFieldProps) {
  const ref = useRef<HTMLInputElement>(null);
  // @NOTE careful of deps
  useEffect(() => {
    if (ref.current) {
      setter((current) => {
        const newList = [...current];
        const tagetIdx = newList.findIndex((val) => val.index === index);
        newList[tagetIdx].ref = ref;
        return newList;
      });
    }
  }, [ref, index, setter]);

  function onHidden() {
    if (disabled) {
      return;
    }
    setter((current) => {
      const newList = [...current];
      const target = newList.find(
        (item) => item.value === defaultValue && item.index === index
      );
      if (target) {
        target.hidden = !hidden;
      }
      return newList;
    });
  }
  return (
    <div {...uniform(orderedListInputStyle.inputWrapper)}>
      <input
        type="text"
        ref={ref}
        {...uniform(orderedListInputStyle.listContent)}
        defaultValue={defaultValue}
        disabled={disabled}
      />

      <div {...uniform(orderedListInputStyle.options)}>
        <button
          {...uniform(orderedListInputStyle.optionButton)}
          onClick={onHidden}
        >
          {disabled ? null : hidden ? (
            <InvisibleIcon {...uniform(orderedListInputStyle.option)} />
          ) : (
            <VisibleIcon {...uniform(orderedListInputStyle.option)} />
          )}
        </button>
      </div>
    </div>
  );
}
