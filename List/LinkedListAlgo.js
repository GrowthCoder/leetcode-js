/**
 * 1、单链表反转
 */

 class Node {
   constructor (data) {
    this.data = data
    this.next = null
   }
 }

 class LinkedList {
   constructor () {
     this.head = new Node('head')
   }
  
  // 根据value查找节点
  findByValue (item) {
    let currentNode = this.head

    while(currentNode != null && currentNode.data !== item) {
      currentNode = currentNode.next
    }
    // lg(currentNode, 'findByValue')

    return currentNode == null ? -1 : currentNode
  }
  // 根据index查找对应节点
  findByIndex (index) {
    let currentNode = this.head
    let pos = 0

    while(currentNode != null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }
    lg(currentNode, 'findByIndex')
    return currentNode == null ? -1 : currentNode
  }
  // 指定元素向后插入
  insert (newdata, data) {
    const currentNode = this.findByValue(data)

    if (currentNode == -1) return false

    const newNode = new Node(newdata)

    newNode.next = currentNode.next
    currentNode.next = newNode
  }
  // 查找前一个
  findPrev (item) {
    let currentNode = this.head

    while (currentNode !== null && currentNode.next.data !== item) {
      currentNode = currentNode.next
    }

    if (currentNode.next == null) {
      return -1
    }

    return currentNode
  }
  // 根据值删除
  remove (item) {
    let desNode = this.findByValue(item)

    if (desNode == -1) {
      lg('未找到元素')
      return 
    }

    const preNode = this.findPrev(item)
    preNode.next = desNode.next
  }
  // 遍历显示所以节点
  display () {
    let currentNode = this.head

    while (currentNode !== null) {
      lg(currentNode.data, 'display')
      currentNode = currentNode.next
    }
  }

  // 单链表反转
  
 }