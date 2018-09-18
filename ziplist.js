const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];

function ziplist(list1, list2) {
  const resultList = [];
  for (let i = 0; i < list1.length; i++) {
    resultList.push(list1[i], list2[i]);
  }
  return resultList;
}

console.log(ziplist(test1, test2));

function zipListTheSimpleWay(list1, list2) {
  const zipped = _.zip(list1, list2);
  return _.flatten(zipped);
}

console.log(zipListTheSimpleWay(test1, test2));
