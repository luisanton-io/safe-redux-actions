# S A F E - R E D U X - A C T I O N S
##### <div align="right">by [Luis Antonio Canettoli Ordoñez](http://luisanton.io)</div>

### Easily add typings to your Redux actions.

#### Install: ```npm i safe-redux-actions```



### 1. Create an action maker using `createActionMaker`

As a type argument we specify the `typeof Actions`.  
*Note:* we still actually need to define the `Actions` object
```ts
import { createActionMaker } from "safe-redux-actions"

const makeAction = createActionMaker<typeof Actions>();

```
### 2. Create the `Actions` object

Here we can build the `Action` object. `Actions` keys are supposed to be corresponding to the action types.  
That means the action maker `makeAction` will only allow as an argument a string which is also a `keyof Actions`.


```ts
export const Actions = {
  add: (num: number) => makeAction("add", num), // { type: "add", payload: num }
  increase: () => makeAction("increase"),       // { type: "increase" }
  decrease: () => makeAction("decrease")        // { type: "decrease" }
 };
```

### 3. Export the type for any single Action
The exported `Action` type will be used as input type for your reducer(s).
The typings for the payload and the action type will be automatically inferred.


```ts
import { createActionMaker, SingleAction } from "safe-redux-actions"

//...

export type Action = SingleAction<typeof Actions>;

```

## That's it!

This is how it will look like in your reducer:

```ts
import { Action } from "src/store/actions";

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 0
};

export default function rootReducer(state = initialState, action: Action) {
  switch (action.type) { // "add" | "increase" | "decrease"
    case "add":
      return {
        ...state,
        counter: state.counter + action.payload // payload is number
      };
    case "increase":
      // payload is unknown
      return {
        ...state,
        counter: state.counter + 1
      };
    case "decrease":
      // payload is unknown
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}
```


