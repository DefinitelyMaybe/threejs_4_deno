/// <reference lib="dom" />
import { Interpolant } from "../Interpolant.d.ts";

export class CubicInterpolant extends Interpolant {
  constructor(
    parameterPositions: any,
    samplesValues: any,
    sampleSize: number,
    resultBuffer?: any,
  );

  interpolate_(i1: number, t0: number, t: number, t1: number): any;
}
