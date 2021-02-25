
//菜单树
//递归树算法 将pid-id的数据库返回的json 转为树json
export function toTree(data: any[]): any[] {
  // 删除 所有 children,以防止多次调用
  let tree: any[] = []
  data.forEach(function (item) {
    // const o: any = {
    //   title: item.menuName as string,
    //   value: item.id as number,
    //   key: item.id as number,
    //   menuIcon: item.menuIcon as string,
    //   menuName: item.menuName as string,
    //   menuRouter: item.menuRouter as string,
    //   parentId: item.parentId as number,
    // }
    delete item.children
    tree.push(item)
  });
  // 将数据存储为 以id为KEY的map索引数据列 
  var map = new Map<any, any>();
  tree.forEach(function (item: any) {
    const id: number = item.key
    map.set(id, item)
  });

  let val: any[] = [];
  tree.forEach(function (item) {
    // 以当前遍历项，的pid,去map对象中找到索引的id
    if ('parentId' in item) {
      var parent = map.get(item.parentId);
    }

    // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
    if (parent) {
      (parent.children || (parent.children = [])).push(item); //这里更改的是map对象的数据(索引数据)
      // console.log(map);
    } else {
      //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      val.push(item);
    }
  });

  return val
}