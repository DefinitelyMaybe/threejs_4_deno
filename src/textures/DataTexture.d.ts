/// <reference lib="dom" />
import { Texture } from "./Texture.d.ts";
import {
  Mapping,
  PixelFormat,
  TextureDataType,
  TextureEncoding,
  TextureFilter,
  Wrapping,
} from "../constants.d.ts";
import { TypedArray } from "../polyfills.d.ts";

export class DataTexture extends Texture {
  /**
	 * @param data
	 * @param width
	 * @param height
	 * @param [format=THREE.RGBAFormat]
	 * @param [type=THREE.UnsignedByteType]
	 * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
	 * @param [wrapS=THREE.ClampToEdgeWrapping]
	 * @param [wrapT=THREE.ClampToEdgeWrapping]
	 * @param [magFilter=THREE.NearestFilter]
	 * @param [minFilter=THREE.NearestFilter]
	 * @param [anisotropy=1]
	 * @param [encoding=THREE.LinearEncoding]
	 */
  constructor(
    data: TypedArray,
    width: number,
    height: number,
    format?: PixelFormat,
    type?: TextureDataType,
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: TextureFilter,
    minFilter?: TextureFilter,
    anisotropy?: number,
    encoding?: TextureEncoding,
  );

  image: ImageData;

  /**
	 * @default false
	 */
  flipY: boolean;

  /**
	 * @default false
	 */
  generateMipmaps: boolean;

  /**
	 * @default 1
	 */
  unpackAlignment: number;

  /**
	 * @default THREE.DepthFormat
	 */
  format: PixelFormat;

  readonly isDataTexture: true;
}
