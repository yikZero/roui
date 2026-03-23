import "@testing-library/jest-dom/vitest"

// Polyfill ResizeObserver for jsdom (required by input-otp)
if (typeof globalThis.ResizeObserver === "undefined") {
  globalThis.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof ResizeObserver
}

// Polyfill Element.getAnimations for jsdom (required by @base-ui/react scroll-area)
if (typeof Element.prototype.getAnimations === "undefined") {
  Element.prototype.getAnimations = () => []
}
