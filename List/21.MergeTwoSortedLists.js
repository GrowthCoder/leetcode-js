/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) return;

  let node = new ListNode(null);
  // 保存到一个变量中 后续会更改temp指向 最终返回node.next 可以找到排序好的链路
  let temp = node;
  while(l1 && l2) {
    if (l1.val <= l2.val) {
      // l1小 temp指向l1 更新l1指针
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    // 指向下一个节点
    temp = temp.next;
  }

  // 上述遍历完 l1 或 l2 不为null，直接插入到temp中
  // l1 l2都是内部排序好的链表
  if (!l1) {
    temp.next = l2;
  }
  if (!l2) {
    temp.next = l1;
  }
  return node.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
let l11 = new ListNode(1);
let l12 = new ListNode(2);
let l14 = new ListNode(4);
let l21 = new ListNode(1);
let l23 = new ListNode(3);
let l24 = new ListNode(4);
l11.next = l12;
l12.next = l14;

l21.next = l23;
l23.next = l24;
console.log(mergeTwoLists(l11, l21));