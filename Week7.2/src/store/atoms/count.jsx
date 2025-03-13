import { atom } from "recoil";
//Atoms are created using the atom function from Recoil.
//Two arguments inside an object
export const countAtom = atom({
    key: "countAtom",
    default: 0
});
/*
key: A unique identifier for the atom (must be unique across all atoms).
default: The initial value of the atom.
*/