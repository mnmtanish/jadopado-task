import { createStore } from 'redux';
import { loadState } from './datastore/persister';
import reducer from './datastore/reducer';
import Application from './components/Application.html';

const store = createStore(reducer, {
  user: loadState('user'),
});

const app = new Application({
  target: document.querySelector( '#root' ),
  data: { store, state: store.getState() },
});

store.subscribe(function () {
  const state = store.getState();
  app.set({ state });
});
