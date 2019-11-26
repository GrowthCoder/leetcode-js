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
  let fast = head.next;
  let slow = head;

  while(fast.next !== null && slow.next !== null) {
     
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
let l3 = new ListNode(3);
let l4= new ListNode(4);
l.next = l2;
l2.next = l3;
l3.next = l4;

console.log(sortList(l))
