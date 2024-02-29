import { nanoid } from "nanoid";

type IdSymbol = symbol;

export type Opaque<T = string> = number & { [_: IdSymbol]: T };

export const createId = <T = string>(): Opaque<T> => nanoid() as unknown as Opaque<T>;