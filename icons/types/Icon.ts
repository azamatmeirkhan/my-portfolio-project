import { SVGProps } from 'react';

export type Icon = {
  readonly width: number;
  readonly height: number;
  readonly path: string | ReadonlyArray<string> | JSX.Element;
  readonly svgParams?: SVGProps<SVGSVGElement>;
};