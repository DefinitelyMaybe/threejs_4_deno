/// <reference lib="dom" />
import { Geometry } from "./../core/Geometry.d.ts";
import { Material } from "./../materials/Material.d.ts";
import { Line } from "./Line.d.ts";
import { BufferGeometry } from "../core/BufferGeometry.d.ts";

/**
 * @deprecated
 */
export const LineStrip: number;
/**
 * @deprecated
 */
export const LinePieces: number;

export class LineSegments<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
> extends Line<TGeometry, TMaterial> {
  constructor(
    geometry?: TGeometry,
    material?: TMaterial,
  );

  /**
	 * @default 'LineSegments'
	 */
  type: "LineSegments" | string;
  readonly isLineSegments: true;
}
