// utils/index.js
export function createPageUrl(title) {
  const lower = title.toLowerCase();
  if (lower === "home") return "/";
  return `/${lower}`;
}