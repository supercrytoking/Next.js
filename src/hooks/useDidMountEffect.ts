import { useEffect } from 'react';

// eslint-disable-next-line
const useDidMountEffect = (fn: () => void) => useEffect(fn, []);
export default useDidMountEffect;
