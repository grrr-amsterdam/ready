const isDomReady = () => document.readyState !== 'loading';

/**
 * Execute function when DOM is ready.
 */
const onDomReady = fn => {
  let isReady = false;
  const execute = () => {
    if (isReady) {
      return;
    }
    isReady = true;
    fn();
  };

  if (isDomReady()) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', execute, false);
    document.addEventListener('readystatechange', execute, false);
  }
};

export default onDomReady;
