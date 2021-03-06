/// <reference lib="dom" />
import { Uniform } from "../../../src/Three.d.ts";

export const FresnelShader: {
  uniforms: {
    mRefractionRatio: Uniform;
    mFresnelBias: Uniform;
    mFresnelPower: Uniform;
    mFresnelScale: Uniform;
    tCube: Uniform;
  };
  vertexShader: string;
  fragmentShader: string;
};
