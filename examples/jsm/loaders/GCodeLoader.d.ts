/// <reference lib="dom" />
import { Group, Loader, LoadingManager } from "../../../src/Three.d.ts";

export class GCodeLoader extends Loader {
  constructor(manager?: LoadingManager);
  splitLayer: boolean;

  load(
    url: string,
    onLoad: (object: Group) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void;
  parse(data: string): Group;
}
