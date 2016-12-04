const STATE_PREFIX = 'app:state:';

function createKey(key) {
  return STATE_PREFIX + key;
}

// NOTE if JSON.parse fails here, let the application crash
// we can also use something like `alert` to get more attention
export function loadState (_key) {
  const key = createKey(_key);
  const val = localStorage.getItem(key);
  if (!val) {
    return null;
  }
  return JSON.parse(val);
}

// NOTE if JSON.stringify fails here, let the application crash
// we can also use something like `alert` to get more attention
export function storeState (_key, val) {
  const key = createKey(_key);
  localStorage.setItem(key, JSON.stringify(val));
}

export function removeState (_key) {
  const key = createKey(_key);
  localStorage.removeItem(key);
}
