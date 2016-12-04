import { storeState, removeState } from './persister';

export default function reducer(state, action) {
  console.log('action:', action);
  switch (action.type) {
  case 'USER_LOGOUT':
    removeState('user');
    return Object.assign({}, state, { user: null });
  case 'USER_LOGIN':
    const user = action.user;
    storeState('user', user);
    return Object.assign({}, state, { user });
  default:
    return state;
  }
}
