import { ReactNode } from "react";

const sidePadding = "2rem";
const absoluteMinWidth = `calc(100vw - 2 * ${sidePadding})`;
const minWidth = `min(${absoluteMinWidth}, 30rem)`;
const maxWidth = `min(${absoluteMinWidth}, 60rem)`;

export default function Whitebox({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        margin: "1rem auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "1rem",
        backgroundColor: "white",
        minWidth,
        maxWidth,
        padding: `1rem ${sidePadding}`,
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}
