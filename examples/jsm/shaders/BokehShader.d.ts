/// <reference lib="dom" />
import {
  Uniform,
} from "../../../src/Three.d.ts";

export const BokehShader: {
  defines: {
    DEPTH_PACKING: number;
    PERSPECTIVE_CAMERA: number;
  };
  uniforms: {
    tColor: Uniform;
    tDepth: Uniform;
    focus: Uniform;
    aspect: Uniform;
    aperture: Uniform;
    maxblur: Uniform;
    nearClip: Uniform;
    farClip: Uniform;
  };
  vertexShader: string;
  fragmentShader: string;
};
