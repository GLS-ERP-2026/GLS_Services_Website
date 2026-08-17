const BASE = import.meta.env.BASE_URL;

/** Prefixes a root-relative path (e.g. "/about.html") with the deployment base path. */
export function asset(path: string): string {
  return BASE + path.replace(/^\//, '');
}

/** window.location.pathname with the deployment base path stripped, for comparing against root-relative page paths. */
export function currentPagePath(): string {
  if (typeof window === 'undefined') return '';
  const pathname = window.location.pathname;
  if (BASE !== '/' && pathname.startsWith(BASE)) {
    return '/' + pathname.slice(BASE.length);
  }
  return pathname;
}
