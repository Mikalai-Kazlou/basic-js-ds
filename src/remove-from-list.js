const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(listIn, k) {
  let current = listIn;
  let listOut = null;
  let values = [];

  while (current !== null) {
    if (current.value !== k) {
      values.push(current.value);
    }
    current = current.next;
  }

  for (let i = values.length - 1; i >= 0; i--) {
    let next = listOut;
    listOut = new ListNode(values[i]);
    listOut.next = next;
  }

  return listOut;
}

module.exports = {
  removeKFromList
};
