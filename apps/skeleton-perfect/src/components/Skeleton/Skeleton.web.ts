const NAME = "skeleton-web";

const CSS = /* css */ `
  /* Element children, no <video>/<img>: the host adds no box of its own. */
  ${NAME}:has(> *):not(:has(> video, > img)) {
    display: contents;
  }
  
  /*
   * No element children means the content is a string or number (or nothing).
   * The host is then the skeleton box itself, so it has to generate one.
   * :has() re-evaluates when React swaps the text for an element, so no JS needed.
   */
  ${NAME}:not(:has(> *)) {
    display: inline;
  }
  
  ${NAME}:has(> video, > img) {
    display: grid;
    position: relative;
  }

  @keyframes shimmer {
    from { background-position-x: 100%; }
    to   { background-position-x: 0; }
  }

  /* The loading attribute is normalized (see below), so presence means "on". */
  @scope (${NAME}[loading]) {
    :scope > *, :scope:not(:has(> *)), :scope:has(> video, > img)::before {
      background-image: linear-gradient(
        to right,
        #e5e7eb 33%,
        #f9fafb,
        #e5e7eb 66%
      ) !important;
      background-size: 300% !important;
      animation: shimmer 2s infinite ease-in-out;
    }
    
    :scope > *, :scope:not(:has(> *)) {
      background-clip: border-box !important;
      box-shadow: none !important;
      box-decoration-break: clone !important;
      color: transparent !important;
      outline: none !important;
      pointer-events: none !important;
      user-select: none !important;
      cursor: default !important;
    }
    
    /* Text-only content: shape the skeleton bar around the text. */
    :scope:not(:has(> *)) {
      border-radius: 0.375rem;
      box-decoration-break: clone;
      text-box-edge: cap alphabetic;
      text-box-trim: trim-both;
    }

    /* Everything inside the root disappears. Layout is kept, so nothing jumps. */
    :scope > * * {
      visibility: hidden !important;
    }
    
    :scope > :is(video, img) {
      anchor-name: --anchor;
      mask-composite: exclude !important;
      border: 10px solid !important;
      padding: 10px !important;
      mask-image: linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 0px), linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 0px) !important;
      mask-clip: border-box, content-box !important;
    }
    
    :scope:has(> video, > img)::before {
      content: "";
      position: absolute;
      position-anchor: --anchor;
      inset: calc(anchor(top) + 10px) calc(anchor(right) + 10px) calc(anchor(bottom) + 10px) calc(anchor(left) + 10px);
    }
  }
`;

let sheet: CSSStyleSheet | null = null;

function adoptStyles(root: Node): void {
  if (!(root instanceof Document || root instanceof ShadowRoot)) return;
  if (!sheet) {
    sheet = new CSSStyleSheet();
    sheet.replaceSync(CSS);
  }
  if (!root.adoptedStyleSheets.includes(sheet)) {
    root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
  }
}

function normalizeBooleanAttribute(el: Element, name: string, value: string | null): boolean {
  const on = value !== null && value.trim().toLowerCase() !== "false";
  if (on && value !== "") {
    el.setAttribute(name, "");
    return true;
  }
  if (!on && value !== null) {
    el.removeAttribute(name);
    return true;
  }
  return false;
}

// There is no HTMLElement during SSR. Falling back to an empty class lets this
// module be imported (and the class exported) without touching browser globals.
const BaseElement: typeof HTMLElement =
  typeof HTMLElement === "undefined" ? (class {} as unknown as typeof HTMLElement) : HTMLElement;

export class SkeletonWeb extends BaseElement {
  static observedAttributes = ["loading"];

  // Because the attribute is normalized, presence is the single source of truth.
  get loading(): boolean {
    return this.hasAttribute("loading");
  }

  set loading(value: boolean) {
    this.toggleAttribute("loading", Boolean(value));
  }

  connectedCallback(): void {
    adoptStyles(this.getRootNode());
  }

  attributeChangedCallback(name: string, _oldValue: string | null, value: string | null): void {
    if (name !== "loading") return;
    if (normalizeBooleanAttribute(this, name, value)) return;
    this.toggleAttribute("inert", value !== null);
  }
}

if (typeof customElements !== "undefined" && !customElements.get(NAME)) {
  customElements.define(NAME, SkeletonWeb);
}
