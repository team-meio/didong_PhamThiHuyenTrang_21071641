import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
// import store_toolkit from './redux/store_toolkit';
import Screen_02 from './components/sceen-02';
import Screen_02saga from './components/screen_02_saga';
// import Screen_02_toolkit from './components/screen_02_toolkit';

export default function App() {
  return (
    <Provider store={store}>
      <Screen_02saga />
    </Provider>
  );
}
