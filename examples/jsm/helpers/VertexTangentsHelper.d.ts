/// <reference lib="dom" />
import {
  Object3D,
  LineSegments,
} from "../../../src/Three.d.ts";

export class VertexTangentsHelper extends LineSegments {
  constructor(
    object: Object3D,
    size?: number,
    hex?: number,
  );

  object: Object3D;
  size: number;

  update(): void;
}
