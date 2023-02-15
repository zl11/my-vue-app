/*
 * @Author: zhangpenghua
 * @Date: 2022-08-25 16:09:04
 * @LastEditors: zhangpenghua
 * @LastEditTime: 2022-08-29 08:56:24
 */

/**
 * 判断是否为空字符串
 * @param str 
 * @returns boolean
 */
export function isEmptyStr(str: string) {
  let res = false;
  if (
    str == null ||
    str == undefined ||
    str.toString().trim() == "" ||
    str == "null" ||
    str == "undefined" ||
    str.length == 0 ||
    JSON.stringify(str) == "{}"
  ) {
    res = true;
  }
  return res;
}

export function sortObjByKey(obj: ISimpleObject) {
  const keys = Object.keys(obj).sort();
  const newObj: ISimpleObject = {};
  for(let i = 0; i < keys.length; i++) {
    const index = keys[i];
    newObj[index] = obj[index];
  }
  return newObj
}
