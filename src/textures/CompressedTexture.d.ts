/// <reference lib="dom" />
import { Texture } from "./Texture.d.ts";
import {
  CompressedPixelFormat,
  Mapping,
  TextureDataType,
  TextureEncoding,
  TextureFilter,
  Wrapping,
} from "../constants.d.ts";

export class CompressedTexture extends Texture {
  /**
	 * @param mipmaps
	 * @param width
	 * @param height
	 * @param [format=THREE.RGBAFormat]
	 * @param [type=THREE.UnsignedByteType]
	 * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
	 * @param [wrapS=THREE.ClampToEdgeWrapping]
	 * @param [wrapT=THREE.ClampToEdgeWrapping]
	 * @param [magFilter=THREE.LinearFilter]
	 * @param [minFilter=THREE.LinearMipmapLinearFilter]
	 * @param [anisotropy=1]
	 * @param [encoding=THREE.LinearEncoding]
	 */
  constructor(
    mipmaps: ImageData[],
    width: number,
    height: number,
    format?: CompressedPixelFormat,
    type?: TextureDataType,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: TextureFilter,
    minFilter?: TextureFilter,
    anisotropy?: number,
    encoding?: TextureEncoding,
  );

  image: { width: number; height: number };

  mipmaps: ImageData[];

  /**
	 * @default false
	 */
  flipY: boolean;

  /**
	 * @default false
	 */
  generateMipmaps: boolean;

  readonly isCompressedTexture: true;
}
