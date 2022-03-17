# Ready

[![CI](https://github.com/grrr-amsterdam/ready/actions/workflows/ci.yml/badge.svg)](https://github.com/grrr-amsterdam/ready/actions/workflows/ci.yml)

### DOM ready & document loaded JavaScript listeners

-   Lightweight (less than 250b minified and gzipped)
-   No dependencies
-   Supports IE 9+

### Developed with ❤️ by [GRRR](https://grrr.nl)

-   GRRR is a [B Corp](https://grrr.nl/en/b-corp/)
-   GRRR has a [tech blog](https://grrr.tech/)
-   GRRR is [hiring](https://grrr.nl/en/jobs/)
-   [@GRRRTech](https://twitter.com/grrrtech) tweets

## Installation

```sh
$ npm install @grrr/ready
```

Note: depending on your setup [additional configuration might be needed](https://github.com/grrr-amsterdam/ready/wiki/Usage-with-build-tools), since this package is published with untranspiled JavaScript.

## Usage

Import into your main JavaScript file:

```js
import { onDocumentLoaded, onDomReady } from "@grrr/ready";

onDomReady(() => {
    // Execute main functions
});

onDocumentLoaded(() => {
    // Execute functions after the document has fully loaded
});
```

## DOM ready

The `onDomReady` function:

-   Will fire directly when [Document.readyState
    ](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState) is not `loading` (so `interactive` or `complete`).
-   Listens for both [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event) and [readystatechange](https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event) if not yet ready.

## Document loaded

The `onDocumentLoaded` function:

-   Will fire directly when [Document.readyState
    ](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState) is `complete`.
-   Listens for [readystatechange](https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event) if not yet complete.
