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

/*
✅ Use Selectors When:

1️⃣ You Need to Compute Derived State
Instead of storing redundant values in atoms, use selectors to compute them dynamically.
🔹 Example: Computing Text Length

const textState = atom({
  key: "textState",
  default: "",
});

const textLengthSelector = selector({
  key: "textLengthSelector",
  get: ({ get }) => get(textState).length,  // Compute text length dynamically
});

📌 Why?
Avoids unnecessary state updates.
Keeps data logic separate from UI.


2️⃣ You Want to Filter or Transform Data
Selectors allow you to filter or map data from an atom.
🔹 Example: Filtering Even Numbers

const numbersState = atom({
  key: "numbersState",
  default: [1, 2, 3, 4, 5, 6],
});

const evenNumbersSelector = selector({
  key: "evenNumbersSelector",
  get: ({ get }) => get(numbersState).filter(num => num % 2 === 0),
});

📌 Why?
No need to store separate filtered lists.
Keeps logic centralized.


3️⃣ You Need to Combine Multiple Atoms
If you have multiple atoms and need to derive a new value from them, use selectors.
🔹 Example: Combining First & Last Name

const firstNameState = atom({
  key: "firstNameState",
  default: "John",
});

const lastNameState = atom({
  key: "lastNameState",
  default: "Doe",
});

const fullNameSelector = selector({
  key: "fullNameSelector",
  get: ({ get }) => `${get(firstNameState)} ${get(lastNameState)}`,
});

📌 Why?
No need for separate fullNameState.
Ensures derived values update automatically.

4️⃣ You Need to Cache Computed Values
Selectors cache their values until dependencies change, avoiding unnecessary recalculations.
🔹 Example: Avoiding Expensive Computations

const countState = atom({
  key: "countState",
  default: 1,
});

const factorialSelector = selector({
  key: "factorialSelector",
  get: ({ get }) => {
    const num = get(countState);
    return num <= 1 ? 1 : num * get(factorialSelector); // Recursively compute factorial
  },
});

📌 Why?
Selectors cache results and recalculate only when necessary.
*/