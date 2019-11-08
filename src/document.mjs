const isDocumentLoaded = () => document.readyState === 'complete';

/**
 * Execute function when document is fully loaded.
 * This will fire just before `window.onload` if it was not already 'complete'.
 */
export const onDocumentLoaded = fn => {
  const execute = () => {
    if (!isDocumentLoaded()) {
      return;
    }
    fn();
  };

  if (isDocumentLoaded()) {
    fn();
  } else {
    document.addEventListener('readystatechange', execute, false);
  }
};
