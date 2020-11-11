/*
    树结构转化
[
  { id: 2, text: '研发计划', parent: 1 },
  { id: 3, text: '产品方案', parent: 1 },
  { id: 5, text: '技术方案', parent: 2 },
  { id: 4, text: '第二主题' },
  { id: 1, text: '中心主题' },
]
=>
[
  {
    id: 1,
    text: '中心主题',
    children: [{
      id: 2,
      text: '研发计划'，
      children: [{ id: 5, text: '技术方案' }]
    },{
      id: 3,
      text: '产品方案'
   }],
  },
  {
    id: 4,
    text: '第二主题',
  },
]
*/
function list2Tree(list) {
  if (!list || !list.length) {
    return []
  }

  for(let i = 0; i < list.length - 1; i++) {
    let prev = list[i];
    for(let j = 1; j < list.length; j++) {
      let current = list[j];

      // 当前节点是前个节点子节点
      if (prev.id === current.parent) {
        if (!prev.children) {
          prev.children = [];
        }
        prev.children.push(current)
        list.splice(j, 1);
      }
      // 当前节点是前个节点父节点
      if (prev.parent === current.id) {
        if (!current.children) {
          current.children = [];
        }
        current.children.push(prev);
        list.splice(i, 1);
        i--;
        break;
      }
    }
  }
  return JSON.stringify(list);
}
let list = [
  { id: 2, text: '研发计划', parent: 1 },
  { id: 3, text: '产品方案', parent: 1 },
  { id: 5, text: '技术方案', parent: 2 },
  { id: 4, text: '第二主题' },
  { id: 1, text: '中心主题' },
]
console.log(list2Tree(list))