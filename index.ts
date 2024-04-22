import { h } from "hastscript";
import type { ShikiTransformer } from "shiki";

export const addCopyButton = (timeout?: number): ShikiTransformer => {
  const toggleMs = timeout || 3000;

  return {
    name: "shiki-transformer-copy-button",
    pre(node) {
      const button = h(
        "button",
        {
          class: "copy",
          "data-code": this.source,
          onclick: `
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add('copied');
          setTimeout(() => this.classList.remove('copied'), ${toggleMs})
        `,
        },
        [h("span", { class: "ready" }), h("span", { class: "success" })]
      );

      node.children.push(button);
    },
  };
};

export const addFilename = (filename?: string): ShikiTransformer => {
  return {
    name: "shiki-transformer-add-filename",
    pre(node) {
      if (!filename) return;

      const span = h(
        "span",
        {
          class: "filename",
        },
        filename
      );

      node.children.push(span);
    },
  };
};
