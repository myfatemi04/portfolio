import { CSSProperties } from "react";

const baseStyle: CSSProperties = {
  border: "none",
  aspectRatio: "4/3",
};

export default function Youtube({
  id,
  style,
}: {
  id: string;
  style?: CSSProperties;
}) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
      style={style ? { ...baseStyle, ...style } : baseStyle}
    />
  );
}
