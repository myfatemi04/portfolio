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
      src={`https://www.youtube.com/embed/${id}?autoplay=0&mute=0`}
      style={style ? { ...baseStyle, ...style } : baseStyle}
    />
  );
}
