/*
 * [
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

function arrayToTree(arr) {
    let result = [];
    let getTree = (array) => {
        
    }

    // getTree()
    result = arr.filter(item => !item.parent);

    for(let i = 0; i < arr.length; i++) {
        // if (arr[i].parent)
    }



    return result;
}

console.log(arrayToTree([
    { id: 2, text: '研发计划', parent: 1 },
    { id: 3, text: '产品方案', parent: 1 },
    { id: 5, text: '技术方案', parent: 2 },
    { id: 4, text: '第二主题' },
    { id: 1, text: '中心主题' },
  ]))
