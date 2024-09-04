import React from "react";

export const Burger: React.FC<{ height?: string; marginRight?: string }> = ({
  height = "20",
  marginRight = "0px",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width={height}
      height={height}
      style={{ marginRight }}
    >
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
    </svg>
  );
};
