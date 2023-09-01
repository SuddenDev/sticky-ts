interface StickyOptions {
  wrap?: boolean;
  wrapWith?: string;
  marginTop?: number;
  marginBottom?: number;
  stickyFor?: number;
  stickyClass?: string | null;
  stickyContainer?: string;
}

interface StickyElement {
  active?: boolean;
  marginTop?: number;
  marginBottom?: number;
  stickyFor?: number;
  stickyClass?: string | null;
  wrap?: boolean;
  stickyContainer?: string;
  container?: HTMLElement;
  rect?: StickyRectangle;
  resizeListener?: () => void;
  scrollListener?: () => void;
}

interface StickyRectangle {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface ViewportSize {
  width: number;
  height: number;
}