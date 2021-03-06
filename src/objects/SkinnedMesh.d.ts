/// <reference lib="dom" />
import { Geometry } from "./../core/Geometry.d.ts";
import { Material } from "./../materials/Material.d.ts";
import { Matrix4 } from "./../math/Matrix4.d.ts";
import { Skeleton } from "./Skeleton.d.ts";
import { Mesh } from "./Mesh.d.ts";
import { BufferGeometry } from "../core/BufferGeometry.d.ts";

export class SkinnedMesh<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
> extends Mesh<TGeometry, TMaterial> {
  constructor(
    geometry?: TGeometry,
    material?: TMaterial,
    useVertexTexture?: boolean,
  );

  bindMode: string;
  bindMatrix: Matrix4;
  bindMatrixInverse: Matrix4;
  skeleton: Skeleton;
  readonly isSkinnedMesh: true;

  bind(skeleton: Skeleton, bindMatrix?: Matrix4): void;
  pose(): void;
  normalizeSkinWeights(): void;
  updateMatrixWorld(force?: boolean): void;
}
