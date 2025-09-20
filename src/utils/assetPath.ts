/**
 * Get the correct asset path based on the environment
 * In development: returns the path as-is
 * In production: adds the /royal-gate-travels/ prefix for GitHub Pages
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production, add the repository name prefix
  if (import.meta.env.PROD) {
    return `/royal-gate-travels/${cleanPath}`;
  }
  
  // In development, return with leading slash
  return `/${cleanPath}`;
};
