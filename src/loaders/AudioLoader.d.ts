/// <reference lib="dom" />
import { Loader } from "./Loader.d.ts";
import { LoadingManager } from "./LoadingManager.d.ts";

export class AudioLoader extends Loader {
  constructor(manager?: LoadingManager);

  load(
    url: string,
    onLoad: (audioBuffer: AudioBuffer) => void,
    onProgress?: (request: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void;
}
