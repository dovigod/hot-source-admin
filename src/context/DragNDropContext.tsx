"use client";
import {
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  createContext,
  useRef,
  useState,
} from "react";

interface DragNDropContext {
  dataId: string;
  data?: OrderedData[];
  setData: Dispatch<SetStateAction<OrderedData[] | undefined>>;
  currentItemId: MutableRefObject<string | null>;
  targetItemId: MutableRefObject<string | null>;
}

interface Props {
  dataId: string;
  data?: OrderedData[];
  children?: ReactNode;
}

interface OrderedData {
  index: number;
  id: string;
}

export const DragNDropContext = createContext<DragNDropContext | null>(null);

export const DragNDropProvider = ({ dataId, children, data }: Props) => {
  const [dataList, setDataList] = useState<OrderedData[] | undefined>(data);
  const currentItemId = useRef<string | null>(null);
  const targetItemId = useRef<string | null>(null);

  return (
    <DragNDropContext.Provider
      value={{
        dataId,
        data: dataList,
        setData: setDataList,
        currentItemId,
        targetItemId,
      }}
    >
      {children}
    </DragNDropContext.Provider>
  );
};
