var arr = [1, 8, 9, 5, 2, 8, 1];
var len = [];
var arrsize = arr.length
var visited = 0;

for (var i = 0; i < arrsize; i++) {
  var count = 1;
  for (var j = i + 1; j < arrsize; j++) {
    if (arr[i] === arr[j]) {
      count++;
      len[j] = visited;
    }
  }
  if (len[i] != visited) {
    len[i] = count;
  }
}
for (var i = 0; i < arrsize; i++) {
  if (len[i] != visited)
    console.log(arr[i], len[i]);
}