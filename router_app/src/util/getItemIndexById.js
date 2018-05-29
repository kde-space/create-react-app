/**
 * オブジェクトの配列からidがマッチするオブジェクト要素のインデックスを返す
 * @param {object[]} targets
 * @param {number} id
 */
export default function getItemIndexById(targets, id) {
  return targets.findIndex(item => item.id === id);
}