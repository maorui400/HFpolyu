export const getImgSrc = (path) => {

  //  // 处理以 @/assets 开头的路径
  // if (path.startsWith('@/assets')) {
  //   console.log('1');
    
  //   return new URL(`../${path.replace('@/', '')}`, import.meta.url).href
  // }
  // // 处理相对路径
  //   console.log('2');

  // return new URL(`${path}`, import.meta.url).href
  let _url = new URL(`${path}`, import.meta.url).href;
  console.log('_url',_url);

  return _url
}
