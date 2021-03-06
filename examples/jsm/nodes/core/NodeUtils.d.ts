/// <reference lib="dom" />
import { Node } from "./Node.d.ts";

export namespace NodeUtils {
  export const elements: string[];

  export function addShortcuts(proto: Node, proxy: string, list: any[]): void;
}
