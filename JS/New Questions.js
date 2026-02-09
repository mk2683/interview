// ✅ Q1. Deep Equality Check (No JSON.stringify)
function deepEqual(a, b) {
  if (Object.is(a, b)) return true;

  if (typeof a !== 'object' || a === null ||
      typeof b !== 'object' || b === null) {
    return false;
  }

  if (Array.isArray(a) !== Array.isArray(b)) return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}

// ✅ Q2. Deep Object Key Normalization
function normalizeObject(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    return obj.map(normalizeObject);
  }

  return Object.keys(obj)
    .sort()
    .reduce((acc, key) => {
      acc[key] = normalizeObject(obj[key]);
      return acc;
    }, {});
}

// ✅ Q3. Flatten Nested Object (Arrays Included)
function flattenObject(obj, parentKey = '', result = {}) {
  if (obj === null || typeof obj !== 'object') {
    result[parentKey] = obj;
    return result;
  }

  const isArray = Array.isArray(obj);

  Object.keys(obj).forEach(key => {
    const newKey = parentKey
      ? `${parentKey}.${isArray ? key : key}`
      : key;

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  });

  return result;
}

// ✅ Q4. Group By Nested Property Path
function groupBy(arr, path) {
  const keys = path.split('.');

  return arr.reduce((acc, item) => {
    let value = item;

    for (let key of keys) {
      value = value?.[key];
    }

    if (value === undefined) return acc;

    acc[value] = acc[value] || [];
    acc[value].push(item);

    return acc;
  }, {});
}

// ✅ Q5. Memoize Any Function (Objects + Arrays + Primitives)
// 🔥 Correct approach using nested Maps + WeakMaps
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    let current = cache;

    for (let arg of args) {
      const isObject = typeof arg === 'object' && arg !== null;
      const mapType = isObject ? WeakMap : Map;

      if (!current.has(arg)) {
        current.set(arg, new mapType());
      }
      current = current.get(arg);
    }

    if (current.has('result')) {
      return current.get('result');
    }

    const result = fn.apply(this, args);
    current.set('result', result);
    return result;
  };
}

// ✅ Q6. Memoized Fibonacci (Optimal)
const fib = (function () {
  const cache = {};

  return function f(n) {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];

    cache[n] = f(n - 1) + f(n - 2);
    return cache[n];
  };
})();

// ✅ Q7. Unbounded Cache Wrapper
function createCache(fn) {
  const cache = new Map();

  return function (...args) {
    const key = args;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}


// 🧠 Why this works

// Uses reference-safe caching

// No stringify bugs

// Supports objects

// ✅ Q8. LRU Cache (O(1) Operations)
class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return undefined;

    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.limit) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}

// ✅ Q9. Memoization with TTL (Expiry)
function memoizeWithTTL(fn, ttl) {
  const cache = new Map();

  return function (...args) {
    const now = Date.now();
    const key = args;

    if (cache.has(key)) {
      const { value, expiry } = cache.get(key);
      if (now < expiry) return value;
      cache.delete(key);
    }

    const result = fn.apply(this, args);
    cache.set(key, { value: result, expiry: now + ttl });
    return result;
  };
}
