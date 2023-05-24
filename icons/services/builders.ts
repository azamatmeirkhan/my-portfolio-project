import { Icon } from "../types/Icon";

export const createIcon = (
  width: number,
  height: number,
  path: Icon['path'],
  svgParams: Icon['svgParams'] = {},
): Icon => ({
  width,
  height,
  path,
  svgParams,
});
