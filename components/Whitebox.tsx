import { ReactNode } from "react";

export default function Whitebox({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "1rem",
          backgroundColor: "white",
          minWidth: "30rem",
          maxWidth: "60rem",
          padding: "1rem 2rem",
          minHeight: "100vh",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
    </div>
  );
}
