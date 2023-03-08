import { atom } from 'recoil';

// atom (state)
// export const countState = atom({
//   key: 'countState',
//   default: 0,
// });

const persistEffect =
  (key) =>
  ({ onSet, setSelf }) => {
    const count = localStorage.getItem(key);

    if (count) {
      setSelf(JSON.parse(count));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

// atom (state + effects)
export const countState = atom({
  key: 'countState',
  default: 0,
  effects: [
    persistEffect('count'),
    ({ onSet }) => {
      onSet((newValue) => {
        console.log(newValue);
      });
    },
  ],
});
