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

## Button style

Add some basic styling to display the button:

```css
pre:has(code) {
  position: relative;
}

pre button.copy {
  position: absolute;
  right: 16px;
  top: 16px;
  height: 28px;
  width: 28px;
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
    background-image: url(/icons/copy.svg);
  }

  & .success {
    display: none;
    background-image: url(/icons/copy-success.svg);
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
```

## License

MIT
