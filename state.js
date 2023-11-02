import { updateParent } from "./component.js";

export const State = function ({ initialValue, actions }) {
  const state = this.load();
  if (state) return state;

  const newState = [initialValue];

  const setter = (newValue) => {
    newState[0] = newValue;
    updateParent(this.id);
  };

  if (actions) {
    const getter = () => newState[0];
    newState[1] = actions(getter, setter);
  } else {
    newState[1] = setter;
  }

  return this.save(newState);
};
