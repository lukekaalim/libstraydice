import { RichTextNode } from "../display/richText"
import { Opaque, createId } from "../utils/opaque";
import { PowerFlavorID, PowerID } from "./powers";

export type DistinctionID = Opaque<"DistinctionID">;

export type Distinction = {
  id: DistinctionID,
  name: string,
  description?: RichTextNode,

  options: DistinctionOption[],
};

export const distinction = (d: Omit<Distinction, 'id'>): Distinction => ({
  ...d,
  id: createId(),
})

export type DistinctionOptionsID = Opaque<"DistinctionOptionsID">;

export type DistinctionOption = {
  id: DistinctionOptionsID,
  level: number,
  power: PowerID,

  flavor?: PowerFlavorID,
}

export const distinctionOption = (d: Omit<DistinctionOption, 'id'>): DistinctionOption => ({
  ...d,
  id: createId()
})