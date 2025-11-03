export const getImgSrc = (path) => {
  return new URL(`${path}`, import.meta.url).href;
}