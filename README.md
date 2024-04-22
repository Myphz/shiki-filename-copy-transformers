## Shiki Copy Button

A [Shiki Transformer](https://shiki.style/guide/transformers) that adds a Copy button.

## Install

Install the package:

```sh
npm install -D shiki-filename-copy-transformers
```

Add the transformer:

```typescript
import { codeToHtml } from "shiki/bundle/full";
import { addCopyButton } from "shiki-filename-copy-transformers";

export async function highlight(code, lang, meta) {
  return await codeToHtml(code, {
    lang,
    // Optional parameter
    transformers: [addCopyButton(3000), addFilename("index.ts")],
  });
}
```

You can get the filename from the third parameters `meta`.
Your markdown code block can look like this:

\`\`\`js title="file.js"  
import path from "path";

import adapter from "@sveltejs/adapter-node";  
\`\`\`

You will be able to get the `title` string from the third parameter `meta`.

## Style

Add some basic styling to display the button and filename:

```css
pre:has(code) {
  position: relative;
}

pre button.copy {
  position: absolute;
  right: 1rem;
  top: 1rem;
  height: 1.5rem;
  width: 1.5rem;
  padding: 0;
  display: flex;

  & span {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  & .ready {
    background: red;
    /* background-image: url(/icons/copy.svg); */
  }

  & .success {
    display: none;
    background: green;
    /* background-image: url(/icons/copy-success.svg); */
  }

  &.copied {
    & .success {
      display: block;
    }

    & .ready {
      display: none;
    }
  }
}

pre:has(.filename) {
  padding-top: 3rem;
}

pre .filename {
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  translate: 0 -50%;
}
```

## License

MIT
