"use client";
import { Inspector } from "@/component/Inspector";
import { ReactNode, createContext, useState } from "react";

interface InspectorContext {
  openInspector: (url: string, dimension: string) => void;
  closeInspector: () => void;
}

interface Props {
  children?: ReactNode;
}
export const InspectorContext = createContext<InspectorContext | null>(null);

export const InspectorProvider = ({ children }: Props) => {
  const [url, setUrl] = useState<string>("");
  const [dimension, setDimension] = useState<string>("1/1");
  const [open, setOpen] = useState<boolean>(false);

  function openInspector(imageUrl = url, dimension: string) {
    setUrl(imageUrl);
    setDimension(dimension);
    setOpen(true);
  }

  function closeInspector() {
    setOpen(false);
  }

  return (
    <InspectorContext.Provider
      value={{
        openInspector,
        closeInspector,
      }}
    >
      {open && <Inspector imageUrl={url} dimension={dimension} />}
      {children}
    </InspectorContext.Provider>
  );
};
