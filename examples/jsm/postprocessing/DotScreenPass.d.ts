/// <reference lib="dom" />
import { ShaderMaterial, Vector2 } from "../../../src/Three.d.ts";

import { Pass } from "./Pass.d.ts";

export class DotScreenPass extends Pass {
  constructor(center?: Vector2, angle?: number, scale?: number);
  uniforms: object;
  material: ShaderMaterial;
  fsQuad: object;
}
