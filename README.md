# Ready

[![Build Status](https://travis-ci.com/grrr-amsterdam/ready.svg?branch=master)](https://travis-ci.com/grrr-amsterdam/ready)

### DOM ready & document loaded JavaScript listeners

- No dependencies
- Includes functional and DOM utility functions
- Lightweight and untranspiled

Built with ❤️ by [GRRR](https://grrr.tech).

## Installation

```sh
$ npm install @grrr/ready
```

Note: depending on your setup [additional configuration might be needed](https://github.com/grrr-amsterdam/ready/wiki/Usage-with-build-tools), since this package is published with untranspiled JavaScript.

## Usage

Import into your main JavaScript file:

```js
import { onDocumentLoaded, onDomReady } from '@grrr/ready';

onDomReady(() => {
  // Execute main functions
});

onDocumentLoaded(() => {
  // Execute functions after the document has fully loaded
});
```

## DOM ready

- Will fire when [Document.readyState
](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState) is not `loading` (so `interactive` or `complete`).
- Listens for both [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event) and [readystatechange](https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event) if not yet ready.

## Document loaded

- Will fire when [Document.readyState
](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState) is `complete`.
- Listens for [readystatechange](https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event) if not yet complete.
