import type { ReactNode, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  title?: string;
  size?: number;
}

export default function TextAlignLeft({
  width,
  height,
  title = "text align left icon",
  size = 24,
  stroke = "currentColor",
  ...rest
}: IconProps): ReactNode {
  return (
    <svg
      {...rest}
      width={width || size}
      height={height || size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <path
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        d="M3 6H21M3 12H13M3 18H18"
      />
    </svg>
  );
}
