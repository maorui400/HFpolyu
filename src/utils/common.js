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
// 移動端設備判斷 chen_2025/11/23
export const detectDevice = () => {
  // 方法1：基于 userAgent（主流）
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const mobileKeywords = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
  
  // 方法2：辅助判断屏幕宽度（增强鲁棒性）
  const isSmallScreen = window.innerWidth <= 768;
  
  return mobileKeywords.test(userAgent) || isSmallScreen;
};