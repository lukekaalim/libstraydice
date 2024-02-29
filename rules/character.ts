import { Opaque, createId } from "../utils/opaque";
import { DistinctionID } from "./distinction";

export type CharacterID = Opaque<"CharacterID">;

export type Character = {
  id: CharacterID,
  name: string,

  takenDistinctions: DistinctionID[],
};

export const character = (c: Omit<Character, 'id'>): Character => ({
  ...c,
  id: createId(),
})