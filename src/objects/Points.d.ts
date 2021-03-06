/// <reference lib="dom" />
import { Geometry } from "./../core/Geometry.d.ts";
import { Material } from "./../materials/Material.d.ts";
import { Raycaster } from "./../core/Raycaster.d.ts";
import { Object3D } from "./../core/Object3D.d.ts";
import { BufferGeometry } from "../core/BufferGeometry.d.ts";
import { Intersection } from "../core/Raycaster.d.ts";

/**
 * A class for displaying points. The points are rendered by the WebGLRenderer using gl.POINTS.
 */
export class Points<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
  /**
	 * @param geometry An instance of Geometry or BufferGeometry.
	 * @param material An instance of Material (optional).
	 */
  constructor(
    geometry?: TGeometry,
    material?: TMaterial,
  );

  type: "Points";
  morphTargetInfluences?: number[];
  morphTargetDictionary?: { [key: string]: number };
  readonly isPoints: true;

  /**
	 * An instance of Geometry or BufferGeometry, where each vertex designates the position of a particle in the system.
	 */
  geometry: TGeometry;

  /**
	 * An instance of Material, defining the object's appearance. Default is a PointsMaterial with randomised colour.
	 */
  material: TMaterial;

  raycast(raycaster: Raycaster, intersects: Intersection[]): void;
  updateMorphTargets(): void;
}
