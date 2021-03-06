/// <reference lib="dom" />
import { Uniform } from "../../../src/Three.d.ts";

export const DigitalGlitch: {
  uniforms: {
    tDiffuse: Uniform;
    tDisp: Uniform;
    byp: Uniform;
    amount: Uniform;
    angle: Uniform;
    seed: Uniform;
    seed_x: Uniform;
    seed_y: Uniform;
    distortion_x: Uniform;
    distortion_y: Uniform;
    col_s: Uniform;
  };
  vertexShader: string;
  fragmentShader: string;
};
