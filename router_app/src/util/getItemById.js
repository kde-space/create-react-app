/**
 * オブジェクトの配列からidがマッチするオブジェクト要素を返す
 * @param {object[]} targets
 * @param {number} id
 */
export default function getItemById(targets, id) {
  return targets.find(item => item.id === id);
}