import Taro from '@tarojs/taro'
/**
 * @description 往storage中插入数据
 * @param {string} key
 * @param {string} value
 */
export const insertItemToStorage = (key, value) => {
  Taro.setStorageSync(key, value)
}
/**
 * @description 从storage中读取数据
 * @param {string} key
 */
export const getItemFromStorage = (key) => {
  let storage = Taro.getStorageSync(key)
  return storage 
}
/**
 * @description 删除storage中指定的数据
 * @param {string} key
 */
export const deleteItemFromStorage = (key) => {
  Taro.removeStorageSync(key);
}
