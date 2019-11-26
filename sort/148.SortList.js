/**
 * 排序列表
 * https://leetcode-cn.com/problems/sort-list/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }
};

// 快排
function qsortList() {

}

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

let l = new ListNode(1);
let l2 = new ListNode(2);
let l3= new ListNode(4);
l.next = l2;
l2.next = l3;

console.log(sortList(l))
