import type { ReactNode, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  title?: string;
  size?: number;
}

export default function Search({
  width,
  height,
  title = "search icon",
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
        d="M21 21L16.5143 16.5065M19 10.5C19 15.1944 15.1944 19 10.5 19C5.80558 19 2 15.1944 2 10.5C2 5.80558 5.80558 2 10.5 2C15.1944 2 19 5.80558 19 10.5Z"
      />
    </svg>
  );
}
