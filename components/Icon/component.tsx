import React, { FC } from "react";

import { Props } from "./props";
import { createSvgPath } from "./services/createSvgPath";

export const Icon: FC<Props> = ({ icon, size = 1, ...rest }: Props) => {
  const iconWidth = icon && icon.width;
  const iconHeight = icon && icon.height;
  const iconSvgParams = icon && icon.svgParams;
  const iconPath = icon && icon.path;

  const width = Math.round(iconWidth * size);
  const height = Math.round(iconHeight * size);
  const viewBox = `0 0 ${iconWidth} ${iconHeight}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      {...rest}
      {...iconSvgParams}
    >
      {createSvgPath(iconPath)}
    </svg>
  );
};
