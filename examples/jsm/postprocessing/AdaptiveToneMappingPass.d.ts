/// <reference lib="dom" />
import { ShaderMaterial, WebGLRenderTarget } from "../../../src/Three.d.ts";

import { Pass } from "./Pass.d.ts";

export class AdaptiveToneMappingPass extends Pass {
  constructor(adaptive?: boolean, resolution?: number);
  adaptive: boolean;
  resolution: number;
  needsInit: number;
  luminanceRT: WebGLRenderTarget;
  previousLuminanceRT: WebGLRenderTarget;
  currentLuminanceRT: WebGLRenderTarget;
  copyUniforms: object;
  materialCopy: ShaderMaterial;
  materialLuminance: ShaderMaterial;
  adaptLuminanceShader: object;
  materialAdaptiveLum: ShaderMaterial;
  materialToneMap: ShaderMaterial;
  fsQuad: object;

  reset(): void;
  setAdaptive(adaptive: boolean): void;
  setAdaptionRate(rate: number): void;
  setMinLuminance(minLum: number): void;
  setMaxLuminance(maxLum: number): void;
  setAverageLuminance(avgLum: number): void;
  setMiddleGrey(middleGrey: number): void;
  dispose(): void;
}
