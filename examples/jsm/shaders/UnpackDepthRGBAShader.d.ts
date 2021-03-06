/// <reference lib="dom" />
import { Uniform } from "../../../src/Three.d.ts";

export const UnpackDepthRGBAShader: {
  uniforms: {
    tDiffuse: Uniform;
    opacity: Uniform;
  };
  vertexShader: string;
  fragmentShader: string;
};
