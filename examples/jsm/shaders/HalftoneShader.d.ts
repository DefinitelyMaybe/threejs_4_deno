/// <reference lib="dom" />
import { Uniform } from "../../../src/Three.d.ts";

export const HalftoneShader: {
  uniforms: {
    tDiffuse: Uniform;
    shape: Uniform;
    radius: Uniform;
    rotateR: Uniform;
    rotateG: Uniform;
    rotateB: Uniform;
    scatter: Uniform;
    width: Uniform;
    height: Uniform;
    blending: Uniform;
    blendingMode: Uniform;
    greyscale: Uniform;
    disable: Uniform;
  };
  vertexShader: string;
  fragmentShader: string;
};
