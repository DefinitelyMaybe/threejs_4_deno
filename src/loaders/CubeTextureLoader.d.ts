/// <reference lib="dom" />
import { Loader } from "./Loader.d.ts";
import { LoadingManager } from "./LoadingManager.d.ts";
import { CubeTexture } from "./../textures/CubeTexture.d.ts";

export class CubeTextureLoader extends Loader {
  constructor(manager?: LoadingManager);

  load(
    urls: Array<string>,
    onLoad?: (texture: CubeTexture) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): CubeTexture;
}
