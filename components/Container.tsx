import { ReactNode } from "react";

// const sidePadding = "3rem";
// const absoluteMinWidth = `calc(100vw - 2 * ${sidePadding})`;
// const minWidth = `min(${absoluteMinWidth}, 30rem)`;
// const maxWidth = `min(${absoluteMinWidth}, 60rem)`;

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}
