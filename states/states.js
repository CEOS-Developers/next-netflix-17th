import { atom } from "recoil";
import { v1 } from "uuid";

export const openState = atom({
  key: `openState${v1()}`,
  default: false,
});
