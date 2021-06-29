import { useCallback, useState } from "react";
import { ProjectProps } from "../pages/projects/[id]";
import ProjectDetailed from "./ProjectDetailed";

export default function ProjectModal({ project }: { project: ProjectProps }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((open) => !open), []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        width: "30rem",
        margin: "0.5rem 0",
        padding: "0.5rem",
        borderRadius: "0.5rem",
      }}
    >
      <button
        onClick={toggle}
        style={{
          border: "none",
          padding: "0.5rem",
          fontSize: "1rem",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
      >
        Read more
      </button>
      {open && (
        // Modal wrapper
        <div
          style={{
            position: "fixed",
            inset: 0,
            padding: "2rem",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onClick={toggle}
        >
          {/* Modal whitebox */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              padding: "1rem",

              maxWidth: "min(calc(100vw - 2rem), 60rem)",
              maxHeight: "100%",

              backgroundColor: "white",
              borderRadius: "1rem",
              boxShadow: "0.25rem 0.25rem 0.125rem rgba(100, 100, 100, 0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={toggle}
              style={{
                border: "none",
                padding: "0.5rem",
                fontSize: "1rem",
                borderRadius: "0.25rem",
                cursor: "pointer",
                height: "2rem",
                marginBottom: "1rem",
              }}
            >
              Close
            </button>
            <div
              style={{
                overflowY: "auto",
              }}
            >
              <ProjectDetailed
                metadata={project.metadata}
                content={project.content}
              />
            </div>
            <div style={{ height: "3rem" }} />
          </div>
        </div>
      )}
    </div>
  );
}
