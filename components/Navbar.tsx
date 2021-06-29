import Link from "next/link";
import React from "react";

function NavbarLink({ url, text }: { url: string; text: string }) {
  return (
    <Link href={url} passHref>
      <a
        style={{
          color: "black",
          cursor: "pointer",
          textTransform: "uppercase",
          userSelect: "none",
          textDecoration: "none",
        }}
      >
        {text}
      </a>
    </Link>
  );
}

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        zIndex: 1,
        backgroundColor: "white",
        height: "4rem",
        padding: "1rem",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
        boxSizing: "border-box",
      }}
    >
      <NavbarLink url="/" text="Michael Fatemi" />
      <NavbarLink url="/contact" text="Contact" />
      <NavbarLink url="/projects" text="Projects" />
      <NavbarLink url="#" text="Resume" />
    </div>
  );
}
