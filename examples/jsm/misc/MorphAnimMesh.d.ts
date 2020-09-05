/// <reference lib="dom" />
import {
  AnimationAction,
  AnimationMixer,
  BufferGeometry,
  Geometry,
  Material,
  Mesh,
} from "../../../src/Three.d.ts";

export class MorphAnimMesh extends Mesh {
  constructor(geometry: BufferGeometry | Geometry, material: Material);
  mixer: AnimationMixer;
  activeAction: AnimationAction | null;

  setDirectionForward(): void;
  setDirectionBackward(): void;
  playAnimation(label: string, fps: number): void;
  updateAnimation(delta: number): void;
  copy(source: MorphAnimMesh): this;
}
