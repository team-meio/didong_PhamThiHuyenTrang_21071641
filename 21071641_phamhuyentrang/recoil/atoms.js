import { atom, selector } from 'recoil';

// Atom to store fetched data
export const dataState = atom({
  key: 'dataState',
  default: [], // default empty array until data is fetched
});

// Atom to store loading state
export const loadingState = atom({
  key: 'loadingState',
  default: false,
});

// Selector to handle API fetching
export const fetchDataSelector = selector({
  key: 'fetchDataSelector',
  get: async ({ get }) => {
    get(loadingState); // This will re-evaluate if loading state changes
    try {
      const response = await fetch('https://67219fde98bbb4d93ca9043e.mockapi.io/todo'); // replace with mock API URL
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  },
});
