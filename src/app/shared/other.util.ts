
export const EMPTY_VALUE = null;

export function getCurrentRoute(): string {
  return window.location.href.replace(window.location.origin, '');
}

export function isBlankOrEmpty(s: string): boolean {
  return (s && s.trim().length === 0) || !s;
}

export function getCssProperties(nativeElement: any): Map<string, string> {
  const css = window.getComputedStyle(nativeElement);
  const cssProperties = new Map<string, string>();

  for (let i = 0; i < css.length; i++) {
    cssProperties.set(css[i], css.getPropertyValue(css[i]));
  }

  return cssProperties;
}

export function getCssProperty(nativeElement: any, name: string) {
  return getCssProperties(nativeElement).get(name);
}
