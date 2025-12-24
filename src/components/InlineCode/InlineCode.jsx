import React from "react";

export function InlineCode({ children, style = {}, ...props }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 6px",
        borderRadius: "6px",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        color: "#ffffff",          // ✅ ADD THIS
        fontFamily: "monospace",
        fontSize: "0.9em",
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
