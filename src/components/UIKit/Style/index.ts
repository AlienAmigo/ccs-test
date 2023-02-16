// Сетка

// Breakpoints
export const SCREEN = {
  XS: `360px`,
  SM: `768px`,
  LG: `1440px`
};

// Breakpoints
export const BREAKPOINTS = {
  get XXS() {
    return `max-width: calc(${SCREEN.XS} - 1px)`;
  },
  get XS() {
    return `max-width: calc(${SCREEN.SM} - 1px)`;
  },
  get SM() {
    return `max-width: calc(${SCREEN.LG} - 1px)`;
  }
};
