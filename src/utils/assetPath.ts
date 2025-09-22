/**
 * Build an asset URL that respects Vite's configured base path.
 * This avoids hardcoding repository or domain-specific prefixes and
 * works for local dev, custom domains, and subpath (e.g. GitHub Pages) deployments.
 */
export const getAssetPath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Vite injects BASE_URL at build time based on vite.config.ts `base`
  const base = import.meta.env.BASE_URL || '/';

  // Normalize to avoid double slashes
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;

  return `${normalizedBase}${normalizedPath}`;
};
