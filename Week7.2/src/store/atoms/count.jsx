import { atom ,selector} from "recoil";
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

/*
How to Use a Selector?
1.Import selector from Recoil.
2.Define a selector with a unique key.
3.Use get to access atom values.
4.Return the computed value.
*/

/*
get: ({ get }) => {}
get is a function inside an object passed to the selector.
It allows you to retrieve values from atoms or other selectors.

const count = get(countState);
This fetches the latest value from the countState ATOM

The selector must return a computed value.
*/
export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return count % 2==0;
    }
});