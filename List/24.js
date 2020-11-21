/**
 * Definition for singly-linked list. 单链表反转
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/solution/jian-zhi-offer-24-fan-zhuan-lian-biao-die-dai-di-2/
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val) {
   this.val = val;
   this.next = null;
}

// 原地反转 双指针 当前指针 前指针
var reverseList = function(head) {
    var curr = head;
    var prev = null; // 存放当前节点 前一个节点指针

    while(curr) {
        var next = curr.next; // 当前节点 下一个节点
        curr.next = prev; // 当前节点反转指向前一个节点
        prev = curr; // 移动前一个节点至当前节点
        curr = next; // 移动当前节点到下一个节点
    }
    return prev;
};

// 递归
var reverseListDep = function(head) { 
    function recur(cur, pre) {
        if (!cur) return pre;

        var res = recur(cur.next, cur);
        cur.next = pre;
        return res;
    }
    return recur(head, null);
}

var l1 = new ListNode(1)
var l2 = new ListNode(2)
var l3 = new ListNode(3)
var l4 = new ListNode(4)
var l5 = new ListNode(5)
l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
console.log(reverseListDep(l1))