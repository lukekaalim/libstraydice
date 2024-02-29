import { RichTextNode } from "../display/richText";
import { Opaque, createId } from "../utils/opaque"

export type PowerID = Opaque<"PowerID">;
export type PowerTagID = Opaque<"PowerTagID">;

export type PowerTag = {
  id: PowerTagID,
  name: string,
}

export type Power = {
  id: PowerID,
  name: string,
  description?: RichTextNode,

  tags?: PowerTagID[],
}
export const power = (p: Omit<Power, 'id'>): Power => ({
  ...p,
  id: createId()
})

export type PowerFlavorID = Opaque<"PowerFlavorID">;

export type PowerFlavor = {
  id: PowerFlavorID,
  description: RichTextNode,
}